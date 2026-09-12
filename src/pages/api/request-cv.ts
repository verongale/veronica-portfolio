import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim() || '';

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const recipientEmail = import.meta.env.CV_REQUEST_EMAIL;

    if (!resendApiKey || !recipientEmail) {
      console.error('Missing Resend environment variables.');

      return new Response(
        JSON.stringify({ error: 'Server configuration error.' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: email,
        subject: `CV request from ${name}`,
        html: `
          <h2>New CV request</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message || 'No message provided.'}
          </p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();

      console.error('Resend error:', error);

      return new Response(
        JSON.stringify({ error: 'Unable to send the request.' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('CV request error:', error);

    return new Response(
      JSON.stringify({ error: 'Unexpected server error.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
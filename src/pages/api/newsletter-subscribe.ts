import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
    
    if (!apiKey) {
      console.error('BUTTONDOWN_API_KEY is not set');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        metadata: {
          source: 'vibe-blog-website',
          signup_date: new Date().toISOString()
        }
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Buttondown API error:', JSON.stringify(error, null, 2));
      
      let errorMessage = 'Failed to subscribe';
      
      if (error.email) {
        if (Array.isArray(error.email)) {
          errorMessage = error.email[0];
        } else if (typeof error.email === 'string') {
          errorMessage = error.email;
        }
      } else if (error.detail) {
        errorMessage = error.detail;
      } else if (error.message) {
        errorMessage = error.message;
      } else if (error.non_field_errors) {
        errorMessage = error.non_field_errors[0];
      }
      
      return new Response(
        JSON.stringify({ error: errorMessage }), 
        { 
          status: response.status,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Thanks for subscribing! Check your inbox to confirm.' }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};
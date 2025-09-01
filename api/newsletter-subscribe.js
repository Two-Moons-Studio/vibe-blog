export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request for CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.BUTTONDOWN_API_KEY;
    
    if (!apiKey) {
      console.error('BUTTONDOWN_API_KEY is not set');
      return res.status(500).json({ error: 'Server configuration error' });
    }
    
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
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
      
      return res.status(response.status).json({ error: errorMessage });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Thanks for subscribing! Check your inbox to confirm.' 
    });
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return res.status(500).json({ 
      error: 'Something went wrong. Please try again.' 
    });
  }
}
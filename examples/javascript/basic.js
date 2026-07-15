/**
 * Spam Detector API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the Spam Detector API.
 * API Documentation: https://docs.apiverve.com/ref/spamdetector
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/spamdetector';

/**
 * Make a POST request to the Spam Detector API
 */
async function callSpamDetectorAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;text&quot;: &quot;Can you please spare some change?! Desperate!!! Send cash&quot;,
    &quot;email&quot;: &quot;bankers@fre.323hotlain.net&quot;,
    &quot;ip&quot;: &quot;122.180.184.182&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callSpamDetectorAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });

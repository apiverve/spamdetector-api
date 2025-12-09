/**
 * Basic Example - Spam Detector API
 *
 * This example demonstrates how to use the Spam Detector API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const spamdetectorAPI = require('../index.js');

// Initialize the API client
const api = new spamdetectorAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = {
  "text": "Can you please spare some change?! Desperate!!! Send cash",
  "email": "bankers@fre.323hotlain.net",
  "ip": "122.180.184.182"
};

// Make the API request using callback
console.log('Making request to Spam Detector API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});

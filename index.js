const axios = require('axios');

// Replace 'YOUR_API_KEY' with your actual OpenUV API key
const apiKey = '';

// Replace 'YOUR_LATITUDE' and 'YOUR_LONGITUDE' with your location coordinates
const latitude = '';
const longitude = '';

// Define the API endpoint
const apiUrl = `https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`;

// Set up headers with the API key for authentication
const headers = {
  'x-access-token': apiKey,
};

axios
  .get(apiUrl, { headers })
  .then((response) => {
    // Check if the request was successful
    if (response.status === 200) {
      const uvData = response.data.result;
      const uvIndex = uvData.uv;

      // You now have the UV index in the 'uvIndex' variable
      console.log(`UV Index: ${uvIndex}`);
      if(uvIndex >= 5) {console.log('You really should use sunscreen')}
      else {console.log('Its a good day to not use sunscreen')}
    } else {
      console.error(`Error: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`An error occurred: ${error.message}`);
  });


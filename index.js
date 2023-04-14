// Initialize the required packages and variables
const express = require('express');
const app = express();
const port = 3000;
let message = "Hello World!";

// Define the API endpoints
app.get('/getmessage', (req, res) => {
  // Return the value of the global variable message
  res.send(message);
});

app.post('/receivemessage', express.json(), (req, res) => {
  // Update the value of the global variable message
  message = req.body.message;
  res.send('Message received!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

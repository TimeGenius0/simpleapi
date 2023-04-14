var express = require('express');
var router = express.Router();

const app = express();
const port = 3000;
let message = "Hello World!";

// Define the API endpoints
app.get('/getmessage', (req, res) => {
  // Return the value of the global variable message
  res.send(message);
});
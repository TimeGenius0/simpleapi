var express = require('express');
var router = express.Router();

const app = express();
const port = 3000;
let message = "Hello World!";

app.post('/sendmessage', express.json(), (req, res) => {
  // Update the value of the global variable message
  message = req.body.message;
  res.send('Message received!');
});
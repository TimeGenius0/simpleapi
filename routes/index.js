// Initialize the required packages and variables
const express = require('express');
const app = express();
const port = 3000;
let message = "Hello World!";



app.get('/', (req, res) => console.log(message);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

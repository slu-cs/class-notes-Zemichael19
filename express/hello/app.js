//hello world web server
const express = require('express');

//create the server
const app = express();


//respond to a single request
app.get('/', function(request, response) {
  response.send('Hello Mike');
})

//start the server
app.listen(3000);
console.log('Server is ready');

//bakery web server
const express = require('express');

//create the server
const app = express();

//ignore icon requests
app.get('/favicon.ico', function(request, response) {
  response.status(204).end();
});

//log requests to the console
app.use(function(request, response, next) {
  console.log('---------------------', new Date().toLocaleTimeString());
  console.log(request.method, request.url);
  console.log('Body = ', request.body);
  next(); //keep handling this request
});

//home page
app.get('/', function(request, response) {
  response.send(`<h1>Bakery</h1>
    <ul>
      <li><a href = "/cakes">Cakes</a></li>
      <li><a href = "/pies">Pies</a></li>
      </ul>`);
});

//routing
app.use('/cakes', require('./cakes.js'));
app.use('/pies', require('./pies.js'))
//handle undefined routes
app.use(function(request, response, next){
  console.log('Replied with 404');
  response.status(404).end();
})

//handle other errors
app.use(function(error, request, response, next){
  console.error(error.stack);
  response.status(500).send(error.message);
})
//start the server
app.listen(3000);
console.log('Server is ready');

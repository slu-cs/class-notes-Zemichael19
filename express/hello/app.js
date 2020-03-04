//hello world web server
const express = require('express');

//create the server
const app = express();


//cs-linuxlab-19.stlawu.edu:3000/
app.get('/', function(request, response) {
  response.send('Hello Mike');
})

//cs-linuxlab-19.stlawu.edu:3000/foo
app.get('/foo', function(request, response) {
  response.send('Hello foo');
})

//cs-linuxlab-19.stlawu.edu:3000/foo/bar
app.get('/foo/bar', function(request, response) {
  response.send('Hello bar');
});

//cs-linuxlab-19.stlawu.edu:3000/zap/z (for any z)
app.get('/zap/:z', function(request, response) {
  response.send(`Hello ${request.params.z}`);
})

//cs-linuxlab-19.stlawu.edu:3000/zap/?x=&y=
app.get('/zap', function(request, response) {
  response.send(`Hello zap with ${request.params.x} and ${request.params.y}`);
})

//start the server
app.listen(3000);
console.log('Server is ready');

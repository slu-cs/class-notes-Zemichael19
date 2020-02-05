//syntax for console and file input

const readline = require('readline');

//console configuration
const user = readline.createInterface({
  input: process.stdin, output: process.stdout
});


//console input
user.question('Filename: ', function(filename) {
  console.log(filename);
});

//this part is't after the console input
console.log('here');

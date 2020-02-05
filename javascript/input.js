//syntax for console and file input

const readline = require('readline');
const fs = require('fs');
//console configuration
const user = readline.createInterface({
  input: process.stdin, output: process.stdout
});


//console input
user.question('Filename: ', function(filename) {
  //file configuration
  const file = readline.createInterface({
    input: fs.createReadStream(filename);
  });

  //asynchronous line-by-line input
  file.on('line', function(line) {
    console.log(line);
  });

  file.on('close', function(){
    process.exit(0);
  })

});




q1.exec().then(function(r1) {
  console.log(r1);
  return q2.exec();
}).then(r2 => console.log(r2))
.catch(error => console.error(error.stack))


const numbers = [1,2,3,4,5];


const check = function(number){
  if (number%2==0) {
    return true;
  }
  return false;
}


const filter = function(array, check) {
  const copy = [];
  for (const i of array) {
    if (check(i)) {
      copy.push(i);
    }
  }
  return copy;
}

console.log(filter(numbers, check));

//////////////////////////////////////////
console.log(numbers.sort((a,b) => a - b));
//////////////////////////////////////////
const result = [];
file.on('line', function(line) {
  const colums = line.split(',');
  result.push({
    field: columns[0],
    major: Number(columns[1]),
    minor: Number(columns[2])
  })
})

file.close('close', function(){
  result.sort((a,b) => (a.major + a.minor/2) - (b.major + b.minor/2));
});
////////////////////////////////////////////////////
f('hello', function(error, result) {
  if (error) console.error(error.stack);
  console.log(result);
});

f('hello').then( result => console.log(result)).catch(error => console.error(error.stack));

///////////////////////////////
q1.exec().then(function(r1){
  console.log(r1);
  return q2.exec();
}).then(r2 => console.log(r2)).catch(error => console.error(error.stack));

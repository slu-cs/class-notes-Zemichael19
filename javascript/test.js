

const f1 = function() {
  return Math.random();
}

const f2 = function() {
  return Math.random();
}


Promise.all(f1, f2).then(function(f1, f2) {
  if (f1>f2) {
    console.log('f1')
  } else if (f2>f1) {
    console.log('f2');
  } else {
    console.log('equal');
  }
}).catch(error=>console.error(error.stack));

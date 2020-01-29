
let x = 0;
for (let i = 1; i <= 10 ; i++) {
  x += i**2;
}
console.log(x);


i = 0
j = 1
total = 0
while (total < 1000) {
  total = i + j
  i = j
  j = total
}

console.log(j);


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

for (let i = 1; i <= 100; i++) {
  if (i%3 === 0 && i%5!==0) || (i%3 !== 0 && i%5===0) {
    console.log(i);
  }
}

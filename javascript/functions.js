//function syntax

//function definition

const avg = function(a,b) {
  return (a+b)/2;
};

//function call
console.log(avg(5,6));

//another definition
const print = function(a,b) {
  console.log(`a=${a}, b=${b}`);
};

//undefined values

const result = print(7,8);
console.log(result); // prints undefined or null in java
print(9); //parameters are set as undefined
print(); //undefined


//object literal with a method
const rectangle = {
  width: 10, height = 20, area: function() { //functions that belong to objects
    return this.width * this.height;
  }
};

//method call
console.log(rectangle.area());

//constructor definition
const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

//shared method
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

//constructor objects
const small = new Rectangle(1,2);
const large = new Rectangle(10,20);

//shared method
console.log(small.area());
console.log(large.area());

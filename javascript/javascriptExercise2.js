

const Linear = {name: "Linear Algebra", number: 217};
const ModernAsia = {name: "History", number: 106};
const Web = {name: "Web ", number: 332};
const Calc = {name: "Calc", number: 205}

const classes = [Linear, ModernAsia, Web, Calc];

let i = 0;
for (const x of classes) {
  if (x.number > i) {
    i = x.number;
  }
}
console.log(i);;

const Book = function(title, authors) {
  this.title = title;
  this.authors = authors;
}

Book.prototype.authorName = function(name) {
  for (const x of authors) {
    if (x===name) {
      return name
    }
  }

}

//object and array syntax

//object literal
const point = {x: 1, y: 2}
console.log(point);


//accessing properties
console.log(point.x);

//changing properties
point.x = 3;

//nested object literal
const circle = {
  center: point, radius:4
};


//Access subproperties
console.log(circle.center.x);

//undefined subproperties
console.log(circle.color); //undefined
circle.color = 'blue';
console.log(circle);

//array
const languages = ['HTML', 'CSS', 'JS']
console.log(languages);

//accessing length and elements
for (let i = 0; i < languages.length; i++) {
  console.log(langauges[i]);
}


//changing elements
langauges[2] = 'Javascript';

//adding elements
langauges.push('MongoDB');

//iterating over elements
for (const lang of langauges) {
  console.log(lang);
}

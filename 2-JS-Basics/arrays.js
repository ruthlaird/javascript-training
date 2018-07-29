//Lecture: Arrays
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];
console.log(john);

//push adds an element to the end of an array
john.push('blue');
console.log(john);

//unshift adds an element to the beginning of an array
john.unshift('Mr.');
console.log(john);

//pop removes the end value from an array
john.pop();
console.log(john);

//shift removes the beginning value from an array
john.shift();
console.log(john);

//indexOf returns the position of the element passed in
//returns -1 if the element is not in the array
var pos = john.indexOf('Smith');
console.log(pos);

if (john.indexOf('teacher') === -1){
    console.log('John is NOT a teacher');
}
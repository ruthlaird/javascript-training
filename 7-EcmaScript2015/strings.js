// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 (template literals)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`)


//Starts With / Ends With / Includes - returns true/false 
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.startsWith('j')); //false
console.log(n.endsWith('Smith'));   //true
console.log(n.endsWith('Sm'));  //false
console.log(n.includes(' ')); //true
console.log(n.includes('r'));   //false

//Repeat
console.log(`${firstName} `.repeat(5)); // prints 'John John John John John'
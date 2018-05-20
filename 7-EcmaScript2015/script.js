// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller'; //throws an error because can't reassign value to a const
console.log(name6);
*/

/*
// ES5
// var is function scoped
function driversLicence5(passedTest) {
    
    console.log(firstName); //this is allowed and will print 'undefined' to the console as the variable has been hoisted
    
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1995;

    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now offically allowed to drive a car.');
}

driversLicence5(true);
*/

// ES6
/*
// const & let are block scoped, so variables are only accessible inside the same block
function driversLicence6(passedTest) {
    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
        
        console.log(firstName + ', born in ' + yearOfBirth + ', is now offically allowed to drive a car.'); // this works as it's in the same block
    }
    
//     console.log(firstName + ', born in ' + yearOfBirth + ', is now offically allowed to drive a car.'); //this won't work as no longer have access to the variables
}

driversLicence6(true);
*/

/*
// so need to move let declarations and consts that need access to outside of the block
function driversLicence6(passedTest) {
    
//    console.log(firstName); //this is not allowed and will error as the variables have been hoisted but we can't access them until they've been declared
   
    let firstName;
    const yearOfBirth = 1996;
    
    if (passedTest) {
        firstName = 'John';
    }
    
     console.log(firstName + ', born in ' + yearOfBirth + ', is now offically allowed to drive a car.'); //this won't work as no longer have access to the variables
}

driversLicence6(true);

// because variables are block scoped can use the same name for them in different blocks

let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES5 - IFFEs to make variable not accessible from the outside
(function() {
    var c = 3;
})
//console.log(c); //-> error c is not defined as 'c' is not accessible outside of the scope of the function it's in

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + b); //-> error a is not defined as 'a' is not accessible outside of the scope of the block it's in
console.log(c); //will print '3' to the console as the var is inside a block not a function and so is still within scope to be accessed
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions

// arrow functions don't have their own 'this' keyword - use the 'this' keyword of the function they're written in (have a lexical this variable)

/*
// ES5
var box5 = {
    color: 'green',
    position: 1,
    
//    clickMe: function() {
//        document.querySelector('.green').addEventListener('click', function() {
//            var str = 'This is box number ' + this.position + ' and it is ' + this.color; // can't do this as the 'this' here refers to the window object which doesn't have access to the position and color properties. It doesn't refer to the box object
//            alert(str);
//        })
//    }
    
    //As a workaround need to create a variable inside the function that can store the this
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
        var str = 'This is box number ' + self.position + ' and it is ' + self.color;
        alert(str);
        });
    }
}

box5.clickMe();
*/

/*
// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
        var str = `This is box number ${this.position} and it is ${this.color}`;
        alert(str);
        });
    }
}

box6.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = 
    function(friends) {
    
    var arr = friends5.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this)); //as before don't have access to this.name here but can bind it with this to give it access
    console.log(arr);
}

var friends5 = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends5);

// ES6
Person.prototype.myFriends6 = 
    function(friends) {
    
    const arr = friends6.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

const friends6 = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends6);
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Destructuring

// extract data from a data structure e.g. object or array

// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

// ES6
const [name6, age6] = ['John', 26];
console.log(name6); 
console.log(age6);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);




function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrays

const boxes = document.querySelectorAll('.box');

// ES5
//var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function(cur) {
//    cur.style.backgroundColor = 'dodgerblue';
//})

// ES6
// 'from' transforms from node list to an array
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// Can't use a break or a continue in a for each loop, so had to use for loop in ES5
// ES5
//for(var i = 0; i < boxesArr5.length; i++){
//    
//    if(boxesArr5[i].className === 'box blue') {
//        continue;
//    }
//    
//    boxesArr5[i].textContent = 'I changed to blue';
//}

// ES6 - replaced by 'for of' loops in ES6. Can also use 'includes'
for (const cur of boxesArr6) {
    
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >=18));
console.log(ages.find(cur => cur >=18));
*/

/*
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Spread Operator - expands an array into it's components
// used in function call

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

//can also be used to combine arrays and also add other items to the combined array
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

//can also be used on node lists (which are returned by querySelectorAll)
const h = document.querySelector('h1'); //returns a single node
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Rest parameters - allow you to pass an arbitary num of parameters in to a function and use them in that function
// (opposite of the spread operator. Spread transforms an array into multiple parameters)
// Rest transforms multiple parameters in to a single array
// used in function declaration

/*
// ES5 - use arguments to return an array like structure but is an object not an array so need to convert it to an array
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/

/*
// ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); //slice from position 1 to exclude the 'limit' as that will be included in the arguments
    console.log(argsArr);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965);
isFullAge6(21, 1990, 1999, 1965, 2016, 1987);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Default paramaters

/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'american': nationality = nationality;
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
*/

/*
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
// can create an object without specifiying values for all parameters - those not specified get the value 'undefined', which the function constructor can use to set default values

//can override default values by specifying them in the object
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Maps
/*
const question = new Map();
question.set('question', 'What is the offical name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)) {
//   question.delete(4);
//    console.log('Answer 4 is here');
}

// delete all values from the map
//question.clear();


//can loop through maps
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
//    console.log(`This is ${key}, and it's set to ${value}`);
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the number of the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
//Class definitions are not hoisted - unlike function constructors need to first implement a class and can only use it later in the code
//Can only add methods to classes, not properties

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;    
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);        
    }
    
    //can add static methods but these aren't inherited by the instances of the object - useful for helper methods
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes with subclasses

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

//set up prototype chain by using object.create - manually set prototype of the object - connects object's prototypes
Athlete5.prototype = Object.create(Person5.prototype);

//once prototype is set up can add methods to it
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;    
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);        
    }    
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);        
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
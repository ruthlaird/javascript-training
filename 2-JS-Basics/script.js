//Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

//Lecture: variables 2
/*
var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;
console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
*/

/*
//Lecture: operators
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageMark = 26;
//ageJohn = ageMark;

ageJohn++;
ageMark*=2;

console.log(ageJohn);
console.log(ageMark);
*/

/*
//Lecture: if/else statements
var name = 'John';
var age = 26;
var isMarried = false;

if (isMarried){
    console.log(name + ' is married');
} else{
   console.log(name + ' will hopefully marry soon'); 
}


//type conversion using ==
if (23 == '23'){
    console.log('These are the same');
}
*/

/*
//Lecture: boolean logic and switch
var age  = 25;

if (age < 20){
    console.log('John is a teenager');
} else if (age >= 20 && age < 30){
    console.log('John is a young man');       
} else{
    console.log('John is a man');
}


var job = 'teacher';

job = prompt('What does John do?');

switch (job){
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab');
        break;
    case 'cop':
        console.log('John fights crime');
        break;
    default:
        console.log('John does something else');
}
*/

/*
//Coding challenge 1
var johnHeight = 140;
var markHeight = 150;
var peterHeight = 145;

var johnAge = 30;
var markAge = 20;
var peterAge = 25;

const multiplier = 5;

var johnScore = johnHeight + johnAge * multiplier;
var markScore = markHeight + markAge * multiplier;
var peterScore = peterHeight + peterAge * multiplier;

if (johnScore === markScore && johnScore === peterScore){
    console.log('It\'s a draw');
} else if (johnScore > markScore && johnScore > peterScore){
    console.log('John wins');
} else if(markScore > johnScore && markScore > peterScore){
    console.log('Mark wins');
} else{
    console.log('Peter wins');
}
*/

/*
//Lecture: functions
function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageJohn);
//console.log(ageMike);
//console.log(ageMary);

function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement>=0){
        console.log(name + ' retires in ' + retirement + ' years');    
    }
    else{
        console.log(name + ' has already retired');
    }
    
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

/*
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
*/

/*
//Lecture: Objects and properties
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.name);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john.job = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
console.log(jane);
*/

//Lecture: Objects and methods

//v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function (){
        return 2016 - this.yearOfBirth;
    }
};

console.log(john);
console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
*/
/*
//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function (){
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);
*/

/*
//Lecture: Loops and iterations

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

var i = 0;
while (i < names.length){
    console.log(names[i]);
    i++;
}

for (var i = 1; i <=5; i++){
    console.log(i);
    
    if (i === 3){
        break;
    }
}

for (var i = 1; i <=5; i++){    
    if (i === 3){
        continue;
    }
    
    console.log(i);

}
*/

//Coding Challenge 2

var yearsBorn_1 = [1965, 2008, 1992];
var yearsBorn_2 = [2011, 1985, 2001]

function printFullAge(years){
    console.log(years);
    var ages = [];
    
    for (var i = 0; i < years.length; i++) {
        ages.push(2016 - years[i]);
    }
    
    var fullAges = [];
    for (var i = 0; i < ages.length; i++){
        var text = 'Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is '
        if (ages[i] >= 18){
            console.log(text + 'of full age')
            fullAges.push(true);        
        } else {
            console.log(text + 'NOT of full age')
            fullAges.push(false);
        }
    }
    console.log(fullAges);
    return(fullAges);
}

var full_1 = printFullAge(yearsBorn_1);
var full_2 = printFullAge(yearsBorn_2);

 

// Lecture: let and const

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

// ES6
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
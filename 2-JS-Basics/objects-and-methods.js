//Lecture: Objects and methods

//v1.0
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
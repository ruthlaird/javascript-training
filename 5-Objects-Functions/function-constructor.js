//Function Constructor - newly created object inherits from the constuctor's prototype property


/* instaed of:
var john {
    name: "John",
    yearOfBirth: 1990,
    job: "teacher",
};
... plus loads more for each different person
*/


var Person = function(name, yearOfBirth, job){
    this._name = name;
    this._yearOfBirth = yearOfBirth;
    this._job = job;
//    this.calculateAge = function(){
//        console.log(2016 - this.yearOfBirth);
//    }
}

Person.prototype.calculateAge = function(){
        console.log(2016 - this._yearOfBirth);
    }

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john);
console.log(jane);
console.log(mark);

//Object.create - builds an object that inherits directly from the one passed as the first argument


var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, 
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    
});
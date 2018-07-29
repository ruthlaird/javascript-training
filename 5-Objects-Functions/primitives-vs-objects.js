
// Primitives vs objects

//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23

//Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1; //both obj1 & obj2 point to the same object in memory
obj1.age = 30;

console.log(obj1.age); //30
console.log(obj2.age); //30
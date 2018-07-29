//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age); //27 - changes to a primitve inside a function are not affected outside the function as it's a copy of the primitive that's created inside the function
console.log(obj.city); //San Francisco - change to an object in a function do affect the object outside the function as it's a reference to the object that's passed in
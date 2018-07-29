// Arrow Functions

// arrow functions don't have their own 'this' keyword - use the 'this' keyword of the function they're written in (have a lexical this variable)

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
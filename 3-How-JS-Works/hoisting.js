// Lecture: Hoisting

//Functions
calculateAge(1965);

function calculateAge(year){
    console.log(2016 - year);
}

//retirement(1990); //Uncaught TypeError: retirement is not a function
var retirement = function(year){
    console.log(65 - (2016 - year));
}

retirement(1990); //51

//Variables
console.log(age); //undefined
var age = 23;
console.log(age); //23

function foo(){
    console.log(age); //undefined
    var age = 65;
    console.log(age); //65
}
foo();
console.log(age); //23
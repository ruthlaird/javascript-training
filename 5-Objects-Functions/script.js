//Function Constructor - newly created object inherits from the constuctor's prototype property


/* instaed of:
var john {
    name: "John",
    yearOfBirth: 1990,
    job: "teacher",
};
... plus loads more for each different person
*/

/*
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
*/

//Object.create - builds an object that inherits directly from the one passed as the first argument

/*
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

*/

/*
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
*/

/*
//Lecture: passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >=18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

/*
//Lecture: functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');

interviewQuestion('teacher')('Mike');
*/


//Lecture: Immediately Invoked Function Expressions (IIFE) - IIFE can only be called once as it's not assigned to a variable, used for data privacy

/*
//instead of:
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

/*
//Lecture: closures
//An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned (because it still exists in the scope chain)

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

//can also be called as:
retirement(66)(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);


function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ' what do you do?');
        }
    }
}

var designerQuestion = interviewQuestion('designer', name);
var teacherQuestion = interviewQuestion('teacher', name);
var developerQuestion = interviewQuestion('developer', name);
var testerQuestion = interviewQuestion('tester', name);


designerQuestion('John');
teacherQuestion('Jane');
developerQuestion('Mark');
testerQuestion('Mike');

interviewQuestion('teacher')('John');

*/

/*
//Lecture: bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

//bind - creates a function with preset arguments
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');




var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/

//Coding challenge
//public code:
/*
function Question (question, answers, correctAnswer) {
    this._question = question;
    this._answers = answers;
    this._correctAnswer = correctAnswer;
}

var question1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
var question2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
var question3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [question1, question2, question3];

console.log(questions);

var chooseQuestion = function(questions) {
    var number = Math.floor(Math.random() * questions.length);
    console.log(number);
    console.log(questions[number]._question);
    for (var i = 0; i < questions[number]._answers.length; i++) {
        console.log(i + ': ' + questions[number]._answers[i]);
    }
    var answer = prompt('What is the answer? Enter the number of the correct answer');
    
    console.log('Your answer was: ' + answer);
    console.log('The correct answer is: ' + questions[number]._correctAnswer);
    
    if (answer == questions[number]._correctAnswer) {
            console.log('Correct!');
    } else {
            console.log('Sorry that\'s not the right answer');
    }    
}

chooseQuestion(questions);
*/

/*
//Jonas's solution:
(function(){
    
    function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct!');
        } else {
            console.log('Wrong answer. Try again');
        }
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('What is the answer? Enter the number of the correct answer'));

    questions[n].checkAnswer(answer);

})();
*/

//Expert level
/*
(function(){
    
    function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct!');
            return true;
        } else {
            console.log('Wrong answer. Try again');
            return false;
        }
    }
    
    function Score () {
        this.score = 0;
    }
    
    Score.prototype.increase = function() {
        this.score++;
    }
    
    Score.prototype.display = function() {
        console.log('Score: ' + this.score);
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];
    
    var score = new Score();
    
    while (true) {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('What is the answer? Enter the number of the correct answer');

        if (answer === 'exit'){
            break;
        } 
        
        answer = parseInt(answer);
        
        if (questions[n].checkAnswer(answer)) {
            score.increase();
        }
        score.display();
    }
})();
*/

(function(){
    
    function Question (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, fn) {
        if (ans === this.correct) {
            console.log('Correct!');
            fn();
            return true;
        } else {
            console.log('Wrong answer. Try again');
            return false;
        }
    }
    
    function Score () {
        this.score = 0;
    }
    
    Score.prototype.increase = function() {
        this.score++;
    }
    
    Score.prototype.display = function() {
        console.log('Score: ' + this.score);
    }

    var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];
    
    var score = new Score();
    
    while (true) {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('What is the answer? Enter the number of the correct answer');

        if (answer === 'exit'){
            break;
        } 
        
        answer = parseInt(answer);
        
        questions[n].checkAnswer(answer, function(){score.increase()});
        score.display();
    }
})();

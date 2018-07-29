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
// Lecture: Maps
const question = new Map();
question.set('question', 'What is the offical name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)) {
//   question.delete(4);
//    console.log('Answer 4 is here');
}

// delete all values from the map
//question.clear();


//can loop through maps
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
//    console.log(`This is ${key}, and it's set to ${value}`);
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the number of the correct answer'));
console.log(question.get(ans === question.get('correct')));
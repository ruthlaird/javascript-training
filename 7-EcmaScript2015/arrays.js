// Arrays

const boxes = document.querySelectorAll('.box');

// ES5
//var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function(cur) {
//    cur.style.backgroundColor = 'dodgerblue';
//})

// ES6
// 'from' transforms from node list to an array
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// Can't use a break or a continue in a for each loop, so had to use for loop in ES5
// ES5
//for(var i = 0; i < boxesArr5.length; i++){
//    
//    if(boxesArr5[i].className === 'box blue') {
//        continue;
//    }
//    
//    boxesArr5[i].textContent = 'I changed to blue';
//}

// ES6 - replaced by 'for of' loops in ES6. Can also use 'includes'
for (const cur of boxesArr6) {
    
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >=18));
console.log(ages.find(cur => cur >=18));
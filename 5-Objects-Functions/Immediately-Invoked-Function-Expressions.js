//Lecture: Immediately Invoked Function Expressions (IIFE) - IIFE can only be called once as it's not assigned to a variable, used for data privacy

/*
//instead of:
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
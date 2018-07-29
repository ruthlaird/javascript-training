// Lecture: Blocks and IIFEs

// ES5 - IFFEs to make variable not accessible from the outside
(function() {
    var c = 3;
})
//console.log(c); //-> error c is not defined as 'c' is not accessible outside of the scope of the function it's in

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + b); //-> error a is not defined as 'a' is not accessible outside of the scope of the block it's in
console.log(c); //will print '3' to the console as the var is inside a block not a function and so is still within scope to be accessed
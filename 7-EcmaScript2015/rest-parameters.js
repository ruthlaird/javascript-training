// Lecture: Rest parameters - allow you to pass an arbitary num of parameters in to a function and use them in that function
// (opposite of the spread operator. Spread transforms an array into multiple parameters)
// Rest transforms multiple parameters in to a single array
// used in function declaration

// ES5 - use arguments to return an array like structure but is an object not an array so need to convert it to an array
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);

// ES5
function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); //slice from position 1 to exclude the 'limit' as that will be included in the arguments
    console.log(argsArr);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    console.log(years);
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965);
isFullAge6(21, 1990, 1999, 1965, 2016, 1987);
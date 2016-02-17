

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
  for(var i = 0; i < array.length; i++){
    callback (array[i], i, array);
  }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var result = 0;
    for(var i = 0; i < args.length; i++) {
      result = result + args[i];
    }
    return result;
}
console.assert( sum(1, 2, 3, 4, 5) === 15 );

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var result = 0;
    for(var i = 0; i < args.length; i++) {
      result = result + args[i] / args.length;
    }
    return result;
}

console.assert( average(2, 4, 6, 8) === 5 );

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var result = 0;
    for(var i = 0; i < args.length; i++) {
      result = Math.max(args[i]);
    }
    return result;
}

console.assert(largest(2, 4, 6, 8) === 8 );

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
}

 console.assert(longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */


// .sort()

var sortArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];

var sorter = function(){
  sortArrNew = sortArr.sort().join();
  return sortArrNew;
};

// .concat()

var catArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var catter = function(){
  catArrNew = catArr.concat("Converse").join();
  return catArrNew;
};

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()

console.assert(sorter("Aasics", "New Balance", "Nike", "Adidas", "Vans") === "Aasics,Adidas,New Balance,Nike,Vans");
console.assert(catter("Converse") === "Aasics,New Balance,Nike,Adidas,Vans,Converse");
// console.assert(indexer("r","In a van down by the river") === 2);
// console.assert(splitter("johnny") === "j","o","h","n","n","y");

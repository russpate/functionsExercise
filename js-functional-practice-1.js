

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

var indexArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var indexer = function(){
  indexArrNew = indexArr.indexOf("New Balance");
  return indexArrNew;
};

// .split()

var splitArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var splitter = function(){
  splitArrNew = splitArr.join().split("N").join();
  return splitArrNew;
};

// .join()

var joinArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var joiner = function(){
  joinArrNew = joinArr.join();
  return joinArrNew;
};

// .pop()

var popArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var popper = function(){
  popArrNew = popArr.pop();
  return popArrNew;
};

// .push()

var pushArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var pusher = function(){
  pushArr.push("Converse");
  pushArrNew = pushArr.join();
  return pushArrNew;
};

// .slice()

var sliceArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var slicer = function(){
  sliceArrNew = sliceArr.slice(0,3).join();
  return sliceArrNew;
};

// .splice()

var spliceArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var splicer = function(){
  spliceArrNew = spliceArr.splice(1,2).join();
  return spliceArrNew;
};

// .shift()

var shiftArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var shifter = function(){
  shiftArrNew = shiftArr.shift();
  return shiftArrNew;
};

// .unshift()

var unshiftArr = ["Aasics", "New Balance", "Nike", "Adidas", "Vans"];
var unshifter = function(){
  unshiftArrNew = unshiftArr.unshift("Converse");
  return unshiftArrNew;
};

// .filter()


// .map()

console.assert(sorter("Aasics", "New Balance", "Nike", "Adidas", "Vans") === "Aasics,Adidas,New Balance,Nike,Vans");
console.assert(catter("Converse") === "Aasics,New Balance,Nike,Adidas,Vans,Converse");
console.assert(indexer("New Balance") === 1);
console.assert(splitter("N") === "Aasics,,ew Balance,,ike,Adidas,Vans");
console.assert(joiner() === "Aasics,New Balance,Nike,Adidas,Vans");
console.assert(popper() === "Vans");
console.assert(pusher("Converse") === "Aasics,New Balance,Nike,Adidas,Vans,Converse");
console.assert(slicer(0,3) === "Aasics,New Balance,Nike");
console.assert(splicer(1,2) === "New Balance,Nike");
console.assert(shifter() === "Aasics");
console.assert(unshifter() === 6);

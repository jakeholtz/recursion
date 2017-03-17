// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
   // if item is an array
       // use recursion to "stringify" the array
       // return that stringified array;
   // if item is an object
           // use recursion to "stringify" the object
           // return that stringified object;
};

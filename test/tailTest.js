const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));
assertArraysEqual(tail(words), ["Lighthouse", "Labs"] ); 

assertArraysEqual(tail([5,6,7]), [6, 7]);



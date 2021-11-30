// Using our own assertion functions instead of a real testing framework

  // const assertArraysEqual = require('../assertArraysEqual');
  // const assertEqual = require('../assertEqual');
  // const tail = require('../tail')

  // const words = ["Yo Yo", "Lighthouse", "Labs"];
  // tail(words); // no need to capture the return value since we are not checking it
  // console.log(assertEqual(words.length, 3));
  // assertArraysEqual(tail(words), ["Lighthouse", "Labs"] ); 

  // assertArraysEqual(tail([5,6,7]), [6, 7]);

// Using Mocha and Chai 

  const assert = require('chai').assert;
  const tail = require('../tail');

  describe("#tail", () => {
    it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs'] ", () => {
      assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"] )
    }) 

    
    


  })
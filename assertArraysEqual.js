

//Version 1 
/*
const assertArraysEqual = function(lst1, lst2){
  if (lst1.length !== lst2.length ){
    return `Assertion failed: ${lst1} !== ${lst2}`
    
  }
  else{
    for(let i = 0; i < lst1.length; i++){
      if (lst1[i] !== lst2[i]){
        return `Assertion failed: ${lst1} !== ${lst2}`
      }
    }return `Assertion Passed: ${lst1} === ${lst2}`
  }
}
*/ 
//Version 2 : Return boolean instead of just a message. The message still display, but now with console.log. 
const assertArraysEqual = function(lst1, lst2){
  if (lst1.length !== lst2.length ){
    //return 
    console.log(`😡😡😡 Assertion failed: ${lst1} !== ${lst2}`)
    return false
    
  }
  else{
    for(let i = 0; i < lst1.length; i++){
      if (lst1[i] !== lst2[i]){
        //return `Assertion failed: ${lst1} !== ${lst2}`
        console.log(`😡😡😡 Assertion failed: ${lst1} !== ${lst2}`)
        return false
      }

    }
    console.log( `😀😀😀 Assertion Passed: ${lst1} === ${lst2}`)
    return true
    //return `Assertion Passed: ${lst1} === ${lst2}`
  }
}


// console.log(assertArraysEqual([1,2,"3"], [1,2,3]))
// console.log(assertArraysEqual([1,2,3], [1,2,3]))
// console.log(assertArraysEqual([1,2,3], [1,2,4]))

module.exports = assertArraysEqual 
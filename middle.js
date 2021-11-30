




//Create a function middle 




// For arrays with one or two elements, there is no middle. Return an empty array.
const middle = function (array){
  if (array.length < 3){
    return [];
  } 
  // For arrays with three or more, return the middle-most element. 
  if (array.length >=3){
    
    if ((array.length % 2)=== 0){
    // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    return [ array[(array.length/2) -1], array[(array.length/2)] ]

    }
    else {
    // For arrays with odd number of elements, an array containing a single middle element should be returned.
    return array[(array.length - 1) /2] 

    }
    

  }
}
  

  






module.exports = middle


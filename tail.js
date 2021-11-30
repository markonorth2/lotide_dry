// W1D1 
// Instead of the "head", sometimes we need the "tail" of an array. 
// The tail is not the last element of the array. 
// The tail is meant to be every element except the head (first element) of the array.








const tail = function (value){
  if (value.length > 0){
  return value.slice(1);
  } 
  return []; 
  
}

module.exports = tail;


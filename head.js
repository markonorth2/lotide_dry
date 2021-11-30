// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual")


const head = function (value){
  if (value.length > 0){
    return value[0];
  } 
  
  return [];
}


module.exports = head;



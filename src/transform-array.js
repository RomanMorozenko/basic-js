const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {


  if ( arr instanceof Array === false ) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let newArray = [...arr];
  let subArr = [...arr];

  for (let i = 0; i < newArray.length; i++ ){
    
    if ( newArray[i] === '--discard-next' ){
      newArray.splice(i,2);
    }
    
    if ( newArray[i] === '--discard-prev' ) {
      if ( subArr[i] === '--discard-next'){
        newArray.splice(i,1)
      }else if ( newArray[i-1] == undefined ) {
        newArray.splice(i,1) } else 
      newArray.splice(i-1,2)
    } 
    
    if ( newArray[i] === '--double-next' ){
      if ( newArray[i+1] == undefined ) {
        newArray.splice(i,1)
      } else 
      newArray[i]=newArray[i+1];
    }
    
    if ( newArray[i] === '--double-prev'){
      if ( subArr[i] === '--discard-next'){
        newArray.splice(i,1)
      }else if( newArray[i-1] == undefined ) {
        newArray.splice(i,1)} else 
      newArray[i]=newArray[i-1];

    } 
    
  }

  return newArray;
  

}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {


  chain:[],
  
  getLength(){
    return this.chain.length;
  },
  
  addLink(value){
    this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position){
    if ( Number.isInteger(position) == false || 
       this.chain[position-1] === undefined ) {
        this.resetChain();
      throw new Error("You can't remove incorrect link!")
       } else 
    {
    this.chain.splice(position-1,1) }
    
    return this
  },

  reverseChain(){
    this.chain.reverse()
    return this
  },
  
  finishChain(){
    let result = this.joinChain();
    this.resetChain();
    return result;
  },

  resetChain(){
    this.chain.length = 0;
  },

  joinChain() {
   return this.chain.join('~~')
  },


};

module.exports = {
  chainMaker
};

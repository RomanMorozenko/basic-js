const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (members === null || members === undefined) return false
  
  if (members.length == 0) return false
  
  if (!Array.isArray(members)) return false 
  
  let nameString =[];

  for ( let i = 0; i < members.length; i++ ) {
    if ( (typeof members[i] == 'string') ) {
      nameString.push(members[i].toUpperCase().replace(/\s+/g, ''))
    }
  }

  let firstLetters = [];

  for ( let i = 0; i < nameString.length; i++ ) {
    firstLetters.push((nameString[i].split(''))[0])
  }

  let teamNameLetters = firstLetters
  .sort()
  .join('')

return teamNameLetters

}

module.exports = {
  createDreamTeam
};

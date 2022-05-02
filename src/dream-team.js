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
let members = [];
function createDreamTeam(members) {
  if (!Array.isArray(members) || !members.length){
    return false;
  }
  let arrFirstLettersOfMember = [];//новый массив с первыми буквами
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){ //проверка на string
      let firstLetter = members[i].trimStart().charAt(0); //отделила первые буквы, убрала пробелы
      arrFirstLettersOfMember.push(firstLetter.toUpperCase()); //запушила в новый массив
    }
  }
  return arrFirstLettersOfMember.length > 0 
  ? arrFirstLettersOfMember.sort().join('') 
  : false;
}

module.exports = {
  createDreamTeam
};

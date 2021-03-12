module.exports = function check(str, bracketsConfig) {
  let flat = '(';

  for (let i = 0; i < bracketsConfig.length; i++) {
    let zeroElementPrefix = isNaN(+ bracketsConfig[i][0]) ? '\\' : '';
    let firstElementPrefix = isNaN(+ bracketsConfig[i][1]) ? '\\' : '';

    flat += `${flat.length > 1 ? '|' : ''}${zeroElementPrefix}${bracketsConfig[i][0]}${firstElementPrefix}${bracketsConfig[i][1]}`;
  }
  flat += ')';

  return isValid(str, flat);
}

function isValid(str, regex) {
  let newStr = str.replace(new RegExp(regex, 'g'), '');

  if(newStr.length == 0) {
    return true;
  }
  
  if(str.length == newStr.length) {
    return false;
  }

  return isValid(newStr, regex);
}

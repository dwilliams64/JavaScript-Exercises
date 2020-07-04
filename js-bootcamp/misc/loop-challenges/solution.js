// 1. Write function to that reverses string

// Solution 1 (easy street):

const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
  
reverseStr('dick'); // 'kcid'
reverseStr('Chris Redfield') // 'dleifdeR sirhC'

// Solution 2:

const reverseStr = (str) => {
    let strArray = str.split('');
    let reverseArray = [];
  
    for (let i = strArray.length - 1; i >= 0; i--) {
      
      reverseArray.push(strArray[i])
    }
  
    return reverseArray.join('');
}

reverseStr('dick'); // 'kcid'
reverseStr('Chris Redfield') // 'dleifdeR sirhC'

//  Solution 3:

const reverseStr = (str) => {
    let newStr = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
  
    return newStr;
}
  
reverseStr('dick'); // 'kcid'
reverseStr('Chris Redfield') // 'dleifdeR sirhC'

// More solutions:  

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
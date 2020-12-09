// Steps
// (1) Validate the input, check if the number of rows is >= 1, check if the input string is valid
// (2) Create an array of empty strings , num of rows === num of strings
// (3) Initialize a boolean (decending) as true to begin adding characters in a decending manner
// (4) Loop through each character of the input string, for each character , loop through the string array
// if the index is equal to the character index, add the character, else add an empty space
// (5) When the last row is reached the boolean is toggled and an ascending pattern continues
// 
// StringChallenge('coderbyte', "3");
// produces the pattern :
//  c   r  t 
//   o e by e
//    d   
// 
// (6) last step is to group the rows and produce the string output : crtoebyed

const StringChallenge = (str, num) => {
  num = parseInt(num);

  if (isNaN(num) || num < 1) {
    return 'Invalid Number of rows'; 
  } else if (str === null || str === undefined || str.length === 0) {
    return 'Invalid String';
  }

  let rowArr = [];
  let decending = true;
  let index = 0;

  for (let i = 0; i < num; i++) {
    rowArr.push('');
  }

  for (let i = 0; i < str.length; i++) {
    if (decending) {
      index = (i) % num;
    } else if (!decending) {
      index = Math.abs(num - 2 - ((i) % num));
    }
    
    for (let j = 0; j < rowArr.length; j++) {
      
      if (index === j) {
        rowArr[j] = rowArr[j] + str[i];
      } else {
        rowArr[j] = rowArr[j] + ' ';
      }
    }
  
    if (index === (num - 1)) {
      decending = !decending;
    }
      
  }

  printCharacters(rowArr);
  const word = formWord(rowArr);
  return word;
 
}

const formWord = (arr) => {
  let word = '';
  arr.forEach(row => {
    word += row.replace(/\s+/g, '');
  });
  return word;
}

const printCharacters = (arr) => {
   arr.forEach((row) => {
    console.log(row);
  })
}

StringChallenge('coderbyte', "3");

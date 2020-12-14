// Steps
// (1) Validate the input, check if the number of rows is >= 1, check if the input string is valid
// (2) Create an array of empty strings , num of rows === num of strings
// (3) Initialize a boolean (decending) as true to begin adding characters row by row in a decending manner
// (4) Loop through each character of the input string and append it to the appropriate string based on the rowIndex
// (5) When the last row is reached the boolean is toggled and an ascending pattern continues
// (6) last step is to group the rows of strings to produce the string output : crtoebyed
// 
// Time Complexity O(n) where n is the length of the input string
// Space Complexity O(n) as we are using an array of length n (row length)

// Code running here : https://repl.it/@Hassanshulli/zigzag-string-challenge#index.js


const StringChallenge = (str, num) => {
  num = parseInt(num);

  if (isNaN(num) || num < 1) {
    return 'Invalid Number of rows'; 
  } else if (str === null || str === undefined || str.length === 0) {
    return 'Invalid String';
  }

  let rowArr = [];
  let decending = true;
  let rowIndex = 0;

  for (let i = 0; i < num; i++) {
    rowArr.push('');
  }

  for (let i = 0; i < str.length; i++) {
      rowArr[rowIndex] += str[i];

    if (decending) {
      rowIndex++;
    } else if (!decending) {
      rowIndex--;
    }

    if (rowIndex === 0) {
      decending = true;
    } else if (rowIndex === num - 1) {
      decending = false;
    }
  }

  return formWord(rowArr);
 
}

const formWord = (arr) => {
  let word = '';
  arr.forEach(row => {
    console.log('row : ', row);
    word += row.replace(/\s+/g, '');
  });
  return word;
}

StringChallenge('coderbyte', "3");

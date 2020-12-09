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

StringChallenge('kaamvjjfl', "4");

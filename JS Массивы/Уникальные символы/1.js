const countUniqChars = (string) => {
    if (string.length === 0) {
        return 0;
    } else if (string.length === 1) {
        return 1;
    }
    
    let arrSymbols = string.split('');
    let resultFake = [string[0]];
    let result = [];
   

    const pepeClown = (index, arr) => {
        for (let j = 1; j < arrSymbols.length; j++) {
            if (resultFake[index] != arrSymbols[j]) {
                result.push(arrSymbols[j]);
            }
        }
    }


    return result

    
}

const text1 = '1123 57 9 00 567 77';
console.log(countUniqChars(text1));


const gfgf = (string) => {
    let arr = string.split('');
    const stopWord = 'значениеБЫЛО';
    for (let j = 0; j < arr.length; j++) {
        for (let i = j + 1; i < arr.length; i++) {
            if (arr[j] == stopWord) {
                continue;
            }
            else if (arr[j] === arr[i]) {
                arr[i] = stopWord;
            }
        }
    }
    let count = 0;

    for (let n = 0; n < arr.length; n++) {
        if (arr[n] !== stopWord) {
            count++;
        }
    }
    return count;
}
const text2 = 'Yyou know nothing Jon Snow'
console.log(gfgf(text2));

// решение учителя

// BEGIN
const countUniqChars = (text) => {
    const uniqChars = [];
  
    for (const char of text) {
      if (!uniqChars.includes(char)) {
        uniqChars.push(char);
      }
    }
  
    return uniqChars.length;
  };
  
  export default countUniqChars;
  // END

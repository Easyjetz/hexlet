const makeCensored = (sentence, stopWords) => {
    let arrayWords = sentence.split(' '),
        result = [];
    const censored = '$#%!';
    for (let i = 0; i < arrayWords.length; i++) {
        let word = arrayWords[i]
        for (let j = 0; j < stopWords.length; j++) {
            if (word === stopWords[j]) {
                word = censored;
            }
        }
        result.push(word);
    }
    return result.join(' ');
}

const sentence = 'When you play the game of thrones, you win or you die';
console.log(makeCensored(sentence, ['die', 'play']));

// решение учителя

// BEGIN
const makeCensored = (text, stopWords) => {
    const words = text.split(' ');
  
    const result = [];
    for (const word of words) {
      const newWord = stopWords.includes(word) ? '$#%!' : word;
      result.push(newWord);
    }
  
    return result.join(' ');
  };
  
  export default makeCensored;
  // END
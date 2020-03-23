
  
const sayPrimeOrNot = (number) => {
    const PrimeOrNot = (number) => {
        let counter = 0;
        for (let j = 1; j <= number; j += 1) {
          if (number % j == 0) {
            counter += 1;
          }
        }
        if (counter === 2) return true;
        return false;
    }
    if (number > 1) {
        if (PrimeOrNot(number)) {
            return console.log('yes');
          }
          return console.log('no');
    }
   return console.log('no');

}

sayPrimeOrNot(5);


// BEGIN решение учителя
const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
  const sayPrimeOrNot = (num) => {
    const text = isPrime(num) ? 'yes' : 'no';
    console.log(text);
  };
  
  export default sayPrimeOrNot;
  // END
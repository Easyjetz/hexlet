const money1 = [
    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
  ];


  console.log(money1[0].length);
const getTotalAmount = (arr, currency) => {
    let result = 0;
    for (const elem of arr) {
        console.log(elem.slice(0, 3));
        if (currency == elem.slice(0, 3)) {
            let number = '';
            for (let j = 4; j < elem.length; j++) {
                number += elem[j];
            }
            result += Number(number);
        }
    }
    return result;
}

console.log(getTotalAmount(money1, 'eur '));

// классное решение учителя

// BEGIN
const getTotalAmount = (money, currency) => {
    let sum = 0;
  
    for (const bill of money) {
      const currentCurrency = bill.slice(0, 3);
      if (currentCurrency !== currency) {
        continue;
      }
      const denomination = Number(bill.slice(4));
      sum += denomination;
    }
  
    return sum;
  };
  
  export default getTotalAmount;
  // END

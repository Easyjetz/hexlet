/* spread-оператор в вызовах функций синтаксически идентичен rest-оператору в определениях,
 но выполняет обратное действие. */
 const sum = (...numbers) => {
    let result = 0;
    for (let num of numbers) {
      result += num;
    }
    return result;
  };

// создали функцию суммирования элементов

// Вызовем sum, применив spread-оператор к массиву аргументов:

const arrayOfnumbers = [1, 5, 10];
sum(...arrayOfnumbers); // 16
/*spread-оператор раскладывает массив на аргументы. Количество аргументов, 
полученных spread-оператором, равно количеству элементов массива. По сути, код выше преобразуется в вызов: */

sum(arrayOfnumbers[0], arrayOfnumbers[1], arrayOfnumbers[2]);
// sum(1, 7, 4);

// совместно с позиционными аргументами
sum(8, 10, ...arrayOfnumbers);

// в отличии от rest-оператора, spread может распологаться в любой позиции
const arrayOfnumbers = [1, 7, 4];

sum(8, 10, ...arrayOfnumbers); // 30
sum(8, ...arrayOfnumbers, 10); // 30
sum(...arrayOfnumbers, 8, 10); // 30

// может быть любое количество spread-операторов и в любом порядке

const union = (first, ...arrays) => {
    if (arrays.length === 0) {
        return first;
    }
    const commonArray = first.concat(...arrays);
    return uniq(commonArray);
    
}
union([3], [5, 3, 8], [10, 15, 100]);

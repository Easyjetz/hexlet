// Хеширование - операция, которая приобразует любые входные данные в строку(реже число) фиксированной длины
// В JavaScript нет встроенной поддержки алгоритма хеширования crc32 (удобен для наглядности)
// Поэтому используется сторонняя библиотека
import crc32 from 'crc-32';

const data = 'Hello, world!'; // Любые данные которые мы хотим хешировать
const hash = crc32.str(data);

// Хеш всегда одинаковый для одних и тех же данных!
console.log(hash); // => -337197338

// С хешированием мы встречаемся в разработке часто. например id коммита в git - хеш данных коммита

// После того как хеш получен, его можно преобразовать в индекс массива,
// например, через получение остатка от деления:
const index = Math.abs(hash) % 1000; // по модулю
console.log(index); // => 338

// что-то про коллизии(совпадение ид хешов)

const set = (map, key, value) => {
    // эксперемент можно ли сделать 1 функцией.
    const addValue = () => {
      let hashArray = [];
      hashArray.push(hash);
      const index =  Math.abs(hash) % 1000;
      map[index] = [key, value];
      return true;
    }
  
  
    const hash = crc32.str(key);
    if (map.length !== 0) {
  
      for (const key in hashArray) {
        if (key !== hash) {
          hashArray.push(hash);
          const index =  Math.abs(hash) % 1000;
          map[index] = [key, value];
          return true;
        }
        return false;
      }
  
    }
    let hashArray = [];
    hashArray.push(hash);
    const index =  Math.abs(hash) % 1000;
    map[index] = [key, value];
    return true;
    
  }


const map = [['dmitry', 19], ['pasha', 16], ['artem', 25]];


const f = (arr) => {
    for (const [key, value] of arr) {
        console.log([key, value]);
    }
}

console.log(f(map));
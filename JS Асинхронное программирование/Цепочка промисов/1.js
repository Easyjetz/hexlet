/*
Даже при использовании промисов не всегда понятно, как структурировать асинхронный код. В этом уроке мы 
разберём некоторые полезные практики, делающие его проще для написания и анализа. Возьмём уже знакомую нам 
задачку по объединению двух файлов.
*/

import fs from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
    if (error1) {
      cb(error1);
      return;
    }
    fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
      if (error2) {
        cb(error2);
        return;
      }
      fs.writeFile(outputPath, `${data1}${data2}`, cb);
    });
  });
}
// рефакторим
// первая версия

const unionFiles = (inputPath1, inputPath2, outputPath) => {
    // Промисы всегда должны возвращаться и строиться в цепочку!
    const result = fs.readFile(inputPath1, 'utf-8')
      .then((data1) => {
        const promise = fs.readFile(inputPath2, 'utf-8')
          .then((data2) => fs.writeFile(outputPath, `${data1}${data2}`));
        return promise;
      });
    return result; // это промис
};

/*
Хорошая новость — код стал понятнее и уменьшился в объёме. К тому же, из него целиком ушла обработка ошибок, 
так как промисы обрабатывают их автоматически и, если вызывающий код захочет их перехватывать, то сделает это 
самостоятельно через метод catch. Но есть и плохая новость — код всё ещё структурирован, как колбеки, 
"лесенкой". В этом коде не учитывается свойство промисов, связанное с возвратом из then. Напомню, что, если 
из колбека возвращается промис, то дальнейшая цепочка then/catch продолжается от него.
*/

import { promises as fs } from 'fs';

const unionFiles = (inputPath1, inputPath2, outputPath) => {
  const result = fs.readFile(inputPath1, 'utf-8')
    .then((data1) => fs.readFile(inputPath2, 'utf-8'))
    // then ниже берется от промиса readFile
  //  .then((data2) => fs.writeFile(outputPath, `${<как сюда попадет data1?>}${data2}`));
  return result;
};

/*
Эта версия совсем плоская, именно к такому коду нужно стремиться в промисах. Но она таит в себе одну проблему. 
Если где-то в цепочке ниже нужны данные, которые были получены сверху, то придется протаскивать их сквозь всю 
цепочку. В примере выше это результат чтения первого файла. Переменная data1 недоступна в том месте, где 
происходит запись в файл. Основной выход из данной ситуации — создание переменных, через которые данные будут 
прокинуты дальше:
*/

const unionFiles = (inputPath1, inputPath2, outputPath) => {
    let data1;
    return fs.readFile(inputPath1, 'utf-8')
      .then((content) => {
        data1 = content;
      })
      .then(() => fs.readFile(inputPath2, 'utf-8'))
      .then((data2) => fs.writeFile(outputPath, `${data1}${data2}`));
};

/*
Уже не так красиво, но всё ещё плоско. Преимущество такого подхода становится всё более и более очевидным с 
увеличением количества промисов. Тем более далеко не всегда нужно передавать данные дальше.
*/

// Динамическая цепочка

/*
Иногда количество асинхронных операций заранее неизвестно, но они должны выполняться строго по очереди. 
Эту задачу можно решить используя циклы или свертку. Какой бы способ не был выбран, сам принцип построения 
цепочки не поменяется. Цепочка промисов это всегда then.then.then....
*/

/*
Единственное возможное отличие – формирование начального промиса. Если нет промиса от которого цепочка 
начинается, то его можно создать используя функцию Promise.resolve(). Получившийся промис ничего не делает, 
но он нужен в момент инициализации.
*/

const filePaths = /* список путей до файлов */;

// В then отдается функция, а не ее вызов!

const promise = filePaths.reduce((acc, path) => (
    acc.then((/* содержимое предыдущего прочитанного файла */) => fs.readFile(path))
  ), Promise.resolve());

// Если надо продолжаем обработку
//promise.then...
/*
Что же такое методы? В JavaScript методами называют функции, записанные в свойства объектов. 
Фактически метод – это роль, которую выполняет функция будучи привязанной к объекту.

В других языках другие определения и принципы работы

В JavaScript функции это объекты первого рода, то есть они ведут себя как данные: их можно записывать в 
переменные или константы. Свойства объектов подобны переменным, а значит в них можно сохранить функции:
*/

const company = { name: 'Hexlet' };
// Создание функции, которая сразу же присваивается свойству getName и становится методом
company.getName = () => 'Hexlet'; // Функция возвращает строку "Hexlet"

// Вызов метода
company.getName(); // "Hexlet"

/*
Это всего лишь один из множества возможных вариантов добавления функции в объект.
Ниже еще несколько примеров:
*/

// При создании объекта
const obj = {
    getName: () => 'Hexlet',
};

// Через присваивание константы
const company = { name: 'Hexlet' };
// Имя константы не принципиально
const getHexlet = () => 'Hexlet';
company.getName = getHexlet; 

// Кстати никто не мешает вызывать функцию напрямую без объекта
getHexlet();
// Или даже так
const getName = company.getName;
getName(); // "Hexlet"

const company = { name: 'Hexlet' };
company.getName = () => 'Hexlet';

company.getName(); // "Hexlet"
company.name = 'Hexlet Plus';
// Имя поменяли, но возврат остался прежний
company.getName(); // "Hexlet"


const company = { name: 'Hexlet' };
// Методы извлекающие данные из объекта называются геттерами
// Поэкспериментируйте со стрелочной функцией, убедитесь, что она работает по другому
company.getName = function getName() {
  return this.name;
};

// Обязательно потренируйтесь на repl.it
company.getName(); // Hexlet

company.name = 'Hexlet Plus';
company.getName(); // Hexlet Plus

// this дает возможность не только читать данные, но и менять их:

// Методы меняющие данные объекта называют сеттерами
company.setName = function setName(name) {
    this.name = name;
  };
  
  // Обязательно потренируйтесь на repl.it
  company.getName(); // Hexlet
  
  company.setName('Hexlet Plus');
  company.getName(); // Hexlet Plus


// КОНТЕКСТ

/*
Выше, когда давалось определение this говорилось, что this ссылается на текущий объект, к которому 
привязан метод. И здесь кроется ключевое отличие this в JavaScript от this в других языках. 
В JavaScript this может измениться прямо во время работы программы: 
*/

const company1 = { name: 'Hexlet', getName: function getName() { return this.name } };
const company2 = { name: 'Hexlet Plus' };

company1.getName(); // "Hexlet"

// Копируется ссылка на функцию, а не сама функция
// Сама функция существует независимо от этих объектов
company2.getName = company1.getName;
company2.getName(); // "Hexlet Plus"


// Сокращенное определение методов

/*
Из-за необходимости использовать обычные функции при создании объектов, в JavaScript был введен 
специальный сокращенный синтаксис создания функций при определении объектов: 
*/

const company = {
    name: 'Hexlet',
    getName() {
      return this.name;
    },
};


/* В прототипе объектов JavaScript есть один "магический метод" Object.prototype.toString(). Магический 
он потому, что он вызывается автоматически в тех местах, где объект используется как строка. Такое 
регулярно происходит во время разработки, мы все видели надписи наподобие этой: '[object Object]'. */

const company = { name: 'Hexlet' };
company.toString(); // "[object Object]"
console.log(`I love ${company}!`); // "I love [object Object]!"

/*
Такой вывод скорее раздражает, чем приносит пользу. Для чего же он нужен? Сам по себе toString() не является 
чем-то особенным, это обычный метод в прототипе. А раз так, то мы можем переопределить его:
*/

const company = {
    name: 'Hexlet',
    toString() {
      return this.name;
    },
};

company.toString(); // "Hexlet"
console.log(`I love ${company}!`); // "I love Hexlet!"

// Тоже самое можно сделать и в прототипе любого конструктора:

function Company(name) {
    this.name = name;
};
  
Company.prototype.toString = function toString() {
    return this.name;
}
  
const company = new Company('Hexlet');
console.log(`I love ${company}!`); // "I love Hexlet!"

/*
Этот метод крайне популярен и полезен в шаблонах, формирующих, например, HTML. Он позволяет сократить 
повторяющийся код и сделать его чище.

Но что делать, если нужно вывести объект "как есть"? Такое бывает нужно для анализа внутренней структуры. 
Если у этого объекта не определен toString(), то мы получим максимально неинформативный вывод 
[object Object]. В таком случае можно конвертировать объект в JSON:
*/

const company = new Company('Hexlet');
// JSON – это строка!
console.log(JSON.stringify(company)); // => '{"name":"Hexlet"}'
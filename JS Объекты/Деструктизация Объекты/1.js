// На части можно раскладывать не только массивы,
// но и объекты, извлекая из них значения по определённым ключам:
const person = { first: 'Rasmus', last: 'Lerdorf', manager: true };

const { first: firstName, last: lastName, manager: manager } = person;

// создали константу firstName
// и сохранили в ней значение person.first
console.log(firstName); // => 'Rasmus'
console.log(lastName); // => 'Lerdorf'
console.log(manager); // => true

// Базовый синтаксис деструктурирующего присваивания для объектов таков:

// ключевое слово { что записывать: куда записывать }

// Если желаемое имя для создаваемой переменной совпадает с фактическим именем ключа объекта, 
// то запись можно резко сократить, указав только имя. То есть, вместо 
// { manager: manager } достаточно написать { manager }.

const person = { first: 'Rasmus', last: 'Lerdorf', manager: true };

const { manager = false, married = true } = person; // manager = false - дефолтное значение

// создали константу manager
// и сохранили в ней значение person.manager
console.log(manager); // => true

// была определена константа married
// и ей присвоено дефолтное значение true
console.log(married); // => true

// можно работать с вложенными данными

const options = { enabled: true, compression: { algo: 'gzip' } };

const { enabled, compression: { algo: compressionAlgo } } = options;

// Деструктуризацию объекта можно комбинировать с деструктуризацией массива:

const x = { o: [1, 2, 3] };
const { o: [a, b, c] } = x;

console.log(a); // => 1
console.log(b); // => 2
console.log(c); // => 3

const y = { o: [[1, 2, 3], { what: 'WHAT' }] };
const { o: [[one, two, three], { what }] } = y;

console.log(one);   // => 1
console.log(two);   // => 2
console.log(three); // => 3
console.log(what);  // => 'WHAT'

// таким лучше не увлекаться, т.к сложно читать код
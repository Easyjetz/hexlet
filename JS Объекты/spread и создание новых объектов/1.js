const user = { name: 'Vasya', married: true, age: 25 };

const newUser = {...user};

console.log(newUser); // => { name: 'Vasya', married: true, age: 25 }

// создалось 2 разных объекта, newUser ссылается на копию user, но это 2 разные ссылки.

// конструирование нового объекта на основе старого

const person = {name: 'Dmitry'};

const newPerson = {...person, age: 19};

// слияние нескольких объектов

const userAndPerson = {...person, ...user};

// если есть общие ключи, то записывается значение правого.

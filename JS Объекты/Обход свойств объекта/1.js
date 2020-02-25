// есть несколько способов обхода свойств объекта в цикле:
// метод Метод Object.keys(obj) позволяет получить массив всех ключей объекта:
const course = { name: 'JS: React', slug: 'js-react' };
const keys = Object.keys(course); // [ 'name', 'slug' ]
for (key of keys) {
    console.log(course[key]);
}

// можно сразу получить массив значений св-в объекта
// с помощью метода Object.values(obj)
const course2 = { name: 'JS: React', slug: 'js-react' };
const values = Object.values(course2);
for (value of values) {
    console.log(value);
}

// метод Object.entries(obj) возвращает массив свойств
const course3 = { name: 'JS: React', slug: 'js-react' };
const entries = Object.entries(course3); // [[ 'name', 'JS: React' ], [ 'slug', 'js-react' ]]

for (const [key, value] of entries) {
    console.log(key);
    console.log(value);
}
// Обращение по несуществующему индексу возвращает значение undefined

const animals = ['cats', 'dogs', 'birds'];

// Неудачные попытки, выходя за границы массива
animals[5]; // undefined
animals[4]; // undefined
animals[3]; // undefined

// При добавлении в массив нового элемента по индексу, превышающему максимальный более чем на единицу, 
// вставляются фиктивные "пустые" элементы, содержащие значение undefined:

const animals = ['cats', 'dogs', 'birds'];
animals[10] = 'pigs';

// элемент 'pigs' вставлен по 10-му индексу,
// индексы с 3-го по 9-ый заполнены "пустыми" элементами
console.log(animals); // => ['cats', 'dogs', 'birds', <7 empty items>, 'pigs']

// длина массива изменилась — 11, а НЕ 4!
console.log(animals.length); // => 11
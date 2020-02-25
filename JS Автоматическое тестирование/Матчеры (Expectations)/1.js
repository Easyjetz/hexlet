// Проверка равенства по ссылке
// assert.equal([1, 2], [1, 2])
expect([1, 2]).toBe([1, 2]); // false

// Проверка равенства по значению
// assert.deepEqual([1, 2], [1, 2])
expect([1, 2]).toEqual([1, 2]); // true

/*
Любой матчер в Jest начинается с функции expect(data), в которую передаются данные на проверку. 
Затем expect возвращает специальный объект, у которого уже можно вызывать различные матчеры для проверки. 
В Jest десятки матчеров для самых разнообразных ситуаций. Такое количество объясняется желанием выдавать 
максимально точный отчёт о том, что произошло.
 */

// Предположим, что функция возвращает массив и мы хотим проверить его размер. Для этого можно 
// воспользоваться матчером toBe:

const data = [1, 2, 3];
// take берет первые n элементов
// assert.equal(take(data, 2).length, 2)
expect(take(data, 2).length).toBe(2);
// Этот матчер прекрасно справится с задачей. Но в случае ошибки его вывод не слишком информативен:

expect(received).toBe(expected) // Object.is equality
/*
Expected: 2
Received: 1
Поэтому лучше взять специализированный матчер для проверки размера массива:
*/
expect(take(data, 2)).toHaveLength(2);
// Тогда вывод расскажет гораздо больше:

expect(received).toHaveLength(expected)
/*
Expected length: 2
Received length: 1
Received array:  [1, 2]
*/


// Ниже пример некоторых популярных матчеров, полезных в ежедневном тестировании:

expect(null).toBeNull();

// Проверяет значение на truthy (любое значение, которое приводится к true)
expect(true).toBeTruthy();
// Точное сравнение с true
expect(true).toBe(true);

expect(undefined).toBeUndefined();

// Проверка, что массив содержит элемент
expect([1, 2, 3]).toContain(2);

// Проверка, что строка содержит подстроку
expect('hello, world').toMatch('hello');

// Проверяет, что в объекте есть свойство с определённым значением
expect({ key: 'value' }).toHaveProperty('key', 'value');

// Кроме того, к любому матчеру можно применить модификатор not, который инвертирует поведение матчера:

expect(null).not.toBeNull(); // not null
expect(undefined).not.toBeUndefined(); // not undefined
expect([1, 2, 3]).not.toContain(2); // not contain 2
expect('hello, world').not.toMatch('hello'); // not match hello

// Особняком стоит матчер toMatchObject. Он используется, когда нас в тестах интересует не весь объект, 
// а только какая-то его часть:

const user = {
  firstName: 'tolya',
  lastName: 'petrov',
  age: '33',
};

// Тест пройдёт успешно, так как проверяется только firstName
expect(user).toMatchObject({ firstName: 'tolya' });

/*
В целом, вам придётся постоянно заглядывать в документацию, чтобы вспомнить, что там есть. 
Иначе всё может свестись к использованию toEqual. Пожалуй, это основной недостаток использования 
матчеров — необходимость помнить про них и правильно применять.
*/

test('gt', () => {
    expect(gt(0, 0)).toBe(false);
    expect(gt(1, 0)).toBe(true);
    expect(gt(1, -3)).toBe(true);
  });
const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 1 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
  ];
  
  const compare = (a, b) => {
    if (a.age === b.age) {
      return 0;
    }
  
    return a.age > b.age ? 1 : -1;
  };
  
  users.sort(compare);
  
  console.log(users);
  // => [ { name: 'Danil', age: 1 },
  //      { name: 'Vovan', age: 4 },
  //      { name: 'Matvey', age: 16 },
  //      { name: 'Igor', age: 19 } ]

  /* Эта callback-функция принимает на вход два параметра — sort отдаёт в неё два элемента, 
  которые она сравнивает в данный момент. В нашем случае элементы — пользователи. */

  /*В примере выше не обязательно создавать переменную для callback-функции. Говоря откровенно, 
  их вообще редко записывают в переменные. Типичное использование выглядит как прямая 
  передача функции в функцию: */

users.sort((a, b) => {
    if (a.age === b.age) {
        return 0;
    }
    a.age > b.age ? 1: -1;
});

// Тоже самое но используя функцию Math.sign
users.sort((a, b) => Math.sign(a, b));
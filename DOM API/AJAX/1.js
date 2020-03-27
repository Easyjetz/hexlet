// XMLHttpRequest

/*
До появления html5, браузеры предоставляли (и сейчас предоставляют) специальный объект XMLHttpRequest:
*/

const request = new XMLHttpRequest();
request.onreadystatechange = () => {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById('demo').innerHTML = this.responseText;
  }
};
request.open('GET', '/api/v1/articles/152.json', true);
request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
request.send();

// Fetch

// С появлением стандарта HTML5, появился новый механизм для http запросов:

// const promise = fetch(url[, options]);
fetch('/api/v1/articles/152.json')
  .then((response) => {
    console.log(response.status); // => 200
    console.log(response.headers.get('Content-Type'));
    return response.json();
   })
  .then((article) => {
    console.log(article.title); // => 'Как использовать fetch?'
  })
  .catch(console.error);

/*
Как видно, fetch это функция, возвращающая промис, а значит работать с ней удобно и приятно. А благодаря 
наличию полифиллов можно не переживать о том что какой-то браузер не поддерживает этот механизм.

Обратите внимание на то что response.json тоже возвращает промис. Кроме json данные можно получать 
используя функции blob, text, formData и arrayBuffer.

Отправка формы POST запросом:
*/

const form = document.querySelector('form');

fetch('/users', {
  method: 'POST',
  body: new FormData(form),
});

// Отправка формы как json:

fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Hubot',
      login: 'hubot',
    })
})

/*
При всех своих преимуществах, fetch довольно низкоуровневый механизм. Например работая с json 
(очень частый вариант), придется самостоятельно выставлять заголовки и делать разные манипуляции 
с данными, которые можно было бы автоматизировать.

На практике, это привело к созданию различных библиотек, которые работают схожим образом, но дают гораздо
больше возможностей. Причем многие из этих библиотек изоморфные, то есть работают одинаково и в браузере 
и на сервере. Одна из самых популярных библиотек на момент создания курса - axios.
*/

// URL

/*
Как мы знаем из предыдущих курсов, клеить строчки для работы с путями или урлами это плохая идея. 
Можно легко ошибиться и, в целом, приходится выполнять работу, которую может выполнять машина. В Node.js 
с этим никаких проблем, у нас есть соответствующие модули, а вот в браузере это всегда вызывало сложности. 
Распарсить или собрать url легко и просто не получалось.

С одной стороны, можно всегда воспользоваться сторонними библиотеками, которых достаточно много, 
но с другой, в браузерах уже есть встроенный для этого механизм (обычно добавляется полифиллами).
*/

const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // => www.example.com
console.log(url.pathname); // => /cats

url.hash = 'tabby';
console.log(url.href); // => http://www.example.com/cats#tabby

url.pathname = 'démonstration.html';
console.log(url.href); // => http://www.example.com/d%C3%A9monstration.html

//Что особенно приятно, fetch умеет работать с объектом URL напрямую:

const response = await fetch(new URL('http://www.example.com/démonstration.html'));

// А вот как можно работать с query параметрами:
// https://some.site/?id=123
const parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get('id')); // => 123
parsedUrl.searchParams.append('key', 'value')
console.log(parsedUrl); // => https://some.site/?id=123&key=value

/*
HTTP access control (CORS)
В отличие от бекенда, http запросы на клиенте могут использоваться злоумышленниками для кражи данных. 
Поэтому браузеры контролируют то, куда и как делаются запросы.

Подробно об этом механизме можно прочитать тут
*/

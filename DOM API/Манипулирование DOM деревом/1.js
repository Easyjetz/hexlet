// innerHTML

// Самый простой способ обновить часть DOM — это свойство innerHTML

<ul>
  <li>item 1</li>
  <li>item 2</li>
</ul>

const body = document.body;
console.log(body);
// <ul><li>item 1</li><li>item 2</li></ul>

body.innerHTML = '<b>make</b> love';
console.log(body.innerHTML);
// <b>make</b> love

console.log(body.childNodes);
// [b, text]

/*
Значение этого свойства целиком заменяет потомков элемента, на котором оно было вызвано. Весь встречающийся 
внутри HTML парсится и становится частью дерева. Если вы пытаетесь вставить обычный текст, который 
потенциально может содержать HTML (Это позволяет проводить XSS атаки), то лучше воспользоваться другим 
свойством – textContent.

textContent работает практически идентично, оно также заменяет всех потомков. Главное отличие между этими 
свойствами заключается в том, что textContent рассматривает свое содержимое как обычный текст в любом случае, 
даже если там есть HTML.
*/

document.body.textContent = '<b>make</b> love';
console.log(document.body.innerHTML);
// "&lt;b&gt;make&lt;/b&gt; love"

/*
innerHTML работает со строками, такой подход удобен только в том случае, когда мы работаем со статическим 
представлением DOM. Для динамического формирования хорошо подходят специальные функции.
*/

// Создание узлов

// Создаем текстовый узел
const textNode = document.createTextNode('life is life');

// Создаем элемент p
const pEl = document.createElement('p');

// Добавляем textNode в конец списка childNodes элемента pEl
pEl.append(textNode);
// pEl.textContent = 'life is life';

const el = document.createElement('div');
el.append(pEl);

console.log(el);
// <div><p>life is life</p></div>

/*
Код, создающий DOM динамически, похож на матрешку. После создания одни элементы все время вкладываются в другие.
Так выглядит код, который конструирует деревья в любом языке. Утомительное занятие, скажу я вам.
*/


// Вставка

const el = document.createElement('p');
document.body.prepend(el);


// автоматически удаляется из старого места
const elFromDom = document.querySelector('.col');
document.body.append(elFromDom);

// append/prepend — не единственный способ добавить элементы в DOM:

/*
node.after(...nodes) – вставляет nodes после узла node,
node.before(...nodes) – вставляет nodes перед узлом node,
node.replaceWith(...nodes) – вставляет nodes вместо node.
node.remove() – удаляет node
*/

// Старый API

/*
parent.appendChild(el) – добавляет el в конец списка детей
parent.insertBefore(el, nextElSibling) – добавляет el в список детей parent перед nextElSibling
parent.removeChild(el) – удаляет el из детей parent
parent.replaceChild(newEl, el) – заменяет el на newEl
*/

// Клонирование

/*
Иногда требуется создать элемент, подобный уже существующему. Можно, конечно, это сделать полностью руками, 
копируя свойства одного в свойства другого, но есть способ проще:
*/

const newEl = el.cloneNode(true);

/*
true говорит о том, что нужно сделать "глубокую" копию, другими словами, вы получите копию не только этого 
элемента, но и всех его потомков.
*/
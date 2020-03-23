/* 
В JavaScript с каждым объектом связан прототип. Прототип – это обычный объект, хранящийся в специальном 
служебном поле [[prototype]] (к этому полю невозможно обратиться напрямую). Его можно извлечь так:
*/
const date = new Date();
// Эта функция извлекает прототип не из конструктора, а из объекта!
Object.getPrototypeOf(date); // Date {}

const numbers = [1, 2]
Object.getPrototypeOf(numbers); // [] – отображение отличается, но это массив

// Прототипы есть и у конструкторов, которые мы определяем сами
function Company(name) {
  this.name = name;
}

const company = new Company();
Object.getPrototypeOf(company); // Company {}
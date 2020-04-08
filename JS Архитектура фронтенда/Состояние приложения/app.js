
  const render = (state) => {
    const stateArr = Object.entries(state);
    const data = stateArr.filter(([key, value]) => value != false);

    const f = (key, value, nb) => {
      if (key == 'diaposon') {
        const result = [];
        nb.map((e) => {
          if (value.min < e.frequency && e.frequency < value.max) {
            result.push(e);
          }
        });
        return result;
        
      }
      return nb.filter((element) => element[key] == value);
    }
    const newNotebooks = data.reduce(((acc, [key, value]) => f(key, value, acc)), notebooks);
    const elements = data.length == 0 ? notebooks : newNotebooks;
    console.log(elements.length);
    if (elements.length !== 0) {
        const listHTML = elements.map((el) => `<li>${el.model}</li>`).join('\n');
        ul.innerHTML = listHTML;
        result.append(ul);
    } else {
      result.innerHTML = '';
    }
  }

  input.forEach(element => element.addEventListener('input', (e) => {
    const value = e.target.value;
    const frequencyName = e.target.getAttribute('name');
    state.diaposon = {'min': 0, 'max': 5};
    if (frequencyName === 'frequency_gte') {
      const newValue = value == '' ? 0 : value 
      state.diaposon.min = newValue;
    } else {
      const newValue = value == '' ? 5 : value;
      state.diaposon.max = newValue;
    }
    console.log(state.diaposon);
    render(state);
  }))

  select.forEach(element => element.addEventListener('change', (e) => {
    const selectName = e.target.getAttribute('name');
    const value = e.target.value;

    if (selectName === 'processor_eq') {
      state.processor = value;
    } else {
      state.memory = value;
    }
    render(state);
  }))

  render(state);




// BEGIN
// This solution is kind of library. It can work with any forms without changing main logic.
// Just by adding as many predicates as needed
const predicates = {
    eq: (value) => (el) => String(el) === String(value),
    gte: (value) => (el) => (el) >= Number(value),
    lte: (value) => (el) => (el) <= Number(value),
  };
  
  const filterItems = (query, items) => {
    const fields = Object.keys(query);
    const activeFields = fields.filter((field) => query[field]);
    const result = activeFields.reduce((acc, field) => {
      const [name, predicateName] = field.split('_');
      const match = predicates[predicateName];
      return acc.filter((item) => match(query[field])(item[name]));
    }, items);
    return result;
  };
  
  const render = (state) => {
    const resultElement = document.querySelector('.result');
    const filteredNotebooks = filterItems(state.filter, notebooks);
    if (filteredNotebooks.length === 0) {
      resultElement.innerHTML = '';
      return;
    }
    const html = `<ul>${filteredNotebooks.map((n) => `<li>${n.model}</li>`).join('')}</ul>`;
    resultElement.innerHTML = html;
  };
  
  export default () => {
    const state = {
      filter: {
        processor_eq: null,
        memory_eq: null,
        frequency_gte: null,
        frequency_lte: null,
      },
    };
  
    const items = [
      { name: 'processor_eq', eventType: 'change' },
      { name: 'memory_eq', eventType: 'change' },
      { name: 'frequency_gte', eventType: 'input' },
      { name: 'frequency_lte', eventType: 'input' },
    ];
    items.forEach(({ name, eventType }) => {
      const element = document.querySelector(`[name="${name}"]`);
      element.addEventListener(eventType, ({ target }) => {
        state.filter[target.name] = target.value === '' ? null : target.value;
        render(state);
      });
    });
    render(state);
  };
  // END
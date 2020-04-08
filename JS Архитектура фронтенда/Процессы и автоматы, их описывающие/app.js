export default () => {
  const state = {
    name: {
      state: 'static',
      value: '',
      form: false,
    },
    email: {
      state: 'static',
      value: '',
      form: false,
    }
  }

  const render = (state, element, type) => {
    if (state.state === 'changes') {
      const textHTML = `<form><input type="text" name="${type}" value=""><input type="submit" value="Save"></form>`
      element.innerHTML = textHTML;
      watcher(state, element, type);
    } else {
      const textHTML = `${state.value}` === '' ? `<i>${type}</i>` : `${state.value}`;
      element.innerHTML = textHTML;
    }
  }

  const watcher = (state, element, type) => {
    const form = element.querySelector('form');
    console.log(state);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('[type="text"]');
      state.form = false;
      state.state = 'static'
      state.value = input.value;
      render(state, element, type);
    });
  }


const divs = document.querySelectorAll('[data-editable-target]');
divs.forEach(div => div.addEventListener('click', (e) => {
  const currentTargetElement = div.getAttribute('data-editable-target');
  if (state[currentTargetElement].form === false) {
    state[currentTargetElement].state = 'changes';
    state[currentTargetElement].form = true;
    render(state[currentTargetElement], div, currentTargetElement);
  }
}));
}




// BEGIN
const buildText = (name, { value }) => {
  if (value === '') {
    const i = document.createElement('i');
    i.innerHTML = name;
    return i;
  }
  return document.createTextNode(value);
};

const buildForm = (element, name, state, rerender) => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.name = name;
  input.setAttribute('value', state.value);
  form.appendChild(input);
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Save';
  form.appendChild(submit);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    state.value = formData.get(name);
    state.mode = 'text';
    rerender(element, name, state);
  });

  return { form, input, submit };
};

const render = (element, name, state) => {
  element.innerHTML = '';
  switch (state.mode) {
    case 'form': {
      const result = buildForm(element, name, state, render);
      element.appendChild(result.form);
      result.input.select();
      break;
    }
    case 'text':
      element.appendChild(buildText(name, state));
      break;
    default:
      throw new Error(`Unkown mode: ${state.mode}`);
  }
};

const handle = (element, name, state) => () => {
  if (state.mode === 'text') {
    state.mode = 'form';
    render(element, name, state);
  }
};


export default () => {
  const elements = document.querySelectorAll('[data-editable-target]');
  elements.forEach((element) => {
    const state = {
      mode: 'text',
      value: '',
    };
    const name = element.dataset.editableTarget;
    element.addEventListener('click', handle(element, name, state));
  });
};
// END
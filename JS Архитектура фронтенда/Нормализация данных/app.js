const generateStartHtml = (lists) => {
  const textHTML = `<ul><li><b>General</b></li></ul>`;
  lists.innerHTML = textHTML;
}

const buildTask = (element) => {
  const textHTML = element.taskList.map((task) => `<li>${task}</li>`).join('\n');
  return textHTML;
}

const buildList = (element) => {
  const li = document.createElement('li');
  const textHTML = `<a href="#${element.name.toLowerCase()}">${element.name}</a>`;
  li.innerHTML = textHTML;
  return li;
}

const switchingElement = (element) => {
  const currentActiveElement = document.querySelector('b');
  const link = document.createElement('a');
  link.textContent = currentActiveElement.textContent;
  link.setAttribute('href', `#${currentActiveElement.textContent.toLowerCase()}`);
  currentActiveElement.replaceWith(link);

  const clickElement = document.querySelector(`[href="#${element.name.toLowerCase()}"]`);
  const newActiveElement = document.createElement('b');
  newActiveElement.textContent = element.name;
  clickElement.replaceWith(newActiveElement);
}

const render = (listElement, taskElement) => {
  switch (listElement.mode) {
    case 'addTask': {
      const taskList = document.querySelector('[data-container="tasks"]');
      // длинная строчка
      const result = taskElement.taskList.length === 0 ? '' : buildTask(taskElement);
      result === '' ? taskList.innerHTML = '' : taskList.innerHTML = `<ul>${result}</ul>`;
      break;
    }
    case 'addList': {
      const result = buildList(listElement);
      const lists = document.querySelector('[data-container="lists"]');
      const ul = lists.querySelector('ul');
      ul.append(result);
      break;
    }
    case 'click': {
      switchingElement(listElement);
    }
  }
}

export default () => {
  const state = {
    tasks: [
      {id: 1, taskList: []}
    ],
    lists: [
      {name: 'General', id: 1, mode: 'static'}
    ]
  }
  // генерируем стартовую страницу с General разделом
  const lists = document.querySelector('[data-container="lists"]');
  generateStartHtml(lists);

  // добавление таска
  const tasksForm = document.querySelector('[data-container="new-task-form"]');
  tasksForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = tasksForm.querySelector('[type="text"]');
    const currentListName = document.querySelector('b').textContent;
    state.lists.map((list) => {
      // уже не нравится этот участок кода, думаю его можно заменить на функции
      if (list.name === currentListName) {
        state.tasks.map((task) => {
          if (list.id === task.id) {
            task.taskList.push(input.value);
            list.mode = 'addTask';
            render(list, task);
            list.mode = 'static';
          }
        });
      }
    });
  });
  // добавление нового раздела
  const listsForm = document.querySelector('[data-container="new-list-form"]');
  listsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = listsForm.querySelector('[type="text"]');
    const lastElement = _.last(state.lists);
    const currentId = lastElement.id + 1;  
    state.lists.push({name: input.value, id: currentId, mode: 'addList'});
    state.tasks.push({id: currentId, taskList: []});
    const listElement = _.last(state.lists);
    render(listElement, _.last(state.tasks));
    listElement.mode = 'static';
  });
  // переключение между разделами
  lists.addEventListener('click', (e) => {
    const clickElement = e.target.textContent;
    console.log(state);
    console.log(clickElement);

    state.lists.map((list) => {
      if (list.name === clickElement) {
        state.tasks.map((task) => {
          if (list.id === task.id) {
            list.mode = 'click';
            console.log(list, task);
            render(list, task);
            list.mode = 'addTask';
            render(list, task);
            list.mode = 'static';
          }
        })
      }
    });
  })

}

// BEGIN
const render = (elements, state) => {
  const { listsContainer, tasksContainer } = elements;

  const ulForLists = document.createElement('ul');
  state.lists.forEach((list) => {
    const li = document.createElement('li');
    let nameContainer;
    if (state.activeListId === list.id) {
      nameContainer = document.createElement('b');
      nameContainer.innerHTML = list.name;
    } else {
      nameContainer = document.createElement('a');
      nameContainer.setAttribute('href', `#${list.name.toLowerCase()}`);
      nameContainer.innerHTML = list.name;
      nameContainer.addEventListener('click', (e) => {
        e.preventDefault();
        state.activeListId = list.id;
        render(elements, state);
      });
    }
    li.appendChild(nameContainer);
    ulForLists.appendChild(li);
  });

  listsContainer.innerHTML = '';
  listsContainer.appendChild(ulForLists);

  const taskForRendering = state.tasks.filter(({ listId }) => listId === state.activeListId);
  tasksContainer.innerHTML = '';
  if (taskForRendering.length > 0) {
    const ulForTasks = document.createElement('ul');
    taskForRendering.forEach((task) => {
      const li = document.createElement('li');
      li.innerHTML = task.name;
      ulForTasks.appendChild(li);
    });
    tasksContainer.appendChild(ulForTasks);
  }

  // NOTE: reseting should be more granular
  elements.newListForm.reset();
  elements.newTaskForm.reset();
};

export default () => {
  const generalList = { id: _.uniqueId(), name: 'General' };
  const state = {
    activeListId: generalList.id,
    lists: [generalList],
    tasks: [],
  };

  const elements = {
    listsContainer: document.querySelector('[data-container="lists"]'),
    tasksContainer: document.querySelector('[data-container="tasks"]'),
    newListForm: document.querySelector('[data-container="new-list-form"]'),
    newTaskForm: document.querySelector('[data-container="new-task-form"]'),
  };

  elements.newListForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('name');
    const wasAddedBefore = !!state.lists.find(
      ({ name }) => name.toLowerCase() === value.toLowerCase(),
    );
    if (value !== '' && !wasAddedBefore) {
      const newList = { id: _.uniqueId(), name: value };
      state.lists.push(newList);
      render(elements, state);
    } else {
      // NOTE: render with errors
    }
  });

  elements.newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get('name');
    if (value !== '') {
      const newTask = { name: value, listId: state.activeListId };
      state.tasks.push(newTask);
      render(elements, state);
    } else {
      // NOTE: render with errors
    }
  });

  render(elements, state);
};
// END
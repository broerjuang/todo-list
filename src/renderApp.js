// @flow
import createElement from './helpers/createElement';
import renderTodoList from './renderTodoList';
// import elementToDOM from './helpers/elementToDOM';

import type {State} from './types/State';
import type {Element} from './types/Element';


function onSubmit(state: State) {
  let newTitle = state.inputValue;
  let newItem = {
    id: Math.random().toString(),
    title: newTitle,
  };
  let oldTodoList = state.todoList;
  let newState = {
    ...state,
    todoList: [...oldTodoList, newItem],
    inputValue: '',
  };
  return newState;
}

function renderApp(state: State): Element {
  return createElement('div', {}, [
    createElement('h1', null, ['Todo List']),
    renderTodoList(state),
    createElement('form', {
      submit: (event: Event) => {
        event.preventDefault();
        onSubmit(state);
      },
    }, [
      createElement('input', {placeholder: 'New Todo Item Title'}),
      createElement('button', null, ['Add']),
    ]),
  ]);
}

export default renderApp;

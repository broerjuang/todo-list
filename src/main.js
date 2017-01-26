// @flow
import createElement from './createElement';
import renderTodoList from './renderTodoList';

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
  reRender(newState);
}
function onInputChange(state: State, newValue: string) {
  state.inputValue = newValue;
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
function updateView(element: Element) {
  // TODO: Convert this element to something the browser can understand.
  // if (document.body != null) {
  //   document.body.innerHTML = html;
  // }
}
// Initial Render
let initialState = {
  todoList: [
    {id: '123', title: 'Beli Pisang'},
    {id: '234', title: 'Belajar JS'},
    {id: '345', title: 'Makan Kue'},
  ],
  inputValue: '',
};
let rootElement = renderApp(initialState);
updateView(rootElement);

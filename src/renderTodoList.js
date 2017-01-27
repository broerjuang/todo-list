// @flow
import createElement from './helpers/createElement';
import renderTodoItem from './renderTodoItem';

import type {Element} from './types/Element';
import type {State} from './types/State';

function renderTodoList(state: State): Element {
  let children = [];
  for (let item of state.todoList) {
    children.push(renderTodoItem(item));
  }
  return createElement('ul', {}, children);
}

export default renderTodoList;

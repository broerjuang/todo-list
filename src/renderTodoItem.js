// @flow
import createElement from './helpers/createElement';

import type {Element} from './types/Element';
import type {TodoItem} from './types/TodoItem';

function renderTodoItem(todoItem: TodoItem): Element {
  return createElement('li', {}, [todoItem.title]);
}

export default renderTodoItem;

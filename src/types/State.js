// @flow
import type {TodoItem} from './TodoItem';

export type State = {
  todoList: Array<TodoItem>;
  inputValue: string;
};

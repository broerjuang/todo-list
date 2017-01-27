// @flow

import renderTodoList from '../renderTodoList';
import createElement from '../helpers/createElement';

describe('renderTodoList', () => {
  let mockList = {
    inputValue: '',
    todoList: [
        {id: '123', title: 'one'},
        {id: '234', title: 'two'},
    ],
  };
  it('should render a list of item', () => {
    let result = renderTodoList(mockList);
    expect(result).toEqual(
      createElement('ul', null, [
        createElement('li', null, ['one']),
        createElement('li', null, ['two']),
      ])
    );
  });
});

// @flow

import renderTodoItem from '../renderTodoItem';

describe('renderTodoItem', () => {
  it('should render one item', () => {
    let mockItem = {
      id: '123',
      title: 'Minum Kopi',
    };

    let html = renderTodoItem(mockItem);
    expect(html).toEqual({
      tagName: 'li',
      attributes: {},
      events: {},
      children: ['Minum Kopi'],
    });
  });
});

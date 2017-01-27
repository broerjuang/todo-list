// @flow
import renderApp from './renderApp';

// function updateView(element: Element) {
//   // TODO: Convert this element to something the browser can understand.
//   if (document.body != null) {
//     console.log(elementToDOM(element));
//   }
// }
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
console.log('root element', rootElement);
// updateView(rootElement);

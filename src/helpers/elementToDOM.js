// @flow
import type {Element} from '../types/Element';


function elementToDOM(element: Element) {
  let {tagName, attributes, children} = element;
  let outer = document.createElement(tagName);
  for (let item of children) {
    if (typeof item !== 'string') {
      elementToDOM(item);
    } else {
      let innerText = document.createTextNode(item);
      outer.appendChild(innerText);
      console.log(attributes);
      for (let key of Object.keys(attributes)) {
        // console.log(key);
        outer.setAttribute(key, attributes[key]);
      }
    }
  }
  // console.log(outer);
  // for (let item of children) {
  //   if (typeof item === 'string') {
  //     let innerText = document.createTextNode(item);
  //     outer.appendChild(innerText);
  //     for (let key of Object.keys(attributes)) {
  //       outer.setAttribute(key, attributes[key]);
  //     }
  //   }
  //   elementToDOM(item);
  // }
}

export default elementToDOM;

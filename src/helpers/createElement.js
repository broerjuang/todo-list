// @flow
import type {Node, Element} from '../types/Element';
import {EMPTY_CHILDREN} from '../Constants/Constants';

function createElement(tagName: string,
                       attributesAndEvents: ?{[key: string]: string | Function},
                       children: Array<Node> = EMPTY_CHILDREN): Element {
  let attributes = {};
  let events = {};
  if (attributesAndEvents != null) {
    for (let key of Object.keys(attributesAndEvents)) {
      let value = attributesAndEvents[key];
      if (typeof value === 'function') {
        events[key] = value;
      } else {
        attributes[key] = value;
      }
    }
  }
  return {tagName, attributes, events, children};
}

export default createElement;

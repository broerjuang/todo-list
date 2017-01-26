// @flow
export type Node = string | Element;

export type Element = {
  tagName: string;
  attributes: {[key: string]: string};
  events: {[key: string]: Function};
  children: Array<Node>;
};

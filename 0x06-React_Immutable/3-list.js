import { List } from 'immutable';

export function getListObject(array) {
  //convertt the array into an immutable list
  return List(array);
}
export function addElementToList(list, element){
  // Append the string element to the List and return the new list
  return list.push(element);
}

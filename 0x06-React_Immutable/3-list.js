import { List } from 'immutable';

export function getListObject(array) {
  // Convert the array into an immutable List
  return List(array);
}

export function addElementToList(list, element) {
  // Append the string element to the List and return the new List
  return list.push(element);
}

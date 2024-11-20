import Immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert plain object to Immutable.js structure
  const myMap = Immutable.fromJS(object);
  // Use getIn to retrieve the value at the specified path
  return myMap.getIn(array);
}

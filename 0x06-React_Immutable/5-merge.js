import Immutable from 'immutable';

/**
 * Concatenates two arrays into an Immutable List.
 * @param {Array} page1 - First array.
 * @param {Array} page2 - Second array.
 * @returns {Immutable.List} Immutable List containing values from both arrays.
 */
function concatElements(page1, page2) {
  const myList = Immutable.List(page1);
  const myList2 = Immutable.List(page2);
  return myList.concat(myList2);
}

/**
 * Merges two objects into an Immutable Map.
 * If a key exists in both objects, the value from page2 is used.
 * @param {Object} page1 - First object.
 * @param {Object} page2 - Second object.
 * @returns {Immutable.Map} Immutable Map containing merged key-value pairs.
 */
function mergeElements(page1, page2) {
  const myMap = Immutable.Map(page1);
  const myMap2 = Immutable.Map(page2);
  return myMap.merge(myMap2);
}

export { concatElements, mergeElements };

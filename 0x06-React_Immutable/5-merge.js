import { List, Map } from 'immutable';

/**
 * Concatenates two arrays into an Immutable List.
 * @param {Array} page1 - First array.
 * @param {Array} page2 - Second array.
 * @returns {List} Immutable List containing values from both arrays.
 */
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

/**
 * Merges two objects into an Immutable List.
 * If a key exists in both objects, the value from page2 is used.
 * @param {Object} page1 - First object.
 * @param {Object} page2 - Second object.
 * @returns {List} Immutable List containing merged object values.
 */
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two maps, prioritizing values from page2
  const mergedMap = map1.merge(map2);

  // Convert the merged map's values into an Immutable List
  return List(mergedMap.valueSeq());
}

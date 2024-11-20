import Immutable from 'immutable';

/**
 * Merges two objects deeply using Immutable.js.
 * If keys overlap, they are merged instead of overwritten.
 * @param {Object} page1 - First object.
 * @param {Object} page2 - Second object.
 * @returns {Immutable.Map} Immutable Map containing the merged data.
 */
function mergeDeeplyElements(page1, page2) {
  const map1 = Immutable.fromJS(page1);
  const map2 = Immutable.fromJS(page2);

  return map1.mergeDeep(map2);
}

export default mergeDeeplyElements;

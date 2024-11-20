import Immutable from 'immutable';

/**
 * Compares two Immutable Maps for equality.
 * @param {Immutable.Map} map1 - First Map to compare.
 * @param {Immutable.Map} map2 - Second Map to compare.
 * @returns {boolean} - Returns true if both Maps are equal, false otherwise.
 */
function areMapsEqual(map1, map2) {
  return Immutable.is(map1, map2);
}

export default areMapsEqual;

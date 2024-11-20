const { fromjs.js } = require('immutable');


/**
 * converts a plain js object into an Immutable.js Map
 * @param {Object} object - The input JS object
 * @returns {Map} - The Immutable.js Map representation of the object
 */
function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = getImmutableObject;

import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an Immutable.js Map.
 * @param {Object} object - The input JavaScript object.
 * @returns {Map} - The Immutable.js Map representation of the object.
 */
const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;

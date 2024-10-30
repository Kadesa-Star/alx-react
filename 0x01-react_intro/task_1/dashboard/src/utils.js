// src/utils.js

/**
 * Returns the current year.
 * @returns {number} The current year.
 */
export function getFullYear() {
  return new Date().getFullYear();
}

/**
 * Returns a string based on the isIndex parameter.
 * @param {boolean} isIndex - If true, returns 'Holberton School', otherwise 'Holberton School main dashboard'.
 * @returns {string} The footer copy.
 */
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

/**
 * Utilities.
 *
* @version 1.0
* @author [Alan Campos]
*
*/

/**
 * Generates a unique token.
 *
 * @returns {string}
 */
export function getUniqueId() {
  const UIDGenerator = require('uid-generator');
  const uidgen = new UIDGenerator(null, 16);
  return uidgen.generateSync();
}

/**
 * Iterates through the object passed and applies each key, value pair
 * to the given node.
 *
 * @param {string} element
 * @param {object} dataset
 */
export function applyDataset(element, dataset) {
  if ((element !== null || element !== undefined) && (dataset !== null || dataset !== undefined)) {
    Object.assign(element, dataset);
  } else {
    throw new Error('Element cannot be found.');
  }
}

/**
 * Insert text at cursor position.
 *
 * @param {string} text
 * @public
 */
export function copy(o) {
  let v;
  let key;
  const output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = (typeof v === 'object') ? copy(v) : v;
  }
  return output;
}

/**
 * Creates and sends a file to browser for download.
 *
 * @param {string} filename
 * @param {string} content
 */
export function download(filename, content) {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

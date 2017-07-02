import toPlainObject from 'lodash/toPlainObject';

/**
 * Base model
 */
export default class Base {
  /**
   * Converts a model into a plain object
   * @returns {Object}
   */
  toPlainObject() {
    return toPlainObject(this);
  }
}

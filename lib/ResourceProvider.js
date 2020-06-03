/**
 * Created by Vasiliy Ermilov (ermilov.work@yandex.ru) on 2/13/17.
 */
const ResourceAdapter = require('./interfaces/ResourceAdapter');
const IonError = require('core/IonError');
const Errors = require('../errors/lib');

/**
 *
 * @param {{}} options
 * @param {{}} options.adapters
 * @constructor
 */
function ResourceProvider(options) {

  var adapters = options.adapters || {};

  /**
   *
   * @param {String} type
   * @param {{}} [options]
   * @param {Number} [offset]
   * @param {Number} [count]
   * @return {Promise}
   */
  this.getResources = function (type, options, offset, count) {
    if (adapters[type] instanceof ResourceAdapter) {
      return adapters[type].getResources(options, offset, count);
    }
    return Promise.reject(new IonError(Errors.WRONG_TYPES, {type}));
  };

  this.getResource = function (type, id) {
    if (adapters[type] instanceof ResourceAdapter) {
      return adapters[type].getResource(id);
    }
    return Promise.reject(new IonError(Errors.WRONG_TYPES, {type}));
  };

}

module.exports = ResourceProvider;

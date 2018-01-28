/**
 * Narmi Banking API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: contact@narmitech.com
 *
 * NOTE: This class is auto generated, do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.Check = factory(root.BankingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Check model module.
   * @module model/Check
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Check</code>.
   * @alias module:model/Check
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Check</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Check} obj Optional instance to populate.
   * @return {module:model/Check} The populated <code>Check</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
    }
    return obj;
  }

  /**
   * The identifier of the paper check.
   * @member {String} number
   */
  exports.prototype['number'] = undefined;



  return exports;
}));



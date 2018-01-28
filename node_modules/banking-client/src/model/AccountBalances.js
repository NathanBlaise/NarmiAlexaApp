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
    root.BankingClient.AccountBalances = factory(root.BankingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountBalances model module.
   * @module model/AccountBalances
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AccountBalances</code>.
   * @alias module:model/AccountBalances
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AccountBalances</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountBalances} obj Optional instance to populate.
   * @return {module:model/AccountBalances} The populated <code>AccountBalances</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('primary')) {
        obj['primary'] = ApiClient.convertToType(data['primary'], 'Number');
      }
      if (data.hasOwnProperty('available')) {
        obj['available'] = ApiClient.convertToType(data['available'], 'Number');
      }
      if (data.hasOwnProperty('ledger')) {
        obj['ledger'] = ApiClient.convertToType(data['ledger'], 'Number');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {Number} primary
   */
  exports.prototype['primary'] = undefined;
  /**
   * @member {Number} available
   */
  exports.prototype['available'] = undefined;
  /**
   * @member {Number} ledger
   */
  exports.prototype['ledger'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));



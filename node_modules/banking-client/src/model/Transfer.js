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
    root.BankingClient.Transfer = factory(root.BankingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Transfer model module.
   * @module model/Transfer
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Transfer</code>.
   * @alias module:model/Transfer
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transfer} obj Optional instance to populate.
   * @return {module:model/Transfer} The populated <code>Transfer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('from_account_id')) {
        obj['from_account_id'] = ApiClient.convertToType(data['from_account_id'], 'String');
      }
      if (data.hasOwnProperty('to_account_id')) {
        obj['to_account_id'] = ApiClient.convertToType(data['to_account_id'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} from_account_id
   */
  exports.prototype['from_account_id'] = undefined;
  /**
   * @member {String} to_account_id
   */
  exports.prototype['to_account_id'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));



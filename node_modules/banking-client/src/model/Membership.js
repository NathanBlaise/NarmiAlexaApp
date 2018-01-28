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
    root.BankingClient.Membership = factory(root.BankingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Membership model module.
   * @module model/Membership
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Membership</code>.
   * The relationship between a user and an account.
   * @alias module:model/Membership
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Membership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Membership} obj Optional instance to populate.
   * @return {module:model/Membership} The populated <code>Membership</code> instance.
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
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * Membership ID, opaque unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;



  return exports;
}));



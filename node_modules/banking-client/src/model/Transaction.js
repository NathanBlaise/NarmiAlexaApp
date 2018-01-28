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
    define(['ApiClient', 'model/Check', 'model/Location'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Check'), require('./Location'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.Transaction = factory(root.BankingClient.ApiClient, root.BankingClient.Check, root.BankingClient.Location);
  }
}(this, function(ApiClient, Check, Location) {
  'use strict';




  /**
   * The Transaction model module.
   * @module model/Transaction
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('settled_at')) {
        obj['settled_at'] = ApiClient.convertToType(data['settled_at'], 'Date');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('sub_category')) {
        obj['sub_category'] = ApiClient.convertToType(data['sub_category'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = Location.constructFromObject(data['location']);
      }
      if (data.hasOwnProperty('check')) {
        obj['check'] = Check.constructFromObject(data['check']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique transaction identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {Date} settled_at
   */
  exports.prototype['settled_at'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} sub_category
   */
  exports.prototype['sub_category'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {module:model/Location} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/Check} check
   */
  exports.prototype['check'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;



  return exports;
}));



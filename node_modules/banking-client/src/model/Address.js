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
    root.BankingClient.Address = factory(root.BankingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Address model module.
   * @module model/Address
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('street_address')) {
        obj['street_address'] = ApiClient.convertToType(data['street_address'], 'String');
      }
      if (data.hasOwnProperty('street_address_2')) {
        obj['street_address_2'] = ApiClient.convertToType(data['street_address_2'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('region_code')) {
        obj['region_code'] = ApiClient.convertToType(data['region_code'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} street_address
   */
  exports.prototype['street_address'] = undefined;
  /**
   * @member {String} street_address_2
   */
  exports.prototype['street_address_2'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} region_code
   */
  exports.prototype['region_code'] = undefined;
  /**
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;



  return exports;
}));



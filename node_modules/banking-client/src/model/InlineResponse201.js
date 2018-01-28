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
    define(['ApiClient', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.InlineResponse201 = factory(root.BankingClient.ApiClient, root.BankingClient.Subscription);
  }
}(this, function(ApiClient, Subscription) {
  'use strict';




  /**
   * The InlineResponse201 model module.
   * @module model/InlineResponse201
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:model/InlineResponse201
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201} obj Optional instance to populate.
   * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscription')) {
        obj['subscription'] = Subscription.constructFromObject(data['subscription']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Subscription} subscription
   */
  exports.prototype['subscription'] = undefined;



  return exports;
}));



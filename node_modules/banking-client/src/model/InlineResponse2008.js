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
    define(['ApiClient', 'model/Links', 'model/Meta', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./Meta'), require('./Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.InlineResponse2008 = factory(root.BankingClient.ApiClient, root.BankingClient.Links, root.BankingClient.Meta, root.BankingClient.Subscription);
  }
}(this, function(ApiClient, Links, Meta, Subscription) {
  'use strict';




  /**
   * The InlineResponse2008 model module.
   * @module model/InlineResponse2008
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InlineResponse2008</code>.
   * @alias module:model/InlineResponse2008
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptions')) {
        obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [Subscription]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = Links.constructFromObject(data['links']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Subscription>} subscriptions
   */
  exports.prototype['subscriptions'] = undefined;
  /**
   * @member {module:model/Meta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:model/Links} links
   */
  exports.prototype['links'] = undefined;



  return exports;
}));



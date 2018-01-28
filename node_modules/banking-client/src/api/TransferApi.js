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
    define(['ApiClient', 'model/Error', 'model/Transfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Transfer'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.TransferApi = factory(root.BankingClient.ApiClient, root.BankingClient.Error, root.BankingClient.Transfer);
  }
}(this, function(ApiClient, Error, Transfer) {
  'use strict';

  /**
   * Transfer service.
   * @module api/TransferApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransferApi. 
   * @alias module:api/TransferApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.configuration;


    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/TransferApi~createCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a transfer
     * @param {module:model/Transfer} body Transfer object representing money to be moved between accounts
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/TransferApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.create = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Date': opts['_date'],
        'Signature': opts['signature'],
        'X-Request-Id': opts['xRequestId']
      };
      var formParams = {
      };

      var authNames = ['Application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/transfers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

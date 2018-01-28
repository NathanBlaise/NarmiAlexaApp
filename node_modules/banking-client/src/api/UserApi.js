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
    define(['ApiClient', 'model/InlineResponse200', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.UserApi = factory(root.BankingClient.ApiClient, root.BankingClient.InlineResponse200, root.BankingClient.InlineResponse2001);
  }
}(this, function(ApiClient, InlineResponse200, InlineResponse2001) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 0.1.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.configuration;


    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/UserApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user
     * @param {String} userId The id of the user to be operated on
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/UserApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.get = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling get");
      }


      var pathParams = {
        'userId': userId
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
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/UserApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/UserApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.list = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

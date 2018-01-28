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
    define(['ApiClient', 'model/Account', 'model/Error', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2005', 'model/InlineResponse2006'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Account'), require('../model/Error'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2005'), require('../model/InlineResponse2006'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.AccountApi = factory(root.BankingClient.ApiClient, root.BankingClient.Account, root.BankingClient.Error, root.BankingClient.InlineResponse2002, root.BankingClient.InlineResponse2003, root.BankingClient.InlineResponse2005, root.BankingClient.InlineResponse2006);
  }
}(this, function(ApiClient, Account, Error, InlineResponse2002, InlineResponse2003, InlineResponse2005, InlineResponse2006) {
  'use strict';

  /**
   * Account service.
   * @module api/AccountApi
   * @version 0.1.0
   */

  /**
   * Constructs a new AccountApi. 
   * @alias module:api/AccountApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.configuration;


    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/AccountApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account
     * @param {String} accountId The id of the account to be operated on (note that this identifies an account at the suffix level)
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/AccountApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.get = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }


      var pathParams = {
        'accountId': accountId
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/accounts/{accountId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccountBalances operation.
     * @callback module:api/AccountApi~getAccountBalancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account balances for an account
     * @param {String} accountBalancesId The id of the account balances object to be operated on
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/AccountApi~getAccountBalancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.getAccountBalances = function(accountBalancesId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountBalancesId' is set
      if (accountBalancesId === undefined || accountBalancesId === null) {
        throw new Error("Missing the required parameter 'accountBalancesId' when calling getAccountBalances");
      }


      var pathParams = {
        'accountBalancesId': accountBalancesId
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
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/account_balances/{accountBalancesId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/AccountApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List accounts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/AccountApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
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
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAccountBalances operation.
     * @callback module:api/AccountApi~listAccountBalancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List account balances
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/AccountApi~listAccountBalancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    this.listAccountBalances = function(opts, callback) {
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
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/account_balances', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/AccountApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update account
     * @param {String} accountId The id of the account to be operated on (note that this identifies an account at the suffix level)
     * @param {module:model/Account} body Account attributes to update object
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/AccountApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.update = function(accountId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling update");
      }


      var pathParams = {
        'accountId': accountId
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/accounts/{accountId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

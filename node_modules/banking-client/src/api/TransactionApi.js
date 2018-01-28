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
    define(['ApiClient', 'model/Error', 'model/InlineResponse2004', 'model/InlineResponse2007', 'model/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/InlineResponse2004'), require('../model/InlineResponse2007'), require('../model/Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.BankingClient) {
      root.BankingClient = {};
    }
    root.BankingClient.TransactionApi = factory(root.BankingClient.ApiClient, root.BankingClient.Error, root.BankingClient.InlineResponse2004, root.BankingClient.InlineResponse2007, root.BankingClient.Transaction);
  }
}(this, function(ApiClient, Error, InlineResponse2004, InlineResponse2007, Transaction) {
  'use strict';

  /**
   * Transaction service.
   * @module api/TransactionApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransactionApi. 
   * @alias module:api/TransactionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.configuration;


    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/TransactionApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transaction
     * @param {String} transactionId The id of the transaction to be operated on
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/TransactionApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.get = function(transactionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling get");
      }


      var pathParams = {
        'transactionId': transactionId
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
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/transactions/{transactionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/TransactionApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List transactions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {String} opts.before A cursor to paginate large (time sorted) collections. Use to return results sorted before (greater than) the given ID. 
     * @param {String} opts.after A cursor to paginate large (time sorted) collections. Use to return results sorted after (less than) the given ID. 
     * @param {module:model/String} opts.filter Indicate which type of transactions to return. Can be one of:   * &#x60;unsettled&#x60;: transactions without a &#x60;settled_at&#x60; time 
     * @param {module:api/TransactionApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.list = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'before': opts['before'],
        'after': opts['after'],
        'filter': opts['filter'],
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
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTransactions operation.
     * @callback module:api/TransactionApi~listTransactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List transactions for an account
     * @param {String} accountId The id of the account for which to retrieve transactions (note that this identifies an account at the suffix level)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page 
     * @param {Number} opts.perPage 
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {String} opts.before A cursor to paginate large (time sorted) collections. Use to return results sorted before (greater than) the given ID. 
     * @param {String} opts.after A cursor to paginate large (time sorted) collections. Use to return results sorted after (less than) the given ID. 
     * @param {module:api/TransactionApi~listTransactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.listTransactions = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listTransactions");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'before': opts['before'],
        'after': opts['after'],
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
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/accounts/{accountId}/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/TransactionApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update transaction
     * @param {String} transactionId The id of the transaction to be operated on
     * @param {module:model/Transaction} body Transaction attributes to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts._date 
     * @param {String} opts.signature 
     * @param {String} opts.xRequestId 
     * @param {module:api/TransactionApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    this.update = function(transactionId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling update");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling update");
      }


      var pathParams = {
        'transactionId': transactionId
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
      var returnType = InlineResponse2007;

      return this.apiClient.callApi(
        '/transactions/{transactionId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

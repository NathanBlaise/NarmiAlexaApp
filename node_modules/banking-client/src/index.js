/**
 * Narmi Banking API
 *
 * OpenAPI spec version: 0.1.0
 * Contact: contact@narmitech.com
 *
 * NOTE: This class is auto generated, do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountBalances', 'model/Address', 'model/Check', 'model/Document', 'model/Error', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse201', 'model/Links', 'model/Location', 'model/Membership', 'model/Meta', 'model/Phone', 'model/Subscription', 'model/Transaction', 'model/Transfer', 'model/User', 'api/AccountApi', 'api/GeneralApi', 'api/SubscriptionApi', 'api/TransactionApi', 'api/TransferApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountBalances'), require('./model/Address'), require('./model/Check'), require('./model/Document'), require('./model/Error'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2008'), require('./model/InlineResponse201'), require('./model/Links'), require('./model/Location'), require('./model/Membership'), require('./model/Meta'), require('./model/Phone'), require('./model/Subscription'), require('./model/Transaction'), require('./model/Transfer'), require('./model/User'), require('./api/AccountApi'), require('./api/GeneralApi'), require('./api/SubscriptionApi'), require('./api/TransactionApi'), require('./api/TransferApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Account, AccountBalances, Address, Check, Document, Error, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse201, Links, Location, Membership, Meta, Phone, Subscription, Transaction, Transfer, User, AccountApi, GeneralApi, SubscriptionApi, TransactionApi, TransferApi, UserApi) {
  'use strict';

  /**
   * Banking API client..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var BankingClient = require('index'); // See note below*.
   * var xxxSvc = new BankingClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new BankingClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new BankingClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new BankingClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountBalances model constructor.
     * @property {module:model/AccountBalances}
     */
    AccountBalances: AccountBalances,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The Check model constructor.
     * @property {module:model/Check}
     */
    Check: Check,
    /**
     * The Document model constructor.
     * @property {module:model/Document}
     */
    Document: Document,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201: InlineResponse201,
    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links: Links,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The Membership model constructor.
     * @property {module:model/Membership}
     */
    Membership: Membership,
    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta: Meta,
    /**
     * The Phone model constructor.
     * @property {module:model/Phone}
     */
    Phone: Phone,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction: Transaction,
    /**
     * The Transfer model constructor.
     * @property {module:model/Transfer}
     */
    Transfer: Transfer,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The AccountApi service constructor.
     * @property {module:api/AccountApi}
     */
    accounts: new AccountApi(),
    /**
     * The GeneralApi service constructor.
     * @property {module:api/GeneralApi}
     */
    generals: new GeneralApi(),
    /**
     * The SubscriptionApi service constructor.
     * @property {module:api/SubscriptionApi}
     */
    subscriptions: new SubscriptionApi(),
    /**
     * The TransactionApi service constructor.
     * @property {module:api/TransactionApi}
     */
    transactions: new TransactionApi(),
    /**
     * The TransferApi service constructor.
     * @property {module:api/TransferApi}
     */
    transfers: new TransferApi(),
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    users: new UserApi()
  };

  return exports;
}));

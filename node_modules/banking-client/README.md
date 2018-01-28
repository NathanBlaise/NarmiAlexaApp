# banking-client-node

BankingClient - JavaScript client for banking-client

This SDK is automatically generated for:

- API version: 0.1.0
- Package version: 0.1.0

## Installation

### node (npm)

The library is hosted at a git repository, (https://github.com/narmitech/banking-client-node), it can be installed via:

```shell
npm install narmitech/banking-client-node --save
```

Or in a `package.json`:
```js
{
  ...
  "dependencies": {
    ...
    "banking-client": "github:narmitech/banking-client-node",
    ...
  }
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var BankingClient = require('banking-client');

var config = BankingClient.ApiClient.configuration;
config.basePath = "YOUR BASE PATH"

// Configure OAuth2 access token
var auth = config.authentications['Application'];
auth.accessToken = "YOUR ACCESS TOKEN"
auth.secret = "YOUR SECRET"


var accountId = "accountId_example"; // {String} The id of the account to be operated on (note that this identifies an account at the suffix level)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
BankingClient.accounts.get(accountId, opts, callback);

```

## Documentation for Authorization


### Application

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - write: allows reading and modifying resources
  - read: allows reading resources
  - read:profile: allows reading extended information about the user including address


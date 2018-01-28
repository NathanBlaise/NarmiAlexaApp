/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// alexa-cookbook sample code

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the entire file contents as the code for a new Lambda function,
// or copy & paste section #3, the helper function, to the bottom of your existing Lambda code.

// TODO add URL to this entry in the cookbook


 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function

 let speechOutput;
 let reprompt;
 const welcomeOutput = "Welcome to my Narmi. What would you like to do";
 const welcomeReprompt = "What would you like to do with your account?";
 const tripIntro = [
   "Got it. Let me check the account."
 ];



 // 2. Skill Code =======================================================================================================

'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var banking_client = require('banking-client');

var defaultClient = banking_client.ApiClient.configuration;
defaultClient.basePath = "https://api.demo.narmitech.com/v1"

// Configure OAuth2 access token for authorization: Application
var Application = defaultClient.authentications['Application'];
Application.accessToken = "tM5UsNOlnNTP3wjNMD0gQ7UQKUOYD2DG"
Application.secret = "m5ISDu7LqwcqxrGWomiLd0kinLXwltIf"

const handlers = {
    'LaunchRequest': function () {
      this.response.speak(welcomeOutput).listen(welcomeReprompt);
      this.emit(':responseReady');
    },
    'getBalanceIntent': function () {
        var filledSlots = delegateSlotCollection.call(this);
        var ACCOUNT_TYPE=this.event.request.intent.slots.accountType.value;
        ACCOUNT_TYPE = ACCOUNT_TYPE.toString();
        getBalance( ACCOUNT_TYPE, (balance) => {
        
            balance = balance.toString();
            var balanceDollars = balance.slice(0,-2);
            var balancePence = balance.slice(-2);
            this.emit(":tell","You have " + balanceDollars + " dollars and "+ balancePence +" cents in your " + ACCOUNT_TYPE);
            //this.emit(':responseReady');
        });
    },

    
    'getTransactionHistoryIntent': function () {
        getTransaction( (transactionName,amount) => {
            var filledSlots = delegateSlotCollection.call(this);
            var ACCOUNT_TYPE=this.event.request.intent.slots.accountType.value;
            amount = amount.toString();
            var amountDollars = amount.slice(0,-2);
            var amountPence = amount.slice(-2);
            this.response.speak("Your last transaction was "+ transactionName +" for "+ amountDollars +" dollars and "+ amountPence +" cents in your " + ACCOUNT_TYPE +  " account.");
            this.emit(':responseReady');
        });
        
    },
    
    'transfer': function () {
        var filledSlots = delegateSlotCollection.call(this);
        var AMOUNT=this.event.request.intent.slots.AMOUNT.value;
        var fromACCOUNT = this.event.request.intent.slots.fromACCOUNT.value;
        var toACCOUNT = this.event.request.intent.slots.toACCOUNT.value;
        this.response.speak("I have transfered" + AMOUNT + " dollars from " + fromACCOUNT + "to" + toACCOUNT);
        this.emit(':responseReady');
    },
        
    'AMAZON.HelpIntent': function () {
        speechOutput = "";
        reprompt = "";
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        speechOutput = "";
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        speechOutput = "";
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function () {
        var speechOutput = "";
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
};

exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

    function getBalance(ACCOUNT_TYPE, callback){

    banking_client.accounts.list().end(function(err, result) { 
        //console.log(result.body.accounts);

         for (var i = 0; i < result.body.accounts.length; i++){


                
             if (result.body.accounts[i].name.toLowerCase().includes(ACCOUNT_TYPE.toLowerCase())){
             // console.log(i);
               var temp = i;
               banking_client.accounts.listAccountBalances().end(function(err, result) { 
               var balance = result.body.account_balances[temp].available;
               //console.log(balance)
               callback(balance);
               });
           }
          }
  });
}

function getTransaction(callback){
    banking_client.transactions.list().end(function(err, result) { 
        let transactionName = result.body.transactions[0].description;
        let amount = result.body.transactions[0].amount;
        callback(transactionName,amount);
    });
}

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
      var updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      this.emit(":delegate", updatedIntent);
    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      this.emit(":delegate");
    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}
"use strict";
const messages = require('elasticio-node').messages;
const _ = require("underscore");
const accountService = require("../commons/services/accountService.js");
const invoiceService = require("../commons/services/invoiceService.js");

 
exports.process = processAction;

/*** 
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as endPointURL,apiKey,username,password 
 * @returns promise resolving a message to be emitted to the platform
 */
 async function processAction(msg, cfg) {
     const self = this;
     console.log("msg body " + JSON.stringify(msg.body)); 
     var account = await accountService.login(cfg);



     var subsidiaries = {
         list:[]
     };

     for (var i = 0; i < msg.body.subsidiaries.length; i++) {

         var result = await invoiceService.createSubsidiary(msg.body.subsidiaries[i], cfg, account.headers['etag']);

         subsidiaries.list.push(result);
     }

     self.emit('data', messages.newMessageWithBody(subsidiaries));
     self.emit('end');
    
 }
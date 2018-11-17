﻿'use strict';

const expect = require('chai').expect;
const TestEmitter = require('./TestEmitter');
const verifyCredentials = require('../verifyCredentials');

const upsertInvoiceCaliber = require('../lib/actions/invoice/upsertInvoiceCaliber');
const searchAPI = require('../lib/actions/search/searchObject');

const schema = require('../lib/schema');
describe('Integration Test', function GetEntryTest() {
    const credential1 = {
        customer_name: 'Test Inc',
        apiKey_cal: 'MTUAT01',
        username_cal: 'mtconnect@mineraltree.com',
        password_cal: 'System01##',
        endPointURL_cal: 'https://asp.calibersoftware.com/capi2_APISandbox',
        username_mt: 'hannah.kim+uat+api@mineraltree.com',
        password_mt: 'testRun#1',
        endPointURL_mt: 'https://test-f-mt.mineraltree.net',
        companyId_mt: 'a630ca06-sfddsfsdfsdf7c88-49f5-846b-d8011c8ceb70'
    };

    this.timeout(100000);

    //if (fs.existsSync('.env')) {
    //    require('dotenv').config();
    //}


    const cfgs = [
        {
            username: credential1.username_mt,
            password: credential1.password_mt,
            baseUrl: credential1.endPointURL_mt,
            companyId: credential1.companyId_mt

        }
    ];

    cfgs.forEach(cfg => {


        //describe('Verify Credentials Tests', function VerifyCredentialsTests() {
        //    it('Correct Password', async function CorrectPasswordTest() {
        //        const authResult = await verifyCredentials.call({}, cfg);
        //        expect(authResult).to.be.true;
        //    });

        //    it('Incorrect Password', async function IncorrectPasswordTest() {
        //        const wrongCfg = JSON.parse(JSON.stringify(cfg));
        //        wrongCfg.password = 'WrongPassword';
        //        const authResult = await verifyCredentials.call({}, wrongCfg);
        //        expect(authResult).to.be.false;
        //    });
        //});


        //describe('Invoice Tests', function VerifyCredentialsTests() {
        //    it('Correct invoice', async function correctInvoice() {

        //        var caliberinvoice = {
        //            "InvoiceID": 6564,
        //            "ClientID": 15,
        //            "InvoiceNumber": "16Nov#1",
        //            "APBasis": null,
        //            "ActualNumberOfApprovals": 0,
        //            "Amount": 85,
        //            "PONumber": "",
        //            "AcctTermID": 0,
        //            "AcctTerm": "",
        //            "PaymentTypeID": -5,
        //            "ManualCheckNumber": 0,
        //            "ManualPaymentDate": "2000-01-01T00:00:00",
        //            "CombinePayments": false,
        //            "PaymentGLAccountID": 5760,
        //            "VendorNotes": "",
        //            "InvoiceDate": "2018-11-14T00:00:00",
        //            "DueDate": "2018-11-14T00:00:00",
        //            "Received": false,
        //            "ReceivedDate": "1999-12-31T00:00:00",
        //            "Validated": false,
        //            "ValidatedDate": "1999-12-31T00:00:00",
        //            "OnHold": false,
        //            "OnHoldDate": "1999-12-31T00:00:00",
        //            "APApproved": false,
        //            "APApprovedDate": "1999-12-31T00:00:00",
        //            "MgrApproved": false,
        //            "MgrApprovedDate": "1999-12-31T00:00:00",
        //            "BoardApproved": false,
        //            "BoardApprovedDate": "1999-12-31T00:00:00",
        //            "ReadyToPay": false,
        //            "ReadyToPayDate": "2018-11-15T00:00:00",
        //            "Rejected": false,
        //            "RejectedDate": "1999-12-31T00:00:00",
        //            "RejectedBy": -1,
        //            "RejectedByName": "Board Member",
        //            "RejectedReason": "",
        //            "APPosted": false,
        //            "PostingDate": "2000-01-01T00:00:00",
        //            "Voided": false,
        //            "VoidDate": "2000-01-01T00:00:00",
        //            "VoidGLTransactionID": 0,
        //            "ChangeInvoiceID": 0,
        //            "Refund": false,
        //            "Recurring": false,
        //            "UsePrevAmounts": false,
        //            "RecInvCategoryID": 0,
        //            "SchFrequency": 0,
        //            "SchStartDate": "2000-01-01T00:00:00",
        //            "SchEndDate": "2000-01-01T00:00:00",
        //            "RecurringDescription": "",
        //            "PaymentCCID": 0,
        //            "InvoiceStatus": 13,
        //            "AmountPaid": 85,
        //            "RemainingBalance": 0,
        //            "RequiredNumberOfApprovers": 1,
        //            "IsDeleted": false,
        //            "DateCreated": "2000-01-01T00:00:00",
        //            "LastModified": "2000-01-01T00:00:00",
        //            "APAccountID": 0,
        //            "PayeeID": 1669,
        //            "PayeeType": 14,
        //            "PayeeName": "Default Test",
        //            "Note": "",
        //            "LineItems": [],
        //            "Links": [
        //                {
        //                    "rel": "Line Items",
        //                    "href": "/invoice/6564/lineitems"
        //                },
        //                {
        //                    "rel": "Payments",
        //                    "href": "/invoice/6564/payments"
        //                },
        //                {
        //                    "rel": "Notes",
        //                    "href": "/invoice/6564/notes"
        //                },
        //                {
        //                    "rel": "Documents",
        //                    "href": "/invoice/6564/documents"
        //                }
        //            ]
        //        }


        //        var body = {
        //            PaymentCCID: caliberinvoice.PaymentCCID,
        //            DueDate: caliberinvoice.DueDate,
        //            InvoiceDate: caliberinvoice.InvoiceDate,
        //            AcctTermID: caliberinvoice.AcctTermID,
        //            PONumber: caliberinvoice.PONumber,
        //            Amount: caliberinvoice.Amount,
        //            InvoiceNumber: caliberinvoice.InvoiceNumber,
        //            ClientID: caliberinvoice.ClientID,
        //            InvoiceID: caliberinvoice.InvoiceID,
        //            PayeeID: caliberinvoice.PayeeID,
        //            state: 'Open',
        //            LineItems: [
        //                {
        //                    CostCenterID: 23,
        //                    Amount: 12,
        //                    ExpenseGLAccountID: 8812,
        //                    Description: 'sdfds',
        //                    VendorCredit: false
        //                }
        //            ]
        //        };

        //        var msg = {
        //            body: body
        //        };


        //        const authResult = await upsertInvoiceCaliber.process(msg, cfg);
        //        expect(authResult).to.be.true;
        //    });


        //});


    });
});


//describe('Schema Test', function GetEntryTest() {
//    const credential1 = {
//        customer_name: 'Test Inc',
//        apiKey_cal: 'MTUAT01',
//        username_cal: 'mtconnect@mineraltree.com',
//        password_cal: 'System01##',
//        endPointURL_cal: 'https://asp.calibersoftware.com/capi2_APISandbox',
//        username_mt: 'hannah.kim+uat+api@mineraltree.com',
//        password_mt: 'testRun#1',
//        endPointURL_mt: 'https://test-f-mt.mineraltree.net',
//        companyId_mt: 'a630ca06-7c88-49f5-846b-d8011c8ceb70'
//    };

//    describe('Verify Schema Tests', function verifySchema() {
//        it('verify Credential Schema', async function CorrectSchema() {
//            const result = schema.verifyCredentialSchema.validate({
//                username: 'brunoluiz',
//                rating: 5,
//                email: 'contact@brunoluiz.net',
//                password: 'brunoluiz'
//            });

//            expect(!result.error).to.be.true;
//        });


//        it('verify Search Schema', async function CorrectSchema() {
//            const result = schema.searchSchema.validate({
//                view: 'brunoluiz',
//                rating: 5,
//                count: 1,
//                password: 'brunoluiz'
//            });
//            if (result.error) {
//                console.log(result.error.details);
//            } else {
//                console.log(result);

//            }

//            expect(!result.error).to.be.true;
//        });
//    });

//});



/**
 * rpc.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.lnd);
  }
}(this, function(expect, lnd) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new lnd.LnrpcSendCoinsRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LnrpcSendCoinsRequest', function() {
    it('should create an instance of LnrpcSendCoinsRequest', function() {
      // uncomment below and update the code to test LnrpcSendCoinsRequest
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be.a(lnd.LnrpcSendCoinsRequest);
    });

    it('should have the property addr (base name: "addr")', function() {
      // uncomment below and update the code to test the property addr
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property targetConf (base name: "target_conf")', function() {
      // uncomment below and update the code to test the property targetConf
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property satPerVbyte (base name: "sat_per_vbyte")', function() {
      // uncomment below and update the code to test the property satPerVbyte
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property satPerByte (base name: "sat_per_byte")', function() {
      // uncomment below and update the code to test the property satPerByte
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendAll (base name: "send_all")', function() {
      // uncomment below and update the code to test the property sendAll
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property minConfs (base name: "min_confs")', function() {
      // uncomment below and update the code to test the property minConfs
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

    it('should have the property spendUnconfirmed (base name: "spend_unconfirmed")', function() {
      // uncomment below and update the code to test the property spendUnconfirmed
      //var instance = new lnd.LnrpcSendCoinsRequest();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new lnd.LnrpcPayReq();
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

  describe('LnrpcPayReq', function() {
    it('should create an instance of LnrpcPayReq', function() {
      // uncomment below and update the code to test LnrpcPayReq
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be.a(lnd.LnrpcPayReq);
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property paymentHash (base name: "payment_hash")', function() {
      // uncomment below and update the code to test the property paymentHash
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property numSatoshis (base name: "num_satoshis")', function() {
      // uncomment below and update the code to test the property numSatoshis
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property expiry (base name: "expiry")', function() {
      // uncomment below and update the code to test the property expiry
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property descriptionHash (base name: "description_hash")', function() {
      // uncomment below and update the code to test the property descriptionHash
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property fallbackAddr (base name: "fallback_addr")', function() {
      // uncomment below and update the code to test the property fallbackAddr
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property cltvExpiry (base name: "cltv_expiry")', function() {
      // uncomment below and update the code to test the property cltvExpiry
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property routeHints (base name: "route_hints")', function() {
      // uncomment below and update the code to test the property routeHints
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property paymentAddr (base name: "payment_addr")', function() {
      // uncomment below and update the code to test the property paymentAddr
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property numMsat (base name: "num_msat")', function() {
      // uncomment below and update the code to test the property numMsat
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new lnd.LnrpcPayReq();
      //expect(instance).to.be();
    });

  });

}));

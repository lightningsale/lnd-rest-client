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
    instance = new lnd.LnrpcUtxo();
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

  describe('LnrpcUtxo', function() {
    it('should create an instance of LnrpcUtxo', function() {
      // uncomment below and update the code to test LnrpcUtxo
      //var instance = new lnd.LnrpcUtxo();
      //expect(instance).to.be.a(lnd.LnrpcUtxo);
    });

    it('should have the property addressType (base name: "address_type")', function() {
      // uncomment below and update the code to test the property addressType
      //var instance = new lnd.LnrpcUtxo();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new lnd.LnrpcUtxo();
      //expect(instance).to.be();
    });

    it('should have the property amountSat (base name: "amount_sat")', function() {
      // uncomment below and update the code to test the property amountSat
      //var instance = new lnd.LnrpcUtxo();
      //expect(instance).to.be();
    });

    it('should have the property pkScript (base name: "pk_script")', function() {
      // uncomment below and update the code to test the property pkScript
      //var instance = new lnd.LnrpcUtxo();
      //expect(instance).to.be();
    });

    it('should have the property outpoint (base name: "outpoint")', function() {
      // uncomment below and update the code to test the property outpoint
      //var instance = new lnd.LnrpcUtxo();
      //expect(instance).to.be();
    });

    it('should have the property confirmations (base name: "confirmations")', function() {
      // uncomment below and update the code to test the property confirmations
      //var instance = new lnd.LnrpcUtxo();
      //expect(instance).to.be();
    });

  });

}));

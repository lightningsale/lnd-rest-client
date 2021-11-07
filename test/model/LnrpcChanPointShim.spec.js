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
    instance = new lnd.LnrpcChanPointShim();
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

  describe('LnrpcChanPointShim', function() {
    it('should create an instance of LnrpcChanPointShim', function() {
      // uncomment below and update the code to test LnrpcChanPointShim
      //var instance = new lnd.LnrpcChanPointShim();
      //expect(instance).to.be.a(lnd.LnrpcChanPointShim);
    });

    it('should have the property amt (base name: "amt")', function() {
      // uncomment below and update the code to test the property amt
      //var instance = new lnd.LnrpcChanPointShim();
      //expect(instance).to.be();
    });

    it('should have the property chanPoint (base name: "chan_point")', function() {
      // uncomment below and update the code to test the property chanPoint
      //var instance = new lnd.LnrpcChanPointShim();
      //expect(instance).to.be();
    });

    it('should have the property localKey (base name: "local_key")', function() {
      // uncomment below and update the code to test the property localKey
      //var instance = new lnd.LnrpcChanPointShim();
      //expect(instance).to.be();
    });

    it('should have the property remoteKey (base name: "remote_key")', function() {
      // uncomment below and update the code to test the property remoteKey
      //var instance = new lnd.LnrpcChanPointShim();
      //expect(instance).to.be();
    });

    it('should have the property pendingChanId (base name: "pending_chan_id")', function() {
      // uncomment below and update the code to test the property pendingChanId
      //var instance = new lnd.LnrpcChanPointShim();
      //expect(instance).to.be();
    });

    it('should have the property thawHeight (base name: "thaw_height")', function() {
      // uncomment below and update the code to test the property thawHeight
      //var instance = new lnd.LnrpcChanPointShim();
      //expect(instance).to.be();
    });

  });

}));

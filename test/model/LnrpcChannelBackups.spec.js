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
    instance = new lnd.LnrpcChannelBackups();
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

  describe('LnrpcChannelBackups', function() {
    it('should create an instance of LnrpcChannelBackups', function() {
      // uncomment below and update the code to test LnrpcChannelBackups
      //var instance = new lnd.LnrpcChannelBackups();
      //expect(instance).to.be.a(lnd.LnrpcChannelBackups);
    });

    it('should have the property chanBackups (base name: "chan_backups")', function() {
      // uncomment below and update the code to test the property chanBackups
      //var instance = new lnd.LnrpcChannelBackups();
      //expect(instance).to.be();
    });

  });

}));

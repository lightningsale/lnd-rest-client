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
    instance = new lnd.PendingChannelsResponseCommitments();
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

  describe('PendingChannelsResponseCommitments', function() {
    it('should create an instance of PendingChannelsResponseCommitments', function() {
      // uncomment below and update the code to test PendingChannelsResponseCommitments
      //var instance = new lnd.PendingChannelsResponseCommitments();
      //expect(instance).to.be.a(lnd.PendingChannelsResponseCommitments);
    });

    it('should have the property localTxid (base name: "local_txid")', function() {
      // uncomment below and update the code to test the property localTxid
      //var instance = new lnd.PendingChannelsResponseCommitments();
      //expect(instance).to.be();
    });

    it('should have the property remoteTxid (base name: "remote_txid")', function() {
      // uncomment below and update the code to test the property remoteTxid
      //var instance = new lnd.PendingChannelsResponseCommitments();
      //expect(instance).to.be();
    });

    it('should have the property remotePendingTxid (base name: "remote_pending_txid")', function() {
      // uncomment below and update the code to test the property remotePendingTxid
      //var instance = new lnd.PendingChannelsResponseCommitments();
      //expect(instance).to.be();
    });

    it('should have the property localCommitFeeSat (base name: "local_commit_fee_sat")', function() {
      // uncomment below and update the code to test the property localCommitFeeSat
      //var instance = new lnd.PendingChannelsResponseCommitments();
      //expect(instance).to.be();
    });

    it('should have the property remoteCommitFeeSat (base name: "remote_commit_fee_sat")', function() {
      // uncomment below and update the code to test the property remoteCommitFeeSat
      //var instance = new lnd.PendingChannelsResponseCommitments();
      //expect(instance).to.be();
    });

    it('should have the property remotePendingCommitFeeSat (base name: "remote_pending_commit_fee_sat")', function() {
      // uncomment below and update the code to test the property remotePendingCommitFeeSat
      //var instance = new lnd.PendingChannelsResponseCommitments();
      //expect(instance).to.be();
    });

  });

}));
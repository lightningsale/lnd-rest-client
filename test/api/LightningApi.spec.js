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
    instance = new lnd.LightningApi();
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

  describe('LightningApi', function() {
    describe('abandonChannel', function() {
      it('should call abandonChannel successfully', function(done) {
        //uncomment below and update the code to test abandonChannel
        //instance.abandonChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInvoice', function() {
      it('should call addInvoice successfully', function(done) {
        //uncomment below and update the code to test addInvoice
        //instance.addInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bakeMacaroon', function() {
      it('should call bakeMacaroon successfully', function(done) {
        //uncomment below and update the code to test bakeMacaroon
        //instance.bakeMacaroon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('channelAcceptor', function() {
      it('should call channelAcceptor successfully', function(done) {
        //uncomment below and update the code to test channelAcceptor
        //instance.channelAcceptor(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('channelBalance', function() {
      it('should call channelBalance successfully', function(done) {
        //uncomment below and update the code to test channelBalance
        //instance.channelBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('closeChannel', function() {
      it('should call closeChannel successfully', function(done) {
        //uncomment below and update the code to test closeChannel
        //instance.closeChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('closedChannels', function() {
      it('should call closedChannels successfully', function(done) {
        //uncomment below and update the code to test closedChannels
        //instance.closedChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('connectPeer', function() {
      it('should call connectPeer successfully', function(done) {
        //uncomment below and update the code to test connectPeer
        //instance.connectPeer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('debugLevel', function() {
      it('should call debugLevel successfully', function(done) {
        //uncomment below and update the code to test debugLevel
        //instance.debugLevel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('decodePayReq', function() {
      it('should call decodePayReq successfully', function(done) {
        //uncomment below and update the code to test decodePayReq
        //instance.decodePayReq(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAllPayments', function() {
      it('should call deleteAllPayments successfully', function(done) {
        //uncomment below and update the code to test deleteAllPayments
        //instance.deleteAllPayments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMacaroonID', function() {
      it('should call deleteMacaroonID successfully', function(done) {
        //uncomment below and update the code to test deleteMacaroonID
        //instance.deleteMacaroonID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('describeGraph', function() {
      it('should call describeGraph successfully', function(done) {
        //uncomment below and update the code to test describeGraph
        //instance.describeGraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('disconnectPeer', function() {
      it('should call disconnectPeer successfully', function(done) {
        //uncomment below and update the code to test disconnectPeer
        //instance.disconnectPeer(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('estimateFee', function() {
      it('should call estimateFee successfully', function(done) {
        //uncomment below and update the code to test estimateFee
        //instance.estimateFee(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportAllChannelBackups', function() {
      it('should call exportAllChannelBackups successfully', function(done) {
        //uncomment below and update the code to test exportAllChannelBackups
        //instance.exportAllChannelBackups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('exportChannelBackup', function() {
      it('should call exportChannelBackup successfully', function(done) {
        //uncomment below and update the code to test exportChannelBackup
        //instance.exportChannelBackup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('feeReport', function() {
      it('should call feeReport successfully', function(done) {
        //uncomment below and update the code to test feeReport
        //instance.feeReport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('forwardingHistory', function() {
      it('should call forwardingHistory successfully', function(done) {
        //uncomment below and update the code to test forwardingHistory
        //instance.forwardingHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fundingStateStep', function() {
      it('should call fundingStateStep successfully', function(done) {
        //uncomment below and update the code to test fundingStateStep
        //instance.fundingStateStep(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getChanInfo', function() {
      it('should call getChanInfo successfully', function(done) {
        //uncomment below and update the code to test getChanInfo
        //instance.getChanInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInfo', function() {
      it('should call getInfo successfully', function(done) {
        //uncomment below and update the code to test getInfo
        //instance.getInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkInfo', function() {
      it('should call getNetworkInfo successfully', function(done) {
        //uncomment below and update the code to test getNetworkInfo
        //instance.getNetworkInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeInfo', function() {
      it('should call getNodeInfo successfully', function(done) {
        //uncomment below and update the code to test getNodeInfo
        //instance.getNodeInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeMetrics', function() {
      it('should call getNodeMetrics successfully', function(done) {
        //uncomment below and update the code to test getNodeMetrics
        //instance.getNodeMetrics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRecoveryInfo', function() {
      it('should call getRecoveryInfo successfully', function(done) {
        //uncomment below and update the code to test getRecoveryInfo
        //instance.getRecoveryInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactions', function() {
      it('should call getTransactions successfully', function(done) {
        //uncomment below and update the code to test getTransactions
        //instance.getTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listChannels', function() {
      it('should call listChannels successfully', function(done) {
        //uncomment below and update the code to test listChannels
        //instance.listChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listInvoices', function() {
      it('should call listInvoices successfully', function(done) {
        //uncomment below and update the code to test listInvoices
        //instance.listInvoices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMacaroonIDs', function() {
      it('should call listMacaroonIDs successfully', function(done) {
        //uncomment below and update the code to test listMacaroonIDs
        //instance.listMacaroonIDs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPayments', function() {
      it('should call listPayments successfully', function(done) {
        //uncomment below and update the code to test listPayments
        //instance.listPayments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPeers', function() {
      it('should call listPeers successfully', function(done) {
        //uncomment below and update the code to test listPeers
        //instance.listPeers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPermissions', function() {
      it('should call listPermissions successfully', function(done) {
        //uncomment below and update the code to test listPermissions
        //instance.listPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listUnspent', function() {
      it('should call listUnspent successfully', function(done) {
        //uncomment below and update the code to test listUnspent
        //instance.listUnspent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lookupInvoice', function() {
      it('should call lookupInvoice successfully', function(done) {
        //uncomment below and update the code to test lookupInvoice
        //instance.lookupInvoice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('newAddress', function() {
      it('should call newAddress successfully', function(done) {
        //uncomment below and update the code to test newAddress
        //instance.newAddress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('openChannel', function() {
      it('should call openChannel successfully', function(done) {
        //uncomment below and update the code to test openChannel
        //instance.openChannel(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('openChannelSync', function() {
      it('should call openChannelSync successfully', function(done) {
        //uncomment below and update the code to test openChannelSync
        //instance.openChannelSync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pendingChannels', function() {
      it('should call pendingChannels successfully', function(done) {
        //uncomment below and update the code to test pendingChannels
        //instance.pendingChannels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryRoutes', function() {
      it('should call queryRoutes successfully', function(done) {
        //uncomment below and update the code to test queryRoutes
        //instance.queryRoutes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('restoreChannelBackups', function() {
      it('should call restoreChannelBackups successfully', function(done) {
        //uncomment below and update the code to test restoreChannelBackups
        //instance.restoreChannelBackups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendCoins', function() {
      it('should call sendCoins successfully', function(done) {
        //uncomment below and update the code to test sendCoins
        //instance.sendCoins(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendMany', function() {
      it('should call sendMany successfully', function(done) {
        //uncomment below and update the code to test sendMany
        //instance.sendMany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendPayment', function() {
      it('should call sendPayment successfully', function(done) {
        //uncomment below and update the code to test sendPayment
        //instance.sendPayment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendPaymentSync', function() {
      it('should call sendPaymentSync successfully', function(done) {
        //uncomment below and update the code to test sendPaymentSync
        //instance.sendPaymentSync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendToRouteSync', function() {
      it('should call sendToRouteSync successfully', function(done) {
        //uncomment below and update the code to test sendToRouteSync
        //instance.sendToRouteSync(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signMessage', function() {
      it('should call signMessage successfully', function(done) {
        //uncomment below and update the code to test signMessage
        //instance.signMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('stopDaemon', function() {
      it('should call stopDaemon successfully', function(done) {
        //uncomment below and update the code to test stopDaemon
        //instance.stopDaemon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeChannelBackups', function() {
      it('should call subscribeChannelBackups successfully', function(done) {
        //uncomment below and update the code to test subscribeChannelBackups
        //instance.subscribeChannelBackups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeChannelEvents', function() {
      it('should call subscribeChannelEvents successfully', function(done) {
        //uncomment below and update the code to test subscribeChannelEvents
        //instance.subscribeChannelEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeChannelGraph', function() {
      it('should call subscribeChannelGraph successfully', function(done) {
        //uncomment below and update the code to test subscribeChannelGraph
        //instance.subscribeChannelGraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeInvoices', function() {
      it('should call subscribeInvoices successfully', function(done) {
        //uncomment below and update the code to test subscribeInvoices
        //instance.subscribeInvoices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribePeerEvents', function() {
      it('should call subscribePeerEvents successfully', function(done) {
        //uncomment below and update the code to test subscribePeerEvents
        //instance.subscribePeerEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeTransactions', function() {
      it('should call subscribeTransactions successfully', function(done) {
        //uncomment below and update the code to test subscribeTransactions
        //instance.subscribeTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateChannelPolicy', function() {
      it('should call updateChannelPolicy successfully', function(done) {
        //uncomment below and update the code to test updateChannelPolicy
        //instance.updateChannelPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyChanBackup', function() {
      it('should call verifyChanBackup successfully', function(done) {
        //uncomment below and update the code to test verifyChanBackup
        //instance.verifyChanBackup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('verifyMessage', function() {
      it('should call verifyMessage successfully', function(done) {
        //uncomment below and update the code to test verifyMessage
        //instance.verifyMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('walletBalance', function() {
      it('should call walletBalance successfully', function(done) {
        //uncomment below and update the code to test walletBalance
        //instance.walletBalance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

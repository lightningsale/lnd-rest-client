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

import ApiClient from '../ApiClient';
import LnrpcCommitmentType from './LnrpcCommitmentType';
import LnrpcInitiator from './LnrpcInitiator';

/**
 * The PendingChannelsResponsePendingChannel model module.
 * @module model/PendingChannelsResponsePendingChannel
 * @version version not set
 */
class PendingChannelsResponsePendingChannel {
    /**
     * Constructs a new <code>PendingChannelsResponsePendingChannel</code>.
     * @alias module:model/PendingChannelsResponsePendingChannel
     */
    constructor() { 
        PendingChannelsResponsePendingChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PendingChannelsResponsePendingChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingChannelsResponsePendingChannel} obj Optional instance to populate.
     * @return {module:model/PendingChannelsResponsePendingChannel} The populated <code>PendingChannelsResponsePendingChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PendingChannelsResponsePendingChannel();

            if (data.hasOwnProperty('remote_node_pub')) {
                obj['remote_node_pub'] = ApiClient.convertToType(data['remote_node_pub'], 'String');
            }
            if (data.hasOwnProperty('channel_point')) {
                obj['channel_point'] = ApiClient.convertToType(data['channel_point'], 'String');
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'String');
            }
            if (data.hasOwnProperty('local_balance')) {
                obj['local_balance'] = ApiClient.convertToType(data['local_balance'], 'String');
            }
            if (data.hasOwnProperty('remote_balance')) {
                obj['remote_balance'] = ApiClient.convertToType(data['remote_balance'], 'String');
            }
            if (data.hasOwnProperty('local_chan_reserve_sat')) {
                obj['local_chan_reserve_sat'] = ApiClient.convertToType(data['local_chan_reserve_sat'], 'String');
            }
            if (data.hasOwnProperty('remote_chan_reserve_sat')) {
                obj['remote_chan_reserve_sat'] = ApiClient.convertToType(data['remote_chan_reserve_sat'], 'String');
            }
            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = LnrpcInitiator.constructFromObject(data['initiator']);
            }
            if (data.hasOwnProperty('commitment_type')) {
                obj['commitment_type'] = LnrpcCommitmentType.constructFromObject(data['commitment_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} remote_node_pub
 */
PendingChannelsResponsePendingChannel.prototype['remote_node_pub'] = undefined;

/**
 * @member {String} channel_point
 */
PendingChannelsResponsePendingChannel.prototype['channel_point'] = undefined;

/**
 * @member {String} capacity
 */
PendingChannelsResponsePendingChannel.prototype['capacity'] = undefined;

/**
 * @member {String} local_balance
 */
PendingChannelsResponsePendingChannel.prototype['local_balance'] = undefined;

/**
 * @member {String} remote_balance
 */
PendingChannelsResponsePendingChannel.prototype['remote_balance'] = undefined;

/**
 * The minimum satoshis this node is required to reserve in its balance.
 * @member {String} local_chan_reserve_sat
 */
PendingChannelsResponsePendingChannel.prototype['local_chan_reserve_sat'] = undefined;

/**
 * The minimum satoshis the other node is required to reserve in its balance.
 * @member {String} remote_chan_reserve_sat
 */
PendingChannelsResponsePendingChannel.prototype['remote_chan_reserve_sat'] = undefined;

/**
 * @member {module:model/LnrpcInitiator} initiator
 */
PendingChannelsResponsePendingChannel.prototype['initiator'] = undefined;

/**
 * @member {module:model/LnrpcCommitmentType} commitment_type
 */
PendingChannelsResponsePendingChannel.prototype['commitment_type'] = undefined;






export default PendingChannelsResponsePendingChannel;


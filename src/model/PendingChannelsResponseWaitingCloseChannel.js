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
import PendingChannelsResponseCommitments from './PendingChannelsResponseCommitments';
import PendingChannelsResponsePendingChannel from './PendingChannelsResponsePendingChannel';

/**
 * The PendingChannelsResponseWaitingCloseChannel model module.
 * @module model/PendingChannelsResponseWaitingCloseChannel
 * @version version not set
 */
class PendingChannelsResponseWaitingCloseChannel {
    /**
     * Constructs a new <code>PendingChannelsResponseWaitingCloseChannel</code>.
     * @alias module:model/PendingChannelsResponseWaitingCloseChannel
     */
    constructor() { 
        PendingChannelsResponseWaitingCloseChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PendingChannelsResponseWaitingCloseChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PendingChannelsResponseWaitingCloseChannel} obj Optional instance to populate.
     * @return {module:model/PendingChannelsResponseWaitingCloseChannel} The populated <code>PendingChannelsResponseWaitingCloseChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PendingChannelsResponseWaitingCloseChannel();

            if (data.hasOwnProperty('channel')) {
                obj['channel'] = PendingChannelsResponsePendingChannel.constructFromObject(data['channel']);
            }
            if (data.hasOwnProperty('limbo_balance')) {
                obj['limbo_balance'] = ApiClient.convertToType(data['limbo_balance'], 'String');
            }
            if (data.hasOwnProperty('commitments')) {
                obj['commitments'] = PendingChannelsResponseCommitments.constructFromObject(data['commitments']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PendingChannelsResponsePendingChannel} channel
 */
PendingChannelsResponseWaitingCloseChannel.prototype['channel'] = undefined;

/**
 * @member {String} limbo_balance
 */
PendingChannelsResponseWaitingCloseChannel.prototype['limbo_balance'] = undefined;

/**
 * @member {module:model/PendingChannelsResponseCommitments} commitments
 */
PendingChannelsResponseWaitingCloseChannel.prototype['commitments'] = undefined;






export default PendingChannelsResponseWaitingCloseChannel;


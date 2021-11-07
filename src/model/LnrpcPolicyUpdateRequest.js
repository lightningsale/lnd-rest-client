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
import LnrpcChannelPoint from './LnrpcChannelPoint';

/**
 * The LnrpcPolicyUpdateRequest model module.
 * @module model/LnrpcPolicyUpdateRequest
 * @version version not set
 */
class LnrpcPolicyUpdateRequest {
    /**
     * Constructs a new <code>LnrpcPolicyUpdateRequest</code>.
     * @alias module:model/LnrpcPolicyUpdateRequest
     */
    constructor() { 
        LnrpcPolicyUpdateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcPolicyUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcPolicyUpdateRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcPolicyUpdateRequest} The populated <code>LnrpcPolicyUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcPolicyUpdateRequest();

            if (data.hasOwnProperty('global')) {
                obj['global'] = ApiClient.convertToType(data['global'], 'Boolean');
            }
            if (data.hasOwnProperty('chan_point')) {
                obj['chan_point'] = LnrpcChannelPoint.constructFromObject(data['chan_point']);
            }
            if (data.hasOwnProperty('base_fee_msat')) {
                obj['base_fee_msat'] = ApiClient.convertToType(data['base_fee_msat'], 'String');
            }
            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'Number');
            }
            if (data.hasOwnProperty('time_lock_delta')) {
                obj['time_lock_delta'] = ApiClient.convertToType(data['time_lock_delta'], 'Number');
            }
            if (data.hasOwnProperty('max_htlc_msat')) {
                obj['max_htlc_msat'] = ApiClient.convertToType(data['max_htlc_msat'], 'String');
            }
            if (data.hasOwnProperty('min_htlc_msat')) {
                obj['min_htlc_msat'] = ApiClient.convertToType(data['min_htlc_msat'], 'String');
            }
            if (data.hasOwnProperty('min_htlc_msat_specified')) {
                obj['min_htlc_msat_specified'] = ApiClient.convertToType(data['min_htlc_msat_specified'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * If set, then this update applies to all currently active channels.
 * @member {Boolean} global
 */
LnrpcPolicyUpdateRequest.prototype['global'] = undefined;

/**
 * @member {module:model/LnrpcChannelPoint} chan_point
 */
LnrpcPolicyUpdateRequest.prototype['chan_point'] = undefined;

/**
 * The base fee charged regardless of the number of milli-satoshis sent.
 * @member {String} base_fee_msat
 */
LnrpcPolicyUpdateRequest.prototype['base_fee_msat'] = undefined;

/**
 * The effective fee rate in milli-satoshis. The precision of this value goes up to 6 decimal places, so 1e-6.
 * @member {Number} fee_rate
 */
LnrpcPolicyUpdateRequest.prototype['fee_rate'] = undefined;

/**
 * The required timelock delta for HTLCs forwarded over the channel.
 * @member {Number} time_lock_delta
 */
LnrpcPolicyUpdateRequest.prototype['time_lock_delta'] = undefined;

/**
 * If set, the maximum HTLC size in milli-satoshis. If unset, the maximum HTLC will be unchanged.
 * @member {String} max_htlc_msat
 */
LnrpcPolicyUpdateRequest.prototype['max_htlc_msat'] = undefined;

/**
 * The minimum HTLC size in milli-satoshis. Only applied if min_htlc_msat_specified is true.
 * @member {String} min_htlc_msat
 */
LnrpcPolicyUpdateRequest.prototype['min_htlc_msat'] = undefined;

/**
 * If true, min_htlc_msat is applied.
 * @member {Boolean} min_htlc_msat_specified
 */
LnrpcPolicyUpdateRequest.prototype['min_htlc_msat_specified'] = undefined;






export default LnrpcPolicyUpdateRequest;


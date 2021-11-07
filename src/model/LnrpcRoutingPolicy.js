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

/**
 * The LnrpcRoutingPolicy model module.
 * @module model/LnrpcRoutingPolicy
 * @version version not set
 */
class LnrpcRoutingPolicy {
    /**
     * Constructs a new <code>LnrpcRoutingPolicy</code>.
     * @alias module:model/LnrpcRoutingPolicy
     */
    constructor() { 
        LnrpcRoutingPolicy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcRoutingPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcRoutingPolicy} obj Optional instance to populate.
     * @return {module:model/LnrpcRoutingPolicy} The populated <code>LnrpcRoutingPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcRoutingPolicy();

            if (data.hasOwnProperty('time_lock_delta')) {
                obj['time_lock_delta'] = ApiClient.convertToType(data['time_lock_delta'], 'Number');
            }
            if (data.hasOwnProperty('min_htlc')) {
                obj['min_htlc'] = ApiClient.convertToType(data['min_htlc'], 'String');
            }
            if (data.hasOwnProperty('fee_base_msat')) {
                obj['fee_base_msat'] = ApiClient.convertToType(data['fee_base_msat'], 'String');
            }
            if (data.hasOwnProperty('fee_rate_milli_msat')) {
                obj['fee_rate_milli_msat'] = ApiClient.convertToType(data['fee_rate_milli_msat'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('max_htlc_msat')) {
                obj['max_htlc_msat'] = ApiClient.convertToType(data['max_htlc_msat'], 'String');
            }
            if (data.hasOwnProperty('last_update')) {
                obj['last_update'] = ApiClient.convertToType(data['last_update'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} time_lock_delta
 */
LnrpcRoutingPolicy.prototype['time_lock_delta'] = undefined;

/**
 * @member {String} min_htlc
 */
LnrpcRoutingPolicy.prototype['min_htlc'] = undefined;

/**
 * @member {String} fee_base_msat
 */
LnrpcRoutingPolicy.prototype['fee_base_msat'] = undefined;

/**
 * @member {String} fee_rate_milli_msat
 */
LnrpcRoutingPolicy.prototype['fee_rate_milli_msat'] = undefined;

/**
 * @member {Boolean} disabled
 */
LnrpcRoutingPolicy.prototype['disabled'] = undefined;

/**
 * @member {String} max_htlc_msat
 */
LnrpcRoutingPolicy.prototype['max_htlc_msat'] = undefined;

/**
 * @member {Number} last_update
 */
LnrpcRoutingPolicy.prototype['last_update'] = undefined;






export default LnrpcRoutingPolicy;

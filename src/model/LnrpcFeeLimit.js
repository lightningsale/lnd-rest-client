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
 * The LnrpcFeeLimit model module.
 * @module model/LnrpcFeeLimit
 * @version version not set
 */
class LnrpcFeeLimit {
    /**
     * Constructs a new <code>LnrpcFeeLimit</code>.
     * @alias module:model/LnrpcFeeLimit
     */
    constructor() { 
        LnrpcFeeLimit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcFeeLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFeeLimit} obj Optional instance to populate.
     * @return {module:model/LnrpcFeeLimit} The populated <code>LnrpcFeeLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcFeeLimit();

            if (data.hasOwnProperty('fixed')) {
                obj['fixed'] = ApiClient.convertToType(data['fixed'], 'String');
            }
            if (data.hasOwnProperty('fixed_msat')) {
                obj['fixed_msat'] = ApiClient.convertToType(data['fixed_msat'], 'String');
            }
            if (data.hasOwnProperty('percent')) {
                obj['percent'] = ApiClient.convertToType(data['percent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The fee limit expressed as a fixed amount of satoshis.  The fields fixed and fixed_msat are mutually exclusive.
 * @member {String} fixed
 */
LnrpcFeeLimit.prototype['fixed'] = undefined;

/**
 * The fee limit expressed as a fixed amount of millisatoshis.  The fields fixed and fixed_msat are mutually exclusive.
 * @member {String} fixed_msat
 */
LnrpcFeeLimit.prototype['fixed_msat'] = undefined;

/**
 * The fee limit expressed as a percentage of the payment amount.
 * @member {String} percent
 */
LnrpcFeeLimit.prototype['percent'] = undefined;






export default LnrpcFeeLimit;

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
 * The LnrpcEstimateFeeResponse model module.
 * @module model/LnrpcEstimateFeeResponse
 * @version version not set
 */
class LnrpcEstimateFeeResponse {
    /**
     * Constructs a new <code>LnrpcEstimateFeeResponse</code>.
     * @alias module:model/LnrpcEstimateFeeResponse
     */
    constructor() { 
        LnrpcEstimateFeeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcEstimateFeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcEstimateFeeResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcEstimateFeeResponse} The populated <code>LnrpcEstimateFeeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcEstimateFeeResponse();

            if (data.hasOwnProperty('fee_sat')) {
                obj['fee_sat'] = ApiClient.convertToType(data['fee_sat'], 'String');
            }
            if (data.hasOwnProperty('feerate_sat_per_byte')) {
                obj['feerate_sat_per_byte'] = ApiClient.convertToType(data['feerate_sat_per_byte'], 'String');
            }
            if (data.hasOwnProperty('sat_per_vbyte')) {
                obj['sat_per_vbyte'] = ApiClient.convertToType(data['sat_per_vbyte'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The total fee in satoshis.
 * @member {String} fee_sat
 */
LnrpcEstimateFeeResponse.prototype['fee_sat'] = undefined;

/**
 * Deprecated, use sat_per_vbyte. The fee rate in satoshi/vbyte.
 * @member {String} feerate_sat_per_byte
 */
LnrpcEstimateFeeResponse.prototype['feerate_sat_per_byte'] = undefined;

/**
 * The fee rate in satoshi/vbyte.
 * @member {String} sat_per_vbyte
 */
LnrpcEstimateFeeResponse.prototype['sat_per_vbyte'] = undefined;






export default LnrpcEstimateFeeResponse;


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
 * The LnrpcChannelFeeReport model module.
 * @module model/LnrpcChannelFeeReport
 * @version version not set
 */
class LnrpcChannelFeeReport {
    /**
     * Constructs a new <code>LnrpcChannelFeeReport</code>.
     * @alias module:model/LnrpcChannelFeeReport
     */
    constructor() { 
        LnrpcChannelFeeReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcChannelFeeReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelFeeReport} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelFeeReport} The populated <code>LnrpcChannelFeeReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcChannelFeeReport();

            if (data.hasOwnProperty('chan_id')) {
                obj['chan_id'] = ApiClient.convertToType(data['chan_id'], 'String');
            }
            if (data.hasOwnProperty('channel_point')) {
                obj['channel_point'] = ApiClient.convertToType(data['channel_point'], 'String');
            }
            if (data.hasOwnProperty('base_fee_msat')) {
                obj['base_fee_msat'] = ApiClient.convertToType(data['base_fee_msat'], 'String');
            }
            if (data.hasOwnProperty('fee_per_mil')) {
                obj['fee_per_mil'] = ApiClient.convertToType(data['fee_per_mil'], 'String');
            }
            if (data.hasOwnProperty('fee_rate')) {
                obj['fee_rate'] = ApiClient.convertToType(data['fee_rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The short channel id that this fee report belongs to.
 * @member {String} chan_id
 */
LnrpcChannelFeeReport.prototype['chan_id'] = undefined;

/**
 * The channel that this fee report belongs to.
 * @member {String} channel_point
 */
LnrpcChannelFeeReport.prototype['channel_point'] = undefined;

/**
 * The base fee charged regardless of the number of milli-satoshis sent.
 * @member {String} base_fee_msat
 */
LnrpcChannelFeeReport.prototype['base_fee_msat'] = undefined;

/**
 * The amount charged per milli-satoshis transferred expressed in millionths of a satoshi.
 * @member {String} fee_per_mil
 */
LnrpcChannelFeeReport.prototype['fee_per_mil'] = undefined;

/**
 * The effective fee rate in milli-satoshis. Computed by dividing the fee_per_mil value by 1 million.
 * @member {Number} fee_rate
 */
LnrpcChannelFeeReport.prototype['fee_rate'] = undefined;






export default LnrpcChannelFeeReport;


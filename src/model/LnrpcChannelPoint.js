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
 * The LnrpcChannelPoint model module.
 * @module model/LnrpcChannelPoint
 * @version version not set
 */
class LnrpcChannelPoint {
    /**
     * Constructs a new <code>LnrpcChannelPoint</code>.
     * @alias module:model/LnrpcChannelPoint
     */
    constructor() { 
        LnrpcChannelPoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcChannelPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelPoint} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelPoint} The populated <code>LnrpcChannelPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcChannelPoint();

            if (data.hasOwnProperty('funding_txid_bytes')) {
                obj['funding_txid_bytes'] = ApiClient.convertToType(data['funding_txid_bytes'], 'Blob');
            }
            if (data.hasOwnProperty('funding_txid_str')) {
                obj['funding_txid_str'] = ApiClient.convertToType(data['funding_txid_str'], 'String');
            }
            if (data.hasOwnProperty('output_index')) {
                obj['output_index'] = ApiClient.convertToType(data['output_index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Txid of the funding transaction. When using REST, this field must be encoded as base64.
 * @member {Blob} funding_txid_bytes
 */
LnrpcChannelPoint.prototype['funding_txid_bytes'] = undefined;

/**
 * Hex-encoded string representing the byte-reversed hash of the funding transaction.
 * @member {String} funding_txid_str
 */
LnrpcChannelPoint.prototype['funding_txid_str'] = undefined;

/**
 * @member {Number} output_index
 */
LnrpcChannelPoint.prototype['output_index'] = undefined;






export default LnrpcChannelPoint;

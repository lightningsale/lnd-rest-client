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
 * The LnrpcSendCoinsResponse model module.
 * @module model/LnrpcSendCoinsResponse
 * @version version not set
 */
class LnrpcSendCoinsResponse {
    /**
     * Constructs a new <code>LnrpcSendCoinsResponse</code>.
     * @alias module:model/LnrpcSendCoinsResponse
     */
    constructor() { 
        LnrpcSendCoinsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcSendCoinsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcSendCoinsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcSendCoinsResponse} The populated <code>LnrpcSendCoinsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcSendCoinsResponse();

            if (data.hasOwnProperty('txid')) {
                obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} txid
 */
LnrpcSendCoinsResponse.prototype['txid'] = undefined;






export default LnrpcSendCoinsResponse;


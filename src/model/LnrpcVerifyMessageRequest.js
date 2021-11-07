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
 * The LnrpcVerifyMessageRequest model module.
 * @module model/LnrpcVerifyMessageRequest
 * @version version not set
 */
class LnrpcVerifyMessageRequest {
    /**
     * Constructs a new <code>LnrpcVerifyMessageRequest</code>.
     * @alias module:model/LnrpcVerifyMessageRequest
     */
    constructor() { 
        LnrpcVerifyMessageRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcVerifyMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcVerifyMessageRequest} obj Optional instance to populate.
     * @return {module:model/LnrpcVerifyMessageRequest} The populated <code>LnrpcVerifyMessageRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcVerifyMessageRequest();

            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'Blob');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The message over which the signature is to be verified. When using REST, this field must be encoded as base64.
 * @member {Blob} msg
 */
LnrpcVerifyMessageRequest.prototype['msg'] = undefined;

/**
 * @member {String} signature
 */
LnrpcVerifyMessageRequest.prototype['signature'] = undefined;






export default LnrpcVerifyMessageRequest;


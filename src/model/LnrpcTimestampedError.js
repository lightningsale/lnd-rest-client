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
 * The LnrpcTimestampedError model module.
 * @module model/LnrpcTimestampedError
 * @version version not set
 */
class LnrpcTimestampedError {
    /**
     * Constructs a new <code>LnrpcTimestampedError</code>.
     * @alias module:model/LnrpcTimestampedError
     */
    constructor() { 
        LnrpcTimestampedError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcTimestampedError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcTimestampedError} obj Optional instance to populate.
     * @return {module:model/LnrpcTimestampedError} The populated <code>LnrpcTimestampedError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcTimestampedError();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unix timestamp in seconds when the error occurred.
 * @member {String} timestamp
 */
LnrpcTimestampedError.prototype['timestamp'] = undefined;

/**
 * The string representation of the error sent by our peer.
 * @member {String} error
 */
LnrpcTimestampedError.prototype['error'] = undefined;






export default LnrpcTimestampedError;


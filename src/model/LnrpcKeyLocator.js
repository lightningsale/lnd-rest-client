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
 * The LnrpcKeyLocator model module.
 * @module model/LnrpcKeyLocator
 * @version version not set
 */
class LnrpcKeyLocator {
    /**
     * Constructs a new <code>LnrpcKeyLocator</code>.
     * @alias module:model/LnrpcKeyLocator
     */
    constructor() { 
        LnrpcKeyLocator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcKeyLocator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcKeyLocator} obj Optional instance to populate.
     * @return {module:model/LnrpcKeyLocator} The populated <code>LnrpcKeyLocator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcKeyLocator();

            if (data.hasOwnProperty('key_family')) {
                obj['key_family'] = ApiClient.convertToType(data['key_family'], 'Number');
            }
            if (data.hasOwnProperty('key_index')) {
                obj['key_index'] = ApiClient.convertToType(data['key_index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The family of key being identified.
 * @member {Number} key_family
 */
LnrpcKeyLocator.prototype['key_family'] = undefined;

/**
 * The precise index of the key being identified.
 * @member {Number} key_index
 */
LnrpcKeyLocator.prototype['key_index'] = undefined;






export default LnrpcKeyLocator;


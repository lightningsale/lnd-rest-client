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
 * The LnrpcFeature model module.
 * @module model/LnrpcFeature
 * @version version not set
 */
class LnrpcFeature {
    /**
     * Constructs a new <code>LnrpcFeature</code>.
     * @alias module:model/LnrpcFeature
     */
    constructor() { 
        LnrpcFeature.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcFeature</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFeature} obj Optional instance to populate.
     * @return {module:model/LnrpcFeature} The populated <code>LnrpcFeature</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcFeature();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_required')) {
                obj['is_required'] = ApiClient.convertToType(data['is_required'], 'Boolean');
            }
            if (data.hasOwnProperty('is_known')) {
                obj['is_known'] = ApiClient.convertToType(data['is_known'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
LnrpcFeature.prototype['name'] = undefined;

/**
 * @member {Boolean} is_required
 */
LnrpcFeature.prototype['is_required'] = undefined;

/**
 * @member {Boolean} is_known
 */
LnrpcFeature.prototype['is_known'] = undefined;






export default LnrpcFeature;


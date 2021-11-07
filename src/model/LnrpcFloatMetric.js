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
 * The LnrpcFloatMetric model module.
 * @module model/LnrpcFloatMetric
 * @version version not set
 */
class LnrpcFloatMetric {
    /**
     * Constructs a new <code>LnrpcFloatMetric</code>.
     * @alias module:model/LnrpcFloatMetric
     */
    constructor() { 
        LnrpcFloatMetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcFloatMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFloatMetric} obj Optional instance to populate.
     * @return {module:model/LnrpcFloatMetric} The populated <code>LnrpcFloatMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcFloatMetric();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('normalized_value')) {
                obj['normalized_value'] = ApiClient.convertToType(data['normalized_value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Arbitrary float value.
 * @member {Number} value
 */
LnrpcFloatMetric.prototype['value'] = undefined;

/**
 * The value normalized to [0,1] or [-1,1].
 * @member {Number} normalized_value
 */
LnrpcFloatMetric.prototype['normalized_value'] = undefined;






export default LnrpcFloatMetric;

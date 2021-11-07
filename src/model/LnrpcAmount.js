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
 * The LnrpcAmount model module.
 * @module model/LnrpcAmount
 * @version version not set
 */
class LnrpcAmount {
    /**
     * Constructs a new <code>LnrpcAmount</code>.
     * @alias module:model/LnrpcAmount
     */
    constructor() { 
        LnrpcAmount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcAmount} obj Optional instance to populate.
     * @return {module:model/LnrpcAmount} The populated <code>LnrpcAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcAmount();

            if (data.hasOwnProperty('sat')) {
                obj['sat'] = ApiClient.convertToType(data['sat'], 'String');
            }
            if (data.hasOwnProperty('msat')) {
                obj['msat'] = ApiClient.convertToType(data['msat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Value denominated in satoshis.
 * @member {String} sat
 */
LnrpcAmount.prototype['sat'] = undefined;

/**
 * Value denominated in milli-satoshis.
 * @member {String} msat
 */
LnrpcAmount.prototype['msat'] = undefined;






export default LnrpcAmount;

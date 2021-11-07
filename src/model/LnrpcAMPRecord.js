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
 * The LnrpcAMPRecord model module.
 * @module model/LnrpcAMPRecord
 * @version version not set
 */
class LnrpcAMPRecord {
    /**
     * Constructs a new <code>LnrpcAMPRecord</code>.
     * @alias module:model/LnrpcAMPRecord
     */
    constructor() { 
        LnrpcAMPRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcAMPRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcAMPRecord} obj Optional instance to populate.
     * @return {module:model/LnrpcAMPRecord} The populated <code>LnrpcAMPRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcAMPRecord();

            if (data.hasOwnProperty('root_share')) {
                obj['root_share'] = ApiClient.convertToType(data['root_share'], 'Blob');
            }
            if (data.hasOwnProperty('set_id')) {
                obj['set_id'] = ApiClient.convertToType(data['set_id'], 'Blob');
            }
            if (data.hasOwnProperty('child_index')) {
                obj['child_index'] = ApiClient.convertToType(data['child_index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Blob} root_share
 */
LnrpcAMPRecord.prototype['root_share'] = undefined;

/**
 * @member {Blob} set_id
 */
LnrpcAMPRecord.prototype['set_id'] = undefined;

/**
 * @member {Number} child_index
 */
LnrpcAMPRecord.prototype['child_index'] = undefined;






export default LnrpcAMPRecord;

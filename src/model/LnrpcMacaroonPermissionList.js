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
import LnrpcMacaroonPermission from './LnrpcMacaroonPermission';

/**
 * The LnrpcMacaroonPermissionList model module.
 * @module model/LnrpcMacaroonPermissionList
 * @version version not set
 */
class LnrpcMacaroonPermissionList {
    /**
     * Constructs a new <code>LnrpcMacaroonPermissionList</code>.
     * @alias module:model/LnrpcMacaroonPermissionList
     */
    constructor() { 
        LnrpcMacaroonPermissionList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcMacaroonPermissionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcMacaroonPermissionList} obj Optional instance to populate.
     * @return {module:model/LnrpcMacaroonPermissionList} The populated <code>LnrpcMacaroonPermissionList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcMacaroonPermissionList();

            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], [LnrpcMacaroonPermission]);
            }
        }
        return obj;
    }


}

/**
 * A list of macaroon permissions.
 * @member {Array.<module:model/LnrpcMacaroonPermission>} permissions
 */
LnrpcMacaroonPermissionList.prototype['permissions'] = undefined;






export default LnrpcMacaroonPermissionList;

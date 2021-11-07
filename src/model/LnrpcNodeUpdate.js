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
import LnrpcFeature from './LnrpcFeature';
import LnrpcNodeAddress from './LnrpcNodeAddress';

/**
 * The LnrpcNodeUpdate model module.
 * @module model/LnrpcNodeUpdate
 * @version version not set
 */
class LnrpcNodeUpdate {
    /**
     * Constructs a new <code>LnrpcNodeUpdate</code>.
     * @alias module:model/LnrpcNodeUpdate
     */
    constructor() { 
        LnrpcNodeUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcNodeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcNodeUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcNodeUpdate} The populated <code>LnrpcNodeUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcNodeUpdate();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('identity_key')) {
                obj['identity_key'] = ApiClient.convertToType(data['identity_key'], 'String');
            }
            if (data.hasOwnProperty('global_features')) {
                obj['global_features'] = ApiClient.convertToType(data['global_features'], 'Blob');
            }
            if (data.hasOwnProperty('alias')) {
                obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('node_addresses')) {
                obj['node_addresses'] = ApiClient.convertToType(data['node_addresses'], [LnrpcNodeAddress]);
            }
            if (data.hasOwnProperty('features')) {
                obj['features'] = ApiClient.convertToType(data['features'], {'String': LnrpcFeature});
            }
        }
        return obj;
    }


}

/**
 * Deprecated, use node_addresses.
 * @member {Array.<String>} addresses
 */
LnrpcNodeUpdate.prototype['addresses'] = undefined;

/**
 * @member {String} identity_key
 */
LnrpcNodeUpdate.prototype['identity_key'] = undefined;

/**
 * Deprecated, use features.
 * @member {Blob} global_features
 */
LnrpcNodeUpdate.prototype['global_features'] = undefined;

/**
 * @member {String} alias
 */
LnrpcNodeUpdate.prototype['alias'] = undefined;

/**
 * @member {String} color
 */
LnrpcNodeUpdate.prototype['color'] = undefined;

/**
 * @member {Array.<module:model/LnrpcNodeAddress>} node_addresses
 */
LnrpcNodeUpdate.prototype['node_addresses'] = undefined;

/**
 * Features that the node has advertised in the init message, node announcements and invoices.
 * @member {Object.<String, module:model/LnrpcFeature>} features
 */
LnrpcNodeUpdate.prototype['features'] = undefined;






export default LnrpcNodeUpdate;


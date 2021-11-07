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
import LnrpcChannel from './LnrpcChannel';

/**
 * The LnrpcListChannelsResponse model module.
 * @module model/LnrpcListChannelsResponse
 * @version version not set
 */
class LnrpcListChannelsResponse {
    /**
     * Constructs a new <code>LnrpcListChannelsResponse</code>.
     * @alias module:model/LnrpcListChannelsResponse
     */
    constructor() { 
        LnrpcListChannelsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcListChannelsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcListChannelsResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcListChannelsResponse} The populated <code>LnrpcListChannelsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcListChannelsResponse();

            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [LnrpcChannel]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/LnrpcChannel>} channels
 */
LnrpcListChannelsResponse.prototype['channels'] = undefined;






export default LnrpcListChannelsResponse;


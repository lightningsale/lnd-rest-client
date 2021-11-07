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
 * The LnrpcFundingShimCancel model module.
 * @module model/LnrpcFundingShimCancel
 * @version version not set
 */
class LnrpcFundingShimCancel {
    /**
     * Constructs a new <code>LnrpcFundingShimCancel</code>.
     * @alias module:model/LnrpcFundingShimCancel
     */
    constructor() { 
        LnrpcFundingShimCancel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcFundingShimCancel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcFundingShimCancel} obj Optional instance to populate.
     * @return {module:model/LnrpcFundingShimCancel} The populated <code>LnrpcFundingShimCancel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcFundingShimCancel();

            if (data.hasOwnProperty('pending_chan_id')) {
                obj['pending_chan_id'] = ApiClient.convertToType(data['pending_chan_id'], 'Blob');
            }
        }
        return obj;
    }


}

/**
 * The pending channel ID of the channel to cancel the funding shim for.
 * @member {Blob} pending_chan_id
 */
LnrpcFundingShimCancel.prototype['pending_chan_id'] = undefined;






export default LnrpcFundingShimCancel;


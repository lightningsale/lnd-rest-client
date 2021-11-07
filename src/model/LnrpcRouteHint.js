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
import LnrpcHopHint from './LnrpcHopHint';

/**
 * The LnrpcRouteHint model module.
 * @module model/LnrpcRouteHint
 * @version version not set
 */
class LnrpcRouteHint {
    /**
     * Constructs a new <code>LnrpcRouteHint</code>.
     * @alias module:model/LnrpcRouteHint
     */
    constructor() { 
        LnrpcRouteHint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcRouteHint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcRouteHint} obj Optional instance to populate.
     * @return {module:model/LnrpcRouteHint} The populated <code>LnrpcRouteHint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcRouteHint();

            if (data.hasOwnProperty('hop_hints')) {
                obj['hop_hints'] = ApiClient.convertToType(data['hop_hints'], [LnrpcHopHint]);
            }
        }
        return obj;
    }


}

/**
 * A list of hop hints that when chained together can assist in reaching a specific destination.
 * @member {Array.<module:model/LnrpcHopHint>} hop_hints
 */
LnrpcRouteHint.prototype['hop_hints'] = undefined;






export default LnrpcRouteHint;

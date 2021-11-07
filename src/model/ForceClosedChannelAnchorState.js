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
* Enum class ForceClosedChannelAnchorState.
* @enum {}
* @readonly
*/
export default class ForceClosedChannelAnchorState {
    
        /**
         * value: "LIMBO"
         * @const
         */
        "LIMBO" = "LIMBO";

    
        /**
         * value: "RECOVERED"
         * @const
         */
        "RECOVERED" = "RECOVERED";

    
        /**
         * value: "LOST"
         * @const
         */
        "LOST" = "LOST";

    

    /**
    * Returns a <code>ForceClosedChannelAnchorState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ForceClosedChannelAnchorState} The enum <code>ForceClosedChannelAnchorState</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}


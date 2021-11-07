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
* Enum class ChannelCloseSummaryClosureType.
* @enum {}
* @readonly
*/
export default class ChannelCloseSummaryClosureType {
    
        /**
         * value: "COOPERATIVE_CLOSE"
         * @const
         */
        "COOPERATIVE_CLOSE" = "COOPERATIVE_CLOSE";

    
        /**
         * value: "LOCAL_FORCE_CLOSE"
         * @const
         */
        "LOCAL_FORCE_CLOSE" = "LOCAL_FORCE_CLOSE";

    
        /**
         * value: "REMOTE_FORCE_CLOSE"
         * @const
         */
        "REMOTE_FORCE_CLOSE" = "REMOTE_FORCE_CLOSE";

    
        /**
         * value: "BREACH_CLOSE"
         * @const
         */
        "BREACH_CLOSE" = "BREACH_CLOSE";

    
        /**
         * value: "FUNDING_CANCELED"
         * @const
         */
        "FUNDING_CANCELED" = "FUNDING_CANCELED";

    
        /**
         * value: "ABANDONED"
         * @const
         */
        "ABANDONED" = "ABANDONED";

    

    /**
    * Returns a <code>ChannelCloseSummaryClosureType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ChannelCloseSummaryClosureType} The enum <code>ChannelCloseSummaryClosureType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

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
* Enum class LnrpcFeatureBit.
* @enum {}
* @readonly
*/
export default class LnrpcFeatureBit {
    
        /**
         * value: "DATALOSS_PROTECT_REQ"
         * @const
         */
        "DATALOSS_PROTECT_REQ" = "DATALOSS_PROTECT_REQ";

    
        /**
         * value: "DATALOSS_PROTECT_OPT"
         * @const
         */
        "DATALOSS_PROTECT_OPT" = "DATALOSS_PROTECT_OPT";

    
        /**
         * value: "INITIAL_ROUING_SYNC"
         * @const
         */
        "INITIAL_ROUING_SYNC" = "INITIAL_ROUING_SYNC";

    
        /**
         * value: "UPFRONT_SHUTDOWN_SCRIPT_REQ"
         * @const
         */
        "UPFRONT_SHUTDOWN_SCRIPT_REQ" = "UPFRONT_SHUTDOWN_SCRIPT_REQ";

    
        /**
         * value: "UPFRONT_SHUTDOWN_SCRIPT_OPT"
         * @const
         */
        "UPFRONT_SHUTDOWN_SCRIPT_OPT" = "UPFRONT_SHUTDOWN_SCRIPT_OPT";

    
        /**
         * value: "GOSSIP_QUERIES_REQ"
         * @const
         */
        "GOSSIP_QUERIES_REQ" = "GOSSIP_QUERIES_REQ";

    
        /**
         * value: "GOSSIP_QUERIES_OPT"
         * @const
         */
        "GOSSIP_QUERIES_OPT" = "GOSSIP_QUERIES_OPT";

    
        /**
         * value: "TLV_ONION_REQ"
         * @const
         */
        "TLV_ONION_REQ" = "TLV_ONION_REQ";

    
        /**
         * value: "TLV_ONION_OPT"
         * @const
         */
        "TLV_ONION_OPT" = "TLV_ONION_OPT";

    
        /**
         * value: "EXT_GOSSIP_QUERIES_REQ"
         * @const
         */
        "EXT_GOSSIP_QUERIES_REQ" = "EXT_GOSSIP_QUERIES_REQ";

    
        /**
         * value: "EXT_GOSSIP_QUERIES_OPT"
         * @const
         */
        "EXT_GOSSIP_QUERIES_OPT" = "EXT_GOSSIP_QUERIES_OPT";

    
        /**
         * value: "STATIC_REMOTE_KEY_REQ"
         * @const
         */
        "STATIC_REMOTE_KEY_REQ" = "STATIC_REMOTE_KEY_REQ";

    
        /**
         * value: "STATIC_REMOTE_KEY_OPT"
         * @const
         */
        "STATIC_REMOTE_KEY_OPT" = "STATIC_REMOTE_KEY_OPT";

    
        /**
         * value: "PAYMENT_ADDR_REQ"
         * @const
         */
        "PAYMENT_ADDR_REQ" = "PAYMENT_ADDR_REQ";

    
        /**
         * value: "PAYMENT_ADDR_OPT"
         * @const
         */
        "PAYMENT_ADDR_OPT" = "PAYMENT_ADDR_OPT";

    
        /**
         * value: "MPP_REQ"
         * @const
         */
        "MPP_REQ" = "MPP_REQ";

    
        /**
         * value: "MPP_OPT"
         * @const
         */
        "MPP_OPT" = "MPP_OPT";

    
        /**
         * value: "WUMBO_CHANNELS_REQ"
         * @const
         */
        "WUMBO_CHANNELS_REQ" = "WUMBO_CHANNELS_REQ";

    
        /**
         * value: "WUMBO_CHANNELS_OPT"
         * @const
         */
        "WUMBO_CHANNELS_OPT" = "WUMBO_CHANNELS_OPT";

    
        /**
         * value: "ANCHORS_REQ"
         * @const
         */
        "ANCHORS_REQ" = "ANCHORS_REQ";

    
        /**
         * value: "ANCHORS_OPT"
         * @const
         */
        "ANCHORS_OPT" = "ANCHORS_OPT";

    
        /**
         * value: "ANCHORS_ZERO_FEE_HTLC_REQ"
         * @const
         */
        "ANCHORS_ZERO_FEE_HTLC_REQ" = "ANCHORS_ZERO_FEE_HTLC_REQ";

    
        /**
         * value: "ANCHORS_ZERO_FEE_HTLC_OPT"
         * @const
         */
        "ANCHORS_ZERO_FEE_HTLC_OPT" = "ANCHORS_ZERO_FEE_HTLC_OPT";

    
        /**
         * value: "AMP_REQ"
         * @const
         */
        "AMP_REQ" = "AMP_REQ";

    
        /**
         * value: "AMP_OPT"
         * @const
         */
        "AMP_OPT" = "AMP_OPT";

    

    /**
    * Returns a <code>LnrpcFeatureBit</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/LnrpcFeatureBit} The enum <code>LnrpcFeatureBit</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

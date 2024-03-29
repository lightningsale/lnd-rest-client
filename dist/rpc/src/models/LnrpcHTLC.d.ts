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
 */
/**
 *
 * @export
 * @interface LnrpcHTLC
 */
export interface LnrpcHTLC {
    /**
     *
     * @type {boolean}
     * @memberof LnrpcHTLC
     */
    incoming?: boolean;
    /**
     *
     * @type {string}
     * @memberof LnrpcHTLC
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcHTLC
     */
    hashLock?: string;
    /**
     *
     * @type {number}
     * @memberof LnrpcHTLC
     */
    expirationHeight?: number;
    /**
     * Index identifying the htlc on the channel.
     * @type {string}
     * @memberof LnrpcHTLC
     */
    htlcIndex?: string;
    /**
     * If this HTLC is involved in a forwarding operation, this field indicates
     * the forwarding channel. For an outgoing htlc, it is the incoming channel.
     * For an incoming htlc, it is the outgoing channel. When the htlc
     * originates from this node or this node is the final destination,
     * forwarding_channel will be zero. The forwarding channel will also be zero
     * for htlcs that need to be forwarded but don't have a forwarding decision
     * persisted yet.
     * @type {string}
     * @memberof LnrpcHTLC
     */
    forwardingChannel?: string;
    /**
     * Index identifying the htlc on the forwarding channel.
     * @type {string}
     * @memberof LnrpcHTLC
     */
    forwardingHtlcIndex?: string;
}
export declare function LnrpcHTLCFromJSON(json: any): LnrpcHTLC;
export declare function LnrpcHTLCFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcHTLC;
export declare function LnrpcHTLCToJSON(value?: LnrpcHTLC | null): any;

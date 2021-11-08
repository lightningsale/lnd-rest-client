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
 * Details specific to AMP HTLCs.
 * @export
 * @interface LnrpcAMP
 */
export interface LnrpcAMP {
    /**
     * An n-of-n secret share of the root seed from which child payment hashes
     * and preimages are derived.
     * @type {string}
     * @memberof LnrpcAMP
     */
    rootShare?: string;
    /**
     * An identifier for the HTLC set that this HTLC belongs to.
     * @type {string}
     * @memberof LnrpcAMP
     */
    setId?: string;
    /**
     * A nonce used to randomize the child preimage and child hash from a given
     * root_share.
     * @type {number}
     * @memberof LnrpcAMP
     */
    childIndex?: number;
    /**
     * The payment hash of the AMP HTLC.
     * @type {string}
     * @memberof LnrpcAMP
     */
    hash?: string;
    /**
     * The preimage used to settle this AMP htlc. This field will only be
     * populated if the invoice is in InvoiceState_ACCEPTED or
     * InvoiceState_SETTLED.
     * @type {string}
     * @memberof LnrpcAMP
     */
    preimage?: string;
}
export declare function LnrpcAMPFromJSON(json: any): LnrpcAMP;
export declare function LnrpcAMPFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcAMP;
export declare function LnrpcAMPToJSON(value?: LnrpcAMP | null): any;

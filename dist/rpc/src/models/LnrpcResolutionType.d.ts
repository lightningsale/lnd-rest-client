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
 *  - ANCHOR: We resolved an anchor output.
 *  - INCOMING_HTLC: We are resolving an incoming htlc on chain. This if this htlc is
 * claimed, we swept the incoming htlc with the preimage. If it is timed
 * out, our peer swept the timeout path.
 *  - OUTGOING_HTLC: We are resolving an outgoing htlc on chain. If this htlc is claimed,
 * the remote party swept the htlc with the preimage. If it is timed out,
 * we swept it with the timeout path.
 *  - COMMIT: We force closed and need to sweep our time locked commitment output.
 * @export
 * @enum {string}
 */
export declare enum LnrpcResolutionType {
    TypeUnknown = "TYPE_UNKNOWN",
    Anchor = "ANCHOR",
    IncomingHtlc = "INCOMING_HTLC",
    OutgoingHtlc = "OUTGOING_HTLC",
    Commit = "COMMIT"
}
export declare function LnrpcResolutionTypeFromJSON(json: any): LnrpcResolutionType;
export declare function LnrpcResolutionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcResolutionType;
export declare function LnrpcResolutionTypeToJSON(value?: LnrpcResolutionType | null): any;

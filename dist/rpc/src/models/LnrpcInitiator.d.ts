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
 * @enum {string}
 */
export declare enum LnrpcInitiator {
    Unknown = "INITIATOR_UNKNOWN",
    Local = "INITIATOR_LOCAL",
    Remote = "INITIATOR_REMOTE",
    Both = "INITIATOR_BOTH"
}
export declare function LnrpcInitiatorFromJSON(json: any): LnrpcInitiator;
export declare function LnrpcInitiatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcInitiator;
export declare function LnrpcInitiatorToJSON(value?: LnrpcInitiator | null): any;
/* tslint:disable */
/* eslint-disable */
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
export enum LnrpcInitiator {
    Unknown = 'INITIATOR_UNKNOWN',
    Local = 'INITIATOR_LOCAL',
    Remote = 'INITIATOR_REMOTE',
    Both = 'INITIATOR_BOTH'
}

export function LnrpcInitiatorFromJSON(json: any): LnrpcInitiator {
    return LnrpcInitiatorFromJSONTyped(json, false);
}

export function LnrpcInitiatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcInitiator {
    return json as LnrpcInitiator;
}

export function LnrpcInitiatorToJSON(value?: LnrpcInitiator | null): any {
    return value as any;
}

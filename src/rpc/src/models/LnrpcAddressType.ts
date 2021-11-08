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
 * - `p2wkh`: Pay to witness key hash (`WITNESS_PUBKEY_HASH` = 0)
 * - `np2wkh`: Pay to nested witness key hash (`NESTED_PUBKEY_HASH` = 1)
 * @export
 * @enum {string}
 */
export enum LnrpcAddressType {
    WitnessPubkeyHash = 'WITNESS_PUBKEY_HASH',
    NestedPubkeyHash = 'NESTED_PUBKEY_HASH',
    UnusedWitnessPubkeyHash = 'UNUSED_WITNESS_PUBKEY_HASH',
    UnusedNestedPubkeyHash = 'UNUSED_NESTED_PUBKEY_HASH'
}

export function LnrpcAddressTypeFromJSON(json: any): LnrpcAddressType {
    return LnrpcAddressTypeFromJSONTyped(json, false);
}

export function LnrpcAddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcAddressType {
    return json as LnrpcAddressType;
}

export function LnrpcAddressTypeToJSON(value?: LnrpcAddressType | null): any {
    return value as any;
}


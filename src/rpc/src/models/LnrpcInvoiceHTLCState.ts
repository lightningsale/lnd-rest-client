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
export enum LnrpcInvoiceHTLCState {
    Accepted = 'ACCEPTED',
    Settled = 'SETTLED',
    Canceled = 'CANCELED'
}

export function LnrpcInvoiceHTLCStateFromJSON(json: any): LnrpcInvoiceHTLCState {
    return LnrpcInvoiceHTLCStateFromJSONTyped(json, false);
}

export function LnrpcInvoiceHTLCStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcInvoiceHTLCState {
    return json as LnrpcInvoiceHTLCState;
}

export function LnrpcInvoiceHTLCStateToJSON(value?: LnrpcInvoiceHTLCState | null): any {
    return value as any;
}


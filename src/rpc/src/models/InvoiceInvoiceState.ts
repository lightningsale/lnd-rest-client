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
export enum InvoiceInvoiceState {
    Open = 'OPEN',
    Settled = 'SETTLED',
    Canceled = 'CANCELED',
    Accepted = 'ACCEPTED'
}

export function InvoiceInvoiceStateFromJSON(json: any): InvoiceInvoiceState {
    return InvoiceInvoiceStateFromJSONTyped(json, false);
}

export function InvoiceInvoiceStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceInvoiceState {
    return json as InvoiceInvoiceState;
}

export function InvoiceInvoiceStateToJSON(value?: InvoiceInvoiceState | null): any {
    return value as any;
}


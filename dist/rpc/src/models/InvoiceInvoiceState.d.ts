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
export declare enum InvoiceInvoiceState {
    Open = "OPEN",
    Settled = "SETTLED",
    Canceled = "CANCELED",
    Accepted = "ACCEPTED"
}
export declare function InvoiceInvoiceStateFromJSON(json: any): InvoiceInvoiceState;
export declare function InvoiceInvoiceStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceInvoiceState;
export declare function InvoiceInvoiceStateToJSON(value?: InvoiceInvoiceState | null): any;
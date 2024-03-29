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
import { LnrpcInvoice } from './';
/**
 *
 * @export
 * @interface LnrpcListInvoiceResponse
 */
export interface LnrpcListInvoiceResponse {
    /**
     * A list of invoices from the time slice of the time series specified in the
     * request.
     * @type {Array<LnrpcInvoice>}
     * @memberof LnrpcListInvoiceResponse
     */
    invoices?: Array<LnrpcInvoice>;
    /**
     * The index of the last item in the set of returned invoices. This can be used
     * to seek further, pagination style.
     * @type {string}
     * @memberof LnrpcListInvoiceResponse
     */
    lastIndexOffset?: string;
    /**
     * The index of the last item in the set of returned invoices. This can be used
     * to seek backwards, pagination style.
     * @type {string}
     * @memberof LnrpcListInvoiceResponse
     */
    firstIndexOffset?: string;
}
export declare function LnrpcListInvoiceResponseFromJSON(json: any): LnrpcListInvoiceResponse;
export declare function LnrpcListInvoiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcListInvoiceResponse;
export declare function LnrpcListInvoiceResponseToJSON(value?: LnrpcListInvoiceResponse | null): any;

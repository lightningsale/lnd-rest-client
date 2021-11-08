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
import { LnrpcChannelFeeReport } from './';
/**
 *
 * @export
 * @interface LnrpcFeeReportResponse
 */
export interface LnrpcFeeReportResponse {
    /**
     * An array of channel fee reports which describes the current fee schedule
     * for each channel.
     * @type {Array<LnrpcChannelFeeReport>}
     * @memberof LnrpcFeeReportResponse
     */
    channelFees?: Array<LnrpcChannelFeeReport>;
    /**
     * The total amount of fee revenue (in satoshis) the switch has collected
     * over the past 24 hrs.
     * @type {string}
     * @memberof LnrpcFeeReportResponse
     */
    dayFeeSum?: string;
    /**
     * The total amount of fee revenue (in satoshis) the switch has collected
     * over the past 1 week.
     * @type {string}
     * @memberof LnrpcFeeReportResponse
     */
    weekFeeSum?: string;
    /**
     * The total amount of fee revenue (in satoshis) the switch has collected
     * over the past 1 month.
     * @type {string}
     * @memberof LnrpcFeeReportResponse
     */
    monthFeeSum?: string;
}
export declare function LnrpcFeeReportResponseFromJSON(json: any): LnrpcFeeReportResponse;
export declare function LnrpcFeeReportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcFeeReportResponse;
export declare function LnrpcFeeReportResponseToJSON(value?: LnrpcFeeReportResponse | null): any;
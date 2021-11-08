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
 * @interface LnrpcFundingPsbtVerify
 */
export interface LnrpcFundingPsbtVerify {
    /**
     * The funded but not yet signed PSBT that sends the exact channel capacity
     * amount to the PK script returned in the open channel message in a previous
     * step.
     * @type {string}
     * @memberof LnrpcFundingPsbtVerify
     */
    fundedPsbt?: string;
    /**
     * The pending channel ID of the channel to get the PSBT for.
     * @type {string}
     * @memberof LnrpcFundingPsbtVerify
     */
    pendingChanId?: string;
}
export declare function LnrpcFundingPsbtVerifyFromJSON(json: any): LnrpcFundingPsbtVerify;
export declare function LnrpcFundingPsbtVerifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcFundingPsbtVerify;
export declare function LnrpcFundingPsbtVerifyToJSON(value?: LnrpcFundingPsbtVerify | null): any;

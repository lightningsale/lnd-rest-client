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
import { LnrpcFundingPsbtFinalize, LnrpcFundingPsbtVerify, LnrpcFundingShim, LnrpcFundingShimCancel } from './';
/**
 *
 * @export
 * @interface LnrpcFundingTransitionMsg
 */
export interface LnrpcFundingTransitionMsg {
    /**
     *
     * @type {LnrpcFundingShim}
     * @memberof LnrpcFundingTransitionMsg
     */
    shimRegister?: LnrpcFundingShim;
    /**
     *
     * @type {LnrpcFundingShimCancel}
     * @memberof LnrpcFundingTransitionMsg
     */
    shimCancel?: LnrpcFundingShimCancel;
    /**
     *
     * @type {LnrpcFundingPsbtVerify}
     * @memberof LnrpcFundingTransitionMsg
     */
    psbtVerify?: LnrpcFundingPsbtVerify;
    /**
     *
     * @type {LnrpcFundingPsbtFinalize}
     * @memberof LnrpcFundingTransitionMsg
     */
    psbtFinalize?: LnrpcFundingPsbtFinalize;
}
export declare function LnrpcFundingTransitionMsgFromJSON(json: any): LnrpcFundingTransitionMsg;
export declare function LnrpcFundingTransitionMsgFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcFundingTransitionMsg;
export declare function LnrpcFundingTransitionMsgToJSON(value?: LnrpcFundingTransitionMsg | null): any;

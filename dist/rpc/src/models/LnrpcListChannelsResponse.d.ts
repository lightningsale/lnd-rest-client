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
import { LnrpcChannel } from './';
/**
 *
 * @export
 * @interface LnrpcListChannelsResponse
 */
export interface LnrpcListChannelsResponse {
    /**
     *
     * @type {Array<LnrpcChannel>}
     * @memberof LnrpcListChannelsResponse
     */
    channels?: Array<LnrpcChannel>;
}
export declare function LnrpcListChannelsResponseFromJSON(json: any): LnrpcListChannelsResponse;
export declare function LnrpcListChannelsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcListChannelsResponse;
export declare function LnrpcListChannelsResponseToJSON(value?: LnrpcListChannelsResponse | null): any;

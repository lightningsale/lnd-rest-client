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
import { LnrpcCloseStatusUpdate, RuntimeStreamError } from './';
/**
 *
 * @export
 * @interface StreamResultOfLnrpcCloseStatusUpdate
 */
export interface StreamResultOfLnrpcCloseStatusUpdate {
    /**
     *
     * @type {LnrpcCloseStatusUpdate}
     * @memberof StreamResultOfLnrpcCloseStatusUpdate
     */
    result?: LnrpcCloseStatusUpdate;
    /**
     *
     * @type {RuntimeStreamError}
     * @memberof StreamResultOfLnrpcCloseStatusUpdate
     */
    error?: RuntimeStreamError;
}
export declare function StreamResultOfLnrpcCloseStatusUpdateFromJSON(json: any): StreamResultOfLnrpcCloseStatusUpdate;
export declare function StreamResultOfLnrpcCloseStatusUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): StreamResultOfLnrpcCloseStatusUpdate;
export declare function StreamResultOfLnrpcCloseStatusUpdateToJSON(value?: StreamResultOfLnrpcCloseStatusUpdate | null): any;

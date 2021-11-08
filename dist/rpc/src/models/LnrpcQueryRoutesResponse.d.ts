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
import { LnrpcRoute } from './';
/**
 *
 * @export
 * @interface LnrpcQueryRoutesResponse
 */
export interface LnrpcQueryRoutesResponse {
    /**
     * The route that results from the path finding operation. This is still a
     * repeated field to retain backwards compatibility.
     * @type {Array<LnrpcRoute>}
     * @memberof LnrpcQueryRoutesResponse
     */
    routes?: Array<LnrpcRoute>;
    /**
     *
     * @type {number}
     * @memberof LnrpcQueryRoutesResponse
     */
    successProb?: number;
}
export declare function LnrpcQueryRoutesResponseFromJSON(json: any): LnrpcQueryRoutesResponse;
export declare function LnrpcQueryRoutesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcQueryRoutesResponse;
export declare function LnrpcQueryRoutesResponseToJSON(value?: LnrpcQueryRoutesResponse | null): any;
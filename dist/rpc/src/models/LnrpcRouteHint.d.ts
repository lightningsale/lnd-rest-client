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
import { LnrpcHopHint } from './';
/**
 *
 * @export
 * @interface LnrpcRouteHint
 */
export interface LnrpcRouteHint {
    /**
     * A list of hop hints that when chained together can assist in reaching a
     * specific destination.
     * @type {Array<LnrpcHopHint>}
     * @memberof LnrpcRouteHint
     */
    hopHints?: Array<LnrpcHopHint>;
}
export declare function LnrpcRouteHintFromJSON(json: any): LnrpcRouteHint;
export declare function LnrpcRouteHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcRouteHint;
export declare function LnrpcRouteHintToJSON(value?: LnrpcRouteHint | null): any;

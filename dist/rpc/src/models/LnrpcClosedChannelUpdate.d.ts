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
import { LnrpcChannelPoint } from './';
/**
 *
 * @export
 * @interface LnrpcClosedChannelUpdate
 */
export interface LnrpcClosedChannelUpdate {
    /**
     * The unique channel ID for the channel. The first 3 bytes are the block
     * height, the next 3 the index within the block, and the last 2 bytes are the
     * output index for the channel.
     * @type {string}
     * @memberof LnrpcClosedChannelUpdate
     */
    chanId?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcClosedChannelUpdate
     */
    capacity?: string;
    /**
     *
     * @type {number}
     * @memberof LnrpcClosedChannelUpdate
     */
    closedHeight?: number;
    /**
     *
     * @type {LnrpcChannelPoint}
     * @memberof LnrpcClosedChannelUpdate
     */
    chanPoint?: LnrpcChannelPoint;
}
export declare function LnrpcClosedChannelUpdateFromJSON(json: any): LnrpcClosedChannelUpdate;
export declare function LnrpcClosedChannelUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcClosedChannelUpdate;
export declare function LnrpcClosedChannelUpdateToJSON(value?: LnrpcClosedChannelUpdate | null): any;

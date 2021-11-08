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
import { LnrpcChannelEdge, LnrpcLightningNode } from './';
/**
 *
 * @export
 * @interface LnrpcNodeInfo
 */
export interface LnrpcNodeInfo {
    /**
     *
     * @type {LnrpcLightningNode}
     * @memberof LnrpcNodeInfo
     */
    node?: LnrpcLightningNode;
    /**
     * The total number of channels for the node.
     * @type {number}
     * @memberof LnrpcNodeInfo
     */
    numChannels?: number;
    /**
     * The sum of all channels capacity for the node, denominated in satoshis.
     * @type {string}
     * @memberof LnrpcNodeInfo
     */
    totalCapacity?: string;
    /**
     * A list of all public channels for the node.
     * @type {Array<LnrpcChannelEdge>}
     * @memberof LnrpcNodeInfo
     */
    channels?: Array<LnrpcChannelEdge>;
}
export declare function LnrpcNodeInfoFromJSON(json: any): LnrpcNodeInfo;
export declare function LnrpcNodeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcNodeInfo;
export declare function LnrpcNodeInfoToJSON(value?: LnrpcNodeInfo | null): any;

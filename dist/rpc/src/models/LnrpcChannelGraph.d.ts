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
 * Returns a new instance of the directed channel graph.
 * @export
 * @interface LnrpcChannelGraph
 */
export interface LnrpcChannelGraph {
    /**
     *
     * @type {Array<LnrpcLightningNode>}
     * @memberof LnrpcChannelGraph
     */
    nodes?: Array<LnrpcLightningNode>;
    /**
     *
     * @type {Array<LnrpcChannelEdge>}
     * @memberof LnrpcChannelGraph
     */
    edges?: Array<LnrpcChannelEdge>;
}
export declare function LnrpcChannelGraphFromJSON(json: any): LnrpcChannelGraph;
export declare function LnrpcChannelGraphFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChannelGraph;
export declare function LnrpcChannelGraphToJSON(value?: LnrpcChannelGraph | null): any;
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
import { LnrpcFeature, LnrpcNodeAddress } from './';
/**
 *
 * @export
 * @interface LnrpcNodeUpdate
 */
export interface LnrpcNodeUpdate {
    /**
     * Deprecated, use node_addresses.
     * @type {Array<string>}
     * @memberof LnrpcNodeUpdate
     */
    addresses?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof LnrpcNodeUpdate
     */
    identityKey?: string;
    /**
     * Deprecated, use features.
     * @type {string}
     * @memberof LnrpcNodeUpdate
     */
    globalFeatures?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcNodeUpdate
     */
    alias?: string;
    /**
     *
     * @type {string}
     * @memberof LnrpcNodeUpdate
     */
    color?: string;
    /**
     *
     * @type {Array<LnrpcNodeAddress>}
     * @memberof LnrpcNodeUpdate
     */
    nodeAddresses?: Array<LnrpcNodeAddress>;
    /**
     * Features that the node has advertised in the init message, node
     * announcements and invoices.
     * @type {{ [key: string]: LnrpcFeature; }}
     * @memberof LnrpcNodeUpdate
     */
    features?: {
        [key: string]: LnrpcFeature;
    };
}
export declare function LnrpcNodeUpdateFromJSON(json: any): LnrpcNodeUpdate;
export declare function LnrpcNodeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcNodeUpdate;
export declare function LnrpcNodeUpdateToJSON(value?: LnrpcNodeUpdate | null): any;
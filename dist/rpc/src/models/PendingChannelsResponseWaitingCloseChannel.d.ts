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
import { PendingChannelsResponseCommitments, PendingChannelsResponsePendingChannel } from './';
/**
 *
 * @export
 * @interface PendingChannelsResponseWaitingCloseChannel
 */
export interface PendingChannelsResponseWaitingCloseChannel {
    /**
     *
     * @type {PendingChannelsResponsePendingChannel}
     * @memberof PendingChannelsResponseWaitingCloseChannel
     */
    channel?: PendingChannelsResponsePendingChannel;
    /**
     *
     * @type {string}
     * @memberof PendingChannelsResponseWaitingCloseChannel
     */
    limboBalance?: string;
    /**
     *
     * @type {PendingChannelsResponseCommitments}
     * @memberof PendingChannelsResponseWaitingCloseChannel
     */
    commitments?: PendingChannelsResponseCommitments;
}
export declare function PendingChannelsResponseWaitingCloseChannelFromJSON(json: any): PendingChannelsResponseWaitingCloseChannel;
export declare function PendingChannelsResponseWaitingCloseChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingChannelsResponseWaitingCloseChannel;
export declare function PendingChannelsResponseWaitingCloseChannelToJSON(value?: PendingChannelsResponseWaitingCloseChannel | null): any;
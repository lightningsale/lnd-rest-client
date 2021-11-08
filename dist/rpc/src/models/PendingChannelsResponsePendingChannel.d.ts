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
import { LnrpcCommitmentType, LnrpcInitiator } from './';
/**
 *
 * @export
 * @interface PendingChannelsResponsePendingChannel
 */
export interface PendingChannelsResponsePendingChannel {
    /**
     *
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    remoteNodePub?: string;
    /**
     *
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    channelPoint?: string;
    /**
     *
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    capacity?: string;
    /**
     *
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    localBalance?: string;
    /**
     *
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    remoteBalance?: string;
    /**
     * The minimum satoshis this node is required to reserve in its
     * balance.
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    localChanReserveSat?: string;
    /**
     * The minimum satoshis the other node is required to reserve in its
     * balance.
     * @type {string}
     * @memberof PendingChannelsResponsePendingChannel
     */
    remoteChanReserveSat?: string;
    /**
     *
     * @type {LnrpcInitiator}
     * @memberof PendingChannelsResponsePendingChannel
     */
    initiator?: LnrpcInitiator;
    /**
     *
     * @type {LnrpcCommitmentType}
     * @memberof PendingChannelsResponsePendingChannel
     */
    commitmentType?: LnrpcCommitmentType;
}
export declare function PendingChannelsResponsePendingChannelFromJSON(json: any): PendingChannelsResponsePendingChannel;
export declare function PendingChannelsResponsePendingChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingChannelsResponsePendingChannel;
export declare function PendingChannelsResponsePendingChannelToJSON(value?: PendingChannelsResponsePendingChannel | null): any;

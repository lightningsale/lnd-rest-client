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
/**
 *
 * @export
 * @interface LnrpcChannelAcceptRequest
 */
export interface LnrpcChannelAcceptRequest {
    /**
     * The pubkey of the node that wishes to open an inbound channel.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    nodePubkey?: string;
    /**
     * The hash of the genesis block that the proposed channel resides in.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    chainHash?: string;
    /**
     * The pending channel id.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    pendingChanId?: string;
    /**
     * The funding amount in satoshis that initiator wishes to use in the
     * channel.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    fundingAmt?: string;
    /**
     * The push amount of the proposed channel in millisatoshis.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    pushAmt?: string;
    /**
     * The dust limit of the initiator's commitment tx.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    dustLimit?: string;
    /**
     * The maximum amount of coins in millisatoshis that can be pending in this
     * channel.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    maxValueInFlight?: string;
    /**
     * The minimum amount of satoshis the initiator requires us to have at all
     * times.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    channelReserve?: string;
    /**
     * The smallest HTLC in millisatoshis that the initiator will accept.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    minHtlc?: string;
    /**
     * The initial fee rate that the initiator suggests for both commitment
     * transactions.
     * @type {string}
     * @memberof LnrpcChannelAcceptRequest
     */
    feePerKw?: string;
    /**
     * The number of blocks to use for the relative time lock in the pay-to-self
     * output of both commitment transactions.
     * @type {number}
     * @memberof LnrpcChannelAcceptRequest
     */
    csvDelay?: number;
    /**
     * The total number of incoming HTLC's that the initiator will accept.
     * @type {number}
     * @memberof LnrpcChannelAcceptRequest
     */
    maxAcceptedHtlcs?: number;
    /**
     * A bit-field which the initiator uses to specify proposed channel
     * behavior.
     * @type {number}
     * @memberof LnrpcChannelAcceptRequest
     */
    channelFlags?: number;
}
export declare function LnrpcChannelAcceptRequestFromJSON(json: any): LnrpcChannelAcceptRequest;
export declare function LnrpcChannelAcceptRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChannelAcceptRequest;
export declare function LnrpcChannelAcceptRequestToJSON(value?: LnrpcChannelAcceptRequest | null): any;
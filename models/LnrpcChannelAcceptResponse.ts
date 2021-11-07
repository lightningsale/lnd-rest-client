/**
 * rpc.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LnrpcChannelAcceptResponse {
    /**
    * Whether or not the client accepts the channel.
    */
    'accept'?: boolean;
    /**
    * The pending channel id to which this response applies.
    */
    'pendingChanId'?: string;
    /**
    * An optional error to send the initiating party to indicate why the channel was rejected. This field *should not* contain sensitive information, it will be sent to the initiating party. This field should only be set if accept is false, the channel will be rejected if an error is set with accept=true because the meaning of this response is ambiguous. Limited to 500 characters.
    */
    'error'?: string;
    /**
    * The upfront shutdown address to use if the initiating peer supports option upfront shutdown script (see ListPeers for the features supported). Note that the channel open will fail if this value is set for a peer that does not support this feature bit.
    */
    'upfrontShutdown'?: string;
    /**
    * The csv delay (in blocks) that we require for the remote party.
    */
    'csvDelay'?: number;
    /**
    * The reserve amount in satoshis that we require the remote peer to adhere to. We require that the remote peer always have some reserve amount allocated to them so that there is always a disincentive to broadcast old state (if they hold 0 sats on their side of the channel, there is nothing to lose).
    */
    'reserveSat'?: string;
    /**
    * The maximum amount of funds in millisatoshis that we allow the remote peer to have in outstanding htlcs.
    */
    'inFlightMaxMsat'?: string;
    /**
    * The maximum number of htlcs that the remote peer can offer us.
    */
    'maxHtlcCount'?: number;
    /**
    * The minimum value in millisatoshis for incoming htlcs on the channel.
    */
    'minHtlcIn'?: string;
    /**
    * The number of confirmations we require before we consider the channel open.
    */
    'minAcceptDepth'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accept",
            "baseName": "accept",
            "type": "boolean",
            "format": "boolean"
        },
        {
            "name": "pendingChanId",
            "baseName": "pending_chan_id",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "upfrontShutdown",
            "baseName": "upfront_shutdown",
            "type": "string",
            "format": ""
        },
        {
            "name": "csvDelay",
            "baseName": "csv_delay",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "reserveSat",
            "baseName": "reserve_sat",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "inFlightMaxMsat",
            "baseName": "in_flight_max_msat",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "maxHtlcCount",
            "baseName": "max_htlc_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "minHtlcIn",
            "baseName": "min_htlc_in",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "minAcceptDepth",
            "baseName": "min_accept_depth",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcChannelAcceptResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


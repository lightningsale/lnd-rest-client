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

export class LnrpcFundingPsbtVerify {
    /**
    * The funded but not yet signed PSBT that sends the exact channel capacity amount to the PK script returned in the open channel message in a previous step.
    */
    'fundedPsbt'?: string;
    /**
    * The pending channel ID of the channel to get the PSBT for.
    */
    'pendingChanId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fundedPsbt",
            "baseName": "funded_psbt",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "pendingChanId",
            "baseName": "pending_chan_id",
            "type": "string",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcFundingPsbtVerify.attributeTypeMap;
    }

    public constructor() {
    }
}

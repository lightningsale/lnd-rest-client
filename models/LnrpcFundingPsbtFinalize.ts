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

export class LnrpcFundingPsbtFinalize {
    /**
    * The funded PSBT that contains all witness data to send the exact channel capacity amount to the PK script returned in the open channel message in a previous step. Cannot be set at the same time as final_raw_tx.
    */
    'signedPsbt'?: string;
    /**
    * The pending channel ID of the channel to get the PSBT for.
    */
    'pendingChanId'?: string;
    /**
    * As an alternative to the signed PSBT with all witness data, the final raw wire format transaction can also be specified directly. Cannot be set at the same time as signed_psbt.
    */
    'finalRawTx'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "signedPsbt",
            "baseName": "signed_psbt",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "pendingChanId",
            "baseName": "pending_chan_id",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "finalRawTx",
            "baseName": "final_raw_tx",
            "type": "string",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcFundingPsbtFinalize.attributeTypeMap;
    }

    public constructor() {
    }
}


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

export class LnrpcReadyForPsbtFunding {
    /**
    * The P2WSH address of the channel funding multisig address that the below specified amount in satoshis needs to be sent to.
    */
    'fundingAddress'?: string;
    /**
    * The exact amount in satoshis that needs to be sent to the above address to fund the pending channel.
    */
    'fundingAmount'?: string;
    /**
    * A raw PSBT that contains the pending channel output. If a base PSBT was provided in the PsbtShim, this is the base PSBT with one additional output. If no base PSBT was specified, this is an otherwise empty PSBT with exactly one output.
    */
    'psbt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fundingAddress",
            "baseName": "funding_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "fundingAmount",
            "baseName": "funding_amount",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "psbt",
            "baseName": "psbt",
            "type": "string",
            "format": "byte"
        }    ];

    static getAttributeTypeMap() {
        return LnrpcReadyForPsbtFunding.attributeTypeMap;
    }

    public constructor() {
    }
}

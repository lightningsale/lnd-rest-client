/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LnrpcReadyForPsbtFunding
 */
export interface LnrpcReadyForPsbtFunding {
    /**
     * The P2WSH address of the channel funding multisig address that the below
     * specified amount in satoshis needs to be sent to.
     * @type {string}
     * @memberof LnrpcReadyForPsbtFunding
     */
    fundingAddress?: string;
    /**
     * The exact amount in satoshis that needs to be sent to the above address to
     * fund the pending channel.
     * @type {string}
     * @memberof LnrpcReadyForPsbtFunding
     */
    fundingAmount?: string;
    /**
     * A raw PSBT that contains the pending channel output. If a base PSBT was
     * provided in the PsbtShim, this is the base PSBT with one additional output.
     * If no base PSBT was specified, this is an otherwise empty PSBT with exactly
     * one output.
     * @type {string}
     * @memberof LnrpcReadyForPsbtFunding
     */
    psbt?: string;
}

export function LnrpcReadyForPsbtFundingFromJSON(json: any): LnrpcReadyForPsbtFunding {
    return LnrpcReadyForPsbtFundingFromJSONTyped(json, false);
}

export function LnrpcReadyForPsbtFundingFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcReadyForPsbtFunding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fundingAddress': !exists(json, 'funding_address') ? undefined : json['funding_address'],
        'fundingAmount': !exists(json, 'funding_amount') ? undefined : json['funding_amount'],
        'psbt': !exists(json, 'psbt') ? undefined : json['psbt'],
    };
}

export function LnrpcReadyForPsbtFundingToJSON(value?: LnrpcReadyForPsbtFunding | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'funding_address': value.fundingAddress,
        'funding_amount': value.fundingAmount,
        'psbt': value.psbt,
    };
}


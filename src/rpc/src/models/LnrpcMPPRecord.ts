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
 * @interface LnrpcMPPRecord
 */
export interface LnrpcMPPRecord {
    /**
     * A unique, random identifier used to authenticate the sender as the intended
     * payer of a multi-path payment. The payment_addr must be the same for all
     * subpayments, and match the payment_addr provided in the receiver's invoice.
     * The same payment_addr must be used on all subpayments.
     * @type {string}
     * @memberof LnrpcMPPRecord
     */
    paymentAddr?: string;
    /**
     * The total amount in milli-satoshis being sent as part of a larger multi-path
     * payment. The caller is responsible for ensuring subpayments to the same node
     * and payment_hash sum exactly to total_amt_msat. The same
     * total_amt_msat must be used on all subpayments.
     * @type {string}
     * @memberof LnrpcMPPRecord
     */
    totalAmtMsat?: string;
}

export function LnrpcMPPRecordFromJSON(json: any): LnrpcMPPRecord {
    return LnrpcMPPRecordFromJSONTyped(json, false);
}

export function LnrpcMPPRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcMPPRecord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentAddr': !exists(json, 'payment_addr') ? undefined : json['payment_addr'],
        'totalAmtMsat': !exists(json, 'total_amt_msat') ? undefined : json['total_amt_msat'],
    };
}

export function LnrpcMPPRecordToJSON(value?: LnrpcMPPRecord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_addr': value.paymentAddr,
        'total_amt_msat': value.totalAmtMsat,
    };
}


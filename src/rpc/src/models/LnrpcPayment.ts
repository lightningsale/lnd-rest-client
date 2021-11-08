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
import {
    LnrpcHTLCAttempt,
    LnrpcHTLCAttemptFromJSON,
    LnrpcHTLCAttemptFromJSONTyped,
    LnrpcHTLCAttemptToJSON,
    LnrpcPaymentFailureReason,
    LnrpcPaymentFailureReasonFromJSON,
    LnrpcPaymentFailureReasonFromJSONTyped,
    LnrpcPaymentFailureReasonToJSON,
    PaymentPaymentStatus,
    PaymentPaymentStatusFromJSON,
    PaymentPaymentStatusFromJSONTyped,
    PaymentPaymentStatusToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcPayment
 */
export interface LnrpcPayment {
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayment
     */
    paymentHash?: string;
    /**
     * Deprecated, use value_sat or value_msat.
     * @type {string}
     * @memberof LnrpcPayment
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayment
     */
    creationDate?: string;
    /**
     * Deprecated, use fee_sat or fee_msat.
     * @type {string}
     * @memberof LnrpcPayment
     */
    fee?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayment
     */
    paymentPreimage?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayment
     */
    valueSat?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayment
     */
    valueMsat?: string;
    /**
     * The optional payment request being fulfilled.
     * @type {string}
     * @memberof LnrpcPayment
     */
    paymentRequest?: string;
    /**
     * 
     * @type {PaymentPaymentStatus}
     * @memberof LnrpcPayment
     */
    status?: PaymentPaymentStatus;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayment
     */
    feeSat?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPayment
     */
    feeMsat?: string;
    /**
     * The time in UNIX nanoseconds at which the payment was created.
     * @type {string}
     * @memberof LnrpcPayment
     */
    creationTimeNs?: string;
    /**
     * The HTLCs made in attempt to settle the payment.
     * @type {Array<LnrpcHTLCAttempt>}
     * @memberof LnrpcPayment
     */
    htlcs?: Array<LnrpcHTLCAttempt>;
    /**
     * The creation index of this payment. Each payment can be uniquely identified
     * by this index, which may not strictly increment by 1 for payments made in
     * older versions of lnd.
     * @type {string}
     * @memberof LnrpcPayment
     */
    paymentIndex?: string;
    /**
     * 
     * @type {LnrpcPaymentFailureReason}
     * @memberof LnrpcPayment
     */
    failureReason?: LnrpcPaymentFailureReason;
}

export function LnrpcPaymentFromJSON(json: any): LnrpcPayment {
    return LnrpcPaymentFromJSONTyped(json, false);
}

export function LnrpcPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcPayment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentHash': !exists(json, 'payment_hash') ? undefined : json['payment_hash'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'creationDate': !exists(json, 'creation_date') ? undefined : json['creation_date'],
        'fee': !exists(json, 'fee') ? undefined : json['fee'],
        'paymentPreimage': !exists(json, 'payment_preimage') ? undefined : json['payment_preimage'],
        'valueSat': !exists(json, 'value_sat') ? undefined : json['value_sat'],
        'valueMsat': !exists(json, 'value_msat') ? undefined : json['value_msat'],
        'paymentRequest': !exists(json, 'payment_request') ? undefined : json['payment_request'],
        'status': !exists(json, 'status') ? undefined : PaymentPaymentStatusFromJSON(json['status']),
        'feeSat': !exists(json, 'fee_sat') ? undefined : json['fee_sat'],
        'feeMsat': !exists(json, 'fee_msat') ? undefined : json['fee_msat'],
        'creationTimeNs': !exists(json, 'creation_time_ns') ? undefined : json['creation_time_ns'],
        'htlcs': !exists(json, 'htlcs') ? undefined : ((json['htlcs'] as Array<any>).map(LnrpcHTLCAttemptFromJSON)),
        'paymentIndex': !exists(json, 'payment_index') ? undefined : json['payment_index'],
        'failureReason': !exists(json, 'failure_reason') ? undefined : LnrpcPaymentFailureReasonFromJSON(json['failure_reason']),
    };
}

export function LnrpcPaymentToJSON(value?: LnrpcPayment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_hash': value.paymentHash,
        'value': value.value,
        'creation_date': value.creationDate,
        'fee': value.fee,
        'payment_preimage': value.paymentPreimage,
        'value_sat': value.valueSat,
        'value_msat': value.valueMsat,
        'payment_request': value.paymentRequest,
        'status': PaymentPaymentStatusToJSON(value.status),
        'fee_sat': value.feeSat,
        'fee_msat': value.feeMsat,
        'creation_time_ns': value.creationTimeNs,
        'htlcs': value.htlcs === undefined ? undefined : ((value.htlcs as Array<any>).map(LnrpcHTLCAttemptToJSON)),
        'payment_index': value.paymentIndex,
        'failure_reason': LnrpcPaymentFailureReasonToJSON(value.failureReason),
    };
}


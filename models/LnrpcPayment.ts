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

import { LnrpcHTLCAttempt } from './LnrpcHTLCAttempt';
import { LnrpcPaymentFailureReason } from './LnrpcPaymentFailureReason';
import { PaymentPaymentStatus } from './PaymentPaymentStatus';
import { HttpFile } from '../http/http';

export class LnrpcPayment {
    'paymentHash'?: string;
    /**
    * Deprecated, use value_sat or value_msat.
    */
    'value'?: string;
    'creationDate'?: string;
    /**
    * Deprecated, use fee_sat or fee_msat.
    */
    'fee'?: string;
    'paymentPreimage'?: string;
    'valueSat'?: string;
    'valueMsat'?: string;
    /**
    * The optional payment request being fulfilled.
    */
    'paymentRequest'?: string;
    'status'?: PaymentPaymentStatus;
    'feeSat'?: string;
    'feeMsat'?: string;
    /**
    * The time in UNIX nanoseconds at which the payment was created.
    */
    'creationTimeNs'?: string;
    /**
    * The HTLCs made in attempt to settle the payment.
    */
    'htlcs'?: Array<LnrpcHTLCAttempt>;
    /**
    * The creation index of this payment. Each payment can be uniquely identified by this index, which may not strictly increment by 1 for payments made in older versions of lnd.
    */
    'paymentIndex'?: string;
    'failureReason'?: LnrpcPaymentFailureReason;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paymentHash",
            "baseName": "payment_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "creationDate",
            "baseName": "creation_date",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "paymentPreimage",
            "baseName": "payment_preimage",
            "type": "string",
            "format": ""
        },
        {
            "name": "valueSat",
            "baseName": "value_sat",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "valueMsat",
            "baseName": "value_msat",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "paymentRequest",
            "baseName": "payment_request",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentPaymentStatus",
            "format": ""
        },
        {
            "name": "feeSat",
            "baseName": "fee_sat",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "feeMsat",
            "baseName": "fee_msat",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "creationTimeNs",
            "baseName": "creation_time_ns",
            "type": "string",
            "format": "int64"
        },
        {
            "name": "htlcs",
            "baseName": "htlcs",
            "type": "Array<LnrpcHTLCAttempt>",
            "format": ""
        },
        {
            "name": "paymentIndex",
            "baseName": "payment_index",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "failureReason",
            "baseName": "failure_reason",
            "type": "LnrpcPaymentFailureReason",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LnrpcPayment.attributeTypeMap;
    }

    public constructor() {
    }
}

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

/**
 *  - FAILURE_REASON_NONE: Payment isn't failed (yet).
 *  - FAILURE_REASON_TIMEOUT: There are more routes to try, but the payment timeout was exceeded.
 *  - FAILURE_REASON_NO_ROUTE: All possible routes were tried and failed permanently. Or were no
 * routes to the destination at all.
 *  - FAILURE_REASON_ERROR: A non-recoverable error has occured.
 *  - FAILURE_REASON_INCORRECT_PAYMENT_DETAILS: Payment details incorrect (unknown hash, invalid amt or
 * invalid final cltv delta)
 *  - FAILURE_REASON_INSUFFICIENT_BALANCE: Insufficient local balance.
 * @export
 * @enum {string}
 */
export enum LnrpcPaymentFailureReason {
    None = 'FAILURE_REASON_NONE',
    Timeout = 'FAILURE_REASON_TIMEOUT',
    NoRoute = 'FAILURE_REASON_NO_ROUTE',
    Error = 'FAILURE_REASON_ERROR',
    IncorrectPaymentDetails = 'FAILURE_REASON_INCORRECT_PAYMENT_DETAILS',
    InsufficientBalance = 'FAILURE_REASON_INSUFFICIENT_BALANCE'
}

export function LnrpcPaymentFailureReasonFromJSON(json: any): LnrpcPaymentFailureReason {
    return LnrpcPaymentFailureReasonFromJSONTyped(json, false);
}

export function LnrpcPaymentFailureReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcPaymentFailureReason {
    return json as LnrpcPaymentFailureReason;
}

export function LnrpcPaymentFailureReasonToJSON(value?: LnrpcPaymentFailureReason | null): any {
    return value as any;
}


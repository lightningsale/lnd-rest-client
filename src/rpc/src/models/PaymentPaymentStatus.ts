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
 * 
 * @export
 * @enum {string}
 */
export enum PaymentPaymentStatus {
    Unknown = 'UNKNOWN',
    InFlight = 'IN_FLIGHT',
    Succeeded = 'SUCCEEDED',
    Failed = 'FAILED'
}

export function PaymentPaymentStatusFromJSON(json: any): PaymentPaymentStatus {
    return PaymentPaymentStatusFromJSONTyped(json, false);
}

export function PaymentPaymentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentPaymentStatus {
    return json as PaymentPaymentStatus;
}

export function PaymentPaymentStatusToJSON(value?: PaymentPaymentStatus | null): any {
    return value as any;
}

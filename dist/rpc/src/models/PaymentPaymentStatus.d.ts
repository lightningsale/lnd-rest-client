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
export declare enum PaymentPaymentStatus {
    Unknown = "UNKNOWN",
    InFlight = "IN_FLIGHT",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare function PaymentPaymentStatusFromJSON(json: any): PaymentPaymentStatus;
export declare function PaymentPaymentStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentPaymentStatus;
export declare function PaymentPaymentStatusToJSON(value?: PaymentPaymentStatus | null): any;

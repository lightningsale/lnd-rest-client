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
export declare enum HTLCAttemptHTLCStatus {
    InFlight = "IN_FLIGHT",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare function HTLCAttemptHTLCStatusFromJSON(json: any): HTLCAttemptHTLCStatus;
export declare function HTLCAttemptHTLCStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): HTLCAttemptHTLCStatus;
export declare function HTLCAttemptHTLCStatusToJSON(value?: HTLCAttemptHTLCStatus | null): any;

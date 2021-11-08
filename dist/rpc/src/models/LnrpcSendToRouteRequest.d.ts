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
import { LnrpcRoute } from './';
/**
 *
 * @export
 * @interface LnrpcSendToRouteRequest
 */
export interface LnrpcSendToRouteRequest {
    /**
     * The payment hash to use for the HTLC. When using REST, this field must be
     * encoded as base64.
     * @type {string}
     * @memberof LnrpcSendToRouteRequest
     */
    paymentHash?: string;
    /**
     * An optional hex-encoded payment hash to be used for the HTLC. Deprecated now
     * that the REST gateway supports base64 encoding of bytes fields.
     * @type {string}
     * @memberof LnrpcSendToRouteRequest
     */
    paymentHashString?: string;
    /**
     *
     * @type {LnrpcRoute}
     * @memberof LnrpcSendToRouteRequest
     */
    route?: LnrpcRoute;
}
export declare function LnrpcSendToRouteRequestFromJSON(json: any): LnrpcSendToRouteRequest;
export declare function LnrpcSendToRouteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcSendToRouteRequest;
export declare function LnrpcSendToRouteRequestToJSON(value?: LnrpcSendToRouteRequest | null): any;
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
 * @interface LnrpcMacaroonPermission
 */
export interface LnrpcMacaroonPermission {
    /**
     * The entity a permission grants access to.
     * @type {string}
     * @memberof LnrpcMacaroonPermission
     */
    entity?: string;
    /**
     * The action that is granted.
     * @type {string}
     * @memberof LnrpcMacaroonPermission
     */
    action?: string;
}
export declare function LnrpcMacaroonPermissionFromJSON(json: any): LnrpcMacaroonPermission;
export declare function LnrpcMacaroonPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcMacaroonPermission;
export declare function LnrpcMacaroonPermissionToJSON(value?: LnrpcMacaroonPermission | null): any;

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
 * @interface ProtobufAny
 */
export interface ProtobufAny {
    /**
     *
     * @type {string}
     * @memberof ProtobufAny
     */
    typeUrl?: string;
    /**
     *
     * @type {string}
     * @memberof ProtobufAny
     */
    value?: string;
}
export declare function ProtobufAnyFromJSON(json: any): ProtobufAny;
export declare function ProtobufAnyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProtobufAny;
export declare function ProtobufAnyToJSON(value?: ProtobufAny | null): any;

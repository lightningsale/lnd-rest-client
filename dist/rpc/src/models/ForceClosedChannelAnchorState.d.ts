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
export declare enum ForceClosedChannelAnchorState {
    Limbo = "LIMBO",
    Recovered = "RECOVERED",
    Lost = "LOST"
}
export declare function ForceClosedChannelAnchorStateFromJSON(json: any): ForceClosedChannelAnchorState;
export declare function ForceClosedChannelAnchorStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForceClosedChannelAnchorState;
export declare function ForceClosedChannelAnchorStateToJSON(value?: ForceClosedChannelAnchorState | null): any;

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
export enum ChannelCloseSummaryClosureType {
    CooperativeClose = 'COOPERATIVE_CLOSE',
    LocalForceClose = 'LOCAL_FORCE_CLOSE',
    RemoteForceClose = 'REMOTE_FORCE_CLOSE',
    BreachClose = 'BREACH_CLOSE',
    FundingCanceled = 'FUNDING_CANCELED',
    Abandoned = 'ABANDONED'
}

export function ChannelCloseSummaryClosureTypeFromJSON(json: any): ChannelCloseSummaryClosureType {
    return ChannelCloseSummaryClosureTypeFromJSONTyped(json, false);
}

export function ChannelCloseSummaryClosureTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelCloseSummaryClosureType {
    return json as ChannelCloseSummaryClosureType;
}

export function ChannelCloseSummaryClosureTypeToJSON(value?: ChannelCloseSummaryClosureType | null): any {
    return value as any;
}


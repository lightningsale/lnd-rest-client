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
 *  - OUTCOME_UNKNOWN: Outcome unknown.
 *  - CLAIMED: An output was claimed on chain.
 *  - UNCLAIMED: An output was left unclaimed on chain.
 *  - ABANDONED: ResolverOutcomeAbandoned indicates that an output that we did not
 * claim on chain, for example an anchor that we did not sweep and a
 * third party claimed on chain, or a htlc that we could not decode
 * so left unclaimed.
 *  - FIRST_STAGE: If we force closed our channel, our htlcs need to be claimed in two
 * stages. This outcome represents the broadcast of a timeout or success
 * transaction for this two stage htlc claim.
 *  - TIMEOUT: A htlc was timed out on chain.
 * @export
 * @enum {string}
 */
export enum LnrpcResolutionOutcome {
    OutcomeUnknown = 'OUTCOME_UNKNOWN',
    Claimed = 'CLAIMED',
    Unclaimed = 'UNCLAIMED',
    Abandoned = 'ABANDONED',
    FirstStage = 'FIRST_STAGE',
    Timeout = 'TIMEOUT'
}

export function LnrpcResolutionOutcomeFromJSON(json: any): LnrpcResolutionOutcome {
    return LnrpcResolutionOutcomeFromJSONTyped(json, false);
}

export function LnrpcResolutionOutcomeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcResolutionOutcome {
    return json as LnrpcResolutionOutcome;
}

export function LnrpcResolutionOutcomeToJSON(value?: LnrpcResolutionOutcome | null): any {
    return value as any;
}

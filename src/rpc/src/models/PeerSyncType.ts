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
 *  - UNKNOWN_SYNC: Denotes that we cannot determine the peer's current sync type.
 *  - ACTIVE_SYNC: Denotes that we are actively receiving new graph updates from the peer.
 *  - PASSIVE_SYNC: Denotes that we are not receiving new graph updates from the peer.
 *  - PINNED_SYNC: Denotes that this peer is pinned into an active sync.
 * @export
 * @enum {string}
 */
export enum PeerSyncType {
    UnknownSync = 'UNKNOWN_SYNC',
    ActiveSync = 'ACTIVE_SYNC',
    PassiveSync = 'PASSIVE_SYNC',
    PinnedSync = 'PINNED_SYNC'
}

export function PeerSyncTypeFromJSON(json: any): PeerSyncType {
    return PeerSyncTypeFromJSONTyped(json, false);
}

export function PeerSyncTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerSyncType {
    return json as PeerSyncType;
}

export function PeerSyncTypeToJSON(value?: PeerSyncType | null): any {
    return value as any;
}

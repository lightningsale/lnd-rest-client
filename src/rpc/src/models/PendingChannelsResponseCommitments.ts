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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PendingChannelsResponseCommitments
 */
export interface PendingChannelsResponseCommitments {
    /**
     * Hash of the local version of the commitment tx.
     * @type {string}
     * @memberof PendingChannelsResponseCommitments
     */
    localTxid?: string;
    /**
     * Hash of the remote version of the commitment tx.
     * @type {string}
     * @memberof PendingChannelsResponseCommitments
     */
    remoteTxid?: string;
    /**
     * Hash of the remote pending version of the commitment tx.
     * @type {string}
     * @memberof PendingChannelsResponseCommitments
     */
    remotePendingTxid?: string;
    /**
     * The amount in satoshis calculated to be paid in fees for the local
     * commitment.
     * @type {string}
     * @memberof PendingChannelsResponseCommitments
     */
    localCommitFeeSat?: string;
    /**
     * The amount in satoshis calculated to be paid in fees for the remote
     * commitment.
     * @type {string}
     * @memberof PendingChannelsResponseCommitments
     */
    remoteCommitFeeSat?: string;
    /**
     * The amount in satoshis calculated to be paid in fees for the remote
     * pending commitment.
     * @type {string}
     * @memberof PendingChannelsResponseCommitments
     */
    remotePendingCommitFeeSat?: string;
}

export function PendingChannelsResponseCommitmentsFromJSON(json: any): PendingChannelsResponseCommitments {
    return PendingChannelsResponseCommitmentsFromJSONTyped(json, false);
}

export function PendingChannelsResponseCommitmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingChannelsResponseCommitments {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localTxid': !exists(json, 'local_txid') ? undefined : json['local_txid'],
        'remoteTxid': !exists(json, 'remote_txid') ? undefined : json['remote_txid'],
        'remotePendingTxid': !exists(json, 'remote_pending_txid') ? undefined : json['remote_pending_txid'],
        'localCommitFeeSat': !exists(json, 'local_commit_fee_sat') ? undefined : json['local_commit_fee_sat'],
        'remoteCommitFeeSat': !exists(json, 'remote_commit_fee_sat') ? undefined : json['remote_commit_fee_sat'],
        'remotePendingCommitFeeSat': !exists(json, 'remote_pending_commit_fee_sat') ? undefined : json['remote_pending_commit_fee_sat'],
    };
}

export function PendingChannelsResponseCommitmentsToJSON(value?: PendingChannelsResponseCommitments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'local_txid': value.localTxid,
        'remote_txid': value.remoteTxid,
        'remote_pending_txid': value.remotePendingTxid,
        'local_commit_fee_sat': value.localCommitFeeSat,
        'remote_commit_fee_sat': value.remoteCommitFeeSat,
        'remote_pending_commit_fee_sat': value.remotePendingCommitFeeSat,
    };
}


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
import {
    LnrpcFeature,
    LnrpcFeatureFromJSON,
    LnrpcFeatureFromJSONTyped,
    LnrpcFeatureToJSON,
    LnrpcTimestampedError,
    LnrpcTimestampedErrorFromJSON,
    LnrpcTimestampedErrorFromJSONTyped,
    LnrpcTimestampedErrorToJSON,
    PeerSyncType,
    PeerSyncTypeFromJSON,
    PeerSyncTypeFromJSONTyped,
    PeerSyncTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface LnrpcPeer
 */
export interface LnrpcPeer {
    /**
     * 
     * @type {string}
     * @memberof LnrpcPeer
     */
    pubKey?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPeer
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPeer
     */
    bytesSent?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPeer
     */
    bytesRecv?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPeer
     */
    satSent?: string;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPeer
     */
    satRecv?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LnrpcPeer
     */
    inbound?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LnrpcPeer
     */
    pingTime?: string;
    /**
     * 
     * @type {PeerSyncType}
     * @memberof LnrpcPeer
     */
    syncType?: PeerSyncType;
    /**
     * Features advertised by the remote peer in their init message.
     * @type {{ [key: string]: LnrpcFeature; }}
     * @memberof LnrpcPeer
     */
    features?: { [key: string]: LnrpcFeature; };
    /**
     * The latest errors received from our peer with timestamps, limited to the 10
     * most recent errors. These errors are tracked across peer connections, but
     * are not persisted across lnd restarts. Note that these errors are only
     * stored for peers that we have channels open with, to prevent peers from
     * spamming us with errors at no cost.
     * @type {Array<LnrpcTimestampedError>}
     * @memberof LnrpcPeer
     */
    errors?: Array<LnrpcTimestampedError>;
    /**
     * The number of times we have recorded this peer going offline or coming
     * online, recorded across restarts. Note that this value is decreased over
     * time if the peer has not recently flapped, so that we can forgive peers
     * with historically high flap counts.
     * @type {number}
     * @memberof LnrpcPeer
     */
    flapCount?: number;
    /**
     * The timestamp of the last flap we observed for this peer. If this value is
     * zero, we have not observed any flaps for this peer.
     * @type {string}
     * @memberof LnrpcPeer
     */
    lastFlapNs?: string;
}

export function LnrpcPeerFromJSON(json: any): LnrpcPeer {
    return LnrpcPeerFromJSONTyped(json, false);
}

export function LnrpcPeerFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcPeer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pubKey': !exists(json, 'pub_key') ? undefined : json['pub_key'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'bytesSent': !exists(json, 'bytes_sent') ? undefined : json['bytes_sent'],
        'bytesRecv': !exists(json, 'bytes_recv') ? undefined : json['bytes_recv'],
        'satSent': !exists(json, 'sat_sent') ? undefined : json['sat_sent'],
        'satRecv': !exists(json, 'sat_recv') ? undefined : json['sat_recv'],
        'inbound': !exists(json, 'inbound') ? undefined : json['inbound'],
        'pingTime': !exists(json, 'ping_time') ? undefined : json['ping_time'],
        'syncType': !exists(json, 'sync_type') ? undefined : PeerSyncTypeFromJSON(json['sync_type']),
        'features': !exists(json, 'features') ? undefined : (mapValues(json['features'], LnrpcFeatureFromJSON)),
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(LnrpcTimestampedErrorFromJSON)),
        'flapCount': !exists(json, 'flap_count') ? undefined : json['flap_count'],
        'lastFlapNs': !exists(json, 'last_flap_ns') ? undefined : json['last_flap_ns'],
    };
}

export function LnrpcPeerToJSON(value?: LnrpcPeer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pub_key': value.pubKey,
        'address': value.address,
        'bytes_sent': value.bytesSent,
        'bytes_recv': value.bytesRecv,
        'sat_sent': value.satSent,
        'sat_recv': value.satRecv,
        'inbound': value.inbound,
        'ping_time': value.pingTime,
        'sync_type': PeerSyncTypeToJSON(value.syncType),
        'features': value.features === undefined ? undefined : (mapValues(value.features, LnrpcFeatureToJSON)),
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(LnrpcTimestampedErrorToJSON)),
        'flap_count': value.flapCount,
        'last_flap_ns': value.lastFlapNs,
    };
}

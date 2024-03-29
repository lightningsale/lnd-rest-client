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
import { LnrpcChannelBackups } from './';
/**
 *
 * @export
 * @interface LnrpcRestoreChanBackupRequest
 */
export interface LnrpcRestoreChanBackupRequest {
    /**
     *
     * @type {LnrpcChannelBackups}
     * @memberof LnrpcRestoreChanBackupRequest
     */
    chanBackups?: LnrpcChannelBackups;
    /**
     * The channels to restore in the packed multi backup format. When using
     * REST, this field must be encoded as base64.
     * @type {string}
     * @memberof LnrpcRestoreChanBackupRequest
     */
    multiChanBackup?: string;
}
export declare function LnrpcRestoreChanBackupRequestFromJSON(json: any): LnrpcRestoreChanBackupRequest;
export declare function LnrpcRestoreChanBackupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcRestoreChanBackupRequest;
export declare function LnrpcRestoreChanBackupRequestToJSON(value?: LnrpcRestoreChanBackupRequest | null): any;

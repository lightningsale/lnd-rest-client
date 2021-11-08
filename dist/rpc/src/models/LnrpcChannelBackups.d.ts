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
import { LnrpcChannelBackup } from './';
/**
 *
 * @export
 * @interface LnrpcChannelBackups
 */
export interface LnrpcChannelBackups {
    /**
     * A set of single-chan static channel backups.
     * @type {Array<LnrpcChannelBackup>}
     * @memberof LnrpcChannelBackups
     */
    chanBackups?: Array<LnrpcChannelBackup>;
}
export declare function LnrpcChannelBackupsFromJSON(json: any): LnrpcChannelBackups;
export declare function LnrpcChannelBackupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LnrpcChannelBackups;
export declare function LnrpcChannelBackupsToJSON(value?: LnrpcChannelBackups | null): any;

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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LnrpcTransaction model module.
 * @module model/LnrpcTransaction
 * @version version not set
 */
class LnrpcTransaction {
    /**
     * Constructs a new <code>LnrpcTransaction</code>.
     * @alias module:model/LnrpcTransaction
     */
    constructor() { 
        LnrpcTransaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcTransaction} obj Optional instance to populate.
     * @return {module:model/LnrpcTransaction} The populated <code>LnrpcTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcTransaction();

            if (data.hasOwnProperty('tx_hash')) {
                obj['tx_hash'] = ApiClient.convertToType(data['tx_hash'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('num_confirmations')) {
                obj['num_confirmations'] = ApiClient.convertToType(data['num_confirmations'], 'Number');
            }
            if (data.hasOwnProperty('block_hash')) {
                obj['block_hash'] = ApiClient.convertToType(data['block_hash'], 'String');
            }
            if (data.hasOwnProperty('block_height')) {
                obj['block_height'] = ApiClient.convertToType(data['block_height'], 'Number');
            }
            if (data.hasOwnProperty('time_stamp')) {
                obj['time_stamp'] = ApiClient.convertToType(data['time_stamp'], 'String');
            }
            if (data.hasOwnProperty('total_fees')) {
                obj['total_fees'] = ApiClient.convertToType(data['total_fees'], 'String');
            }
            if (data.hasOwnProperty('dest_addresses')) {
                obj['dest_addresses'] = ApiClient.convertToType(data['dest_addresses'], ['String']);
            }
            if (data.hasOwnProperty('raw_tx_hex')) {
                obj['raw_tx_hex'] = ApiClient.convertToType(data['raw_tx_hex'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} tx_hash
 */
LnrpcTransaction.prototype['tx_hash'] = undefined;

/**
 * @member {String} amount
 */
LnrpcTransaction.prototype['amount'] = undefined;

/**
 * @member {Number} num_confirmations
 */
LnrpcTransaction.prototype['num_confirmations'] = undefined;

/**
 * @member {String} block_hash
 */
LnrpcTransaction.prototype['block_hash'] = undefined;

/**
 * @member {Number} block_height
 */
LnrpcTransaction.prototype['block_height'] = undefined;

/**
 * @member {String} time_stamp
 */
LnrpcTransaction.prototype['time_stamp'] = undefined;

/**
 * @member {String} total_fees
 */
LnrpcTransaction.prototype['total_fees'] = undefined;

/**
 * @member {Array.<String>} dest_addresses
 */
LnrpcTransaction.prototype['dest_addresses'] = undefined;

/**
 * The raw transaction hex.
 * @member {String} raw_tx_hex
 */
LnrpcTransaction.prototype['raw_tx_hex'] = undefined;

/**
 * A label that was optionally set on transaction broadcast.
 * @member {String} label
 */
LnrpcTransaction.prototype['label'] = undefined;






export default LnrpcTransaction;


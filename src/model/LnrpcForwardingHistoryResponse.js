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
import LnrpcForwardingEvent from './LnrpcForwardingEvent';

/**
 * The LnrpcForwardingHistoryResponse model module.
 * @module model/LnrpcForwardingHistoryResponse
 * @version version not set
 */
class LnrpcForwardingHistoryResponse {
    /**
     * Constructs a new <code>LnrpcForwardingHistoryResponse</code>.
     * @alias module:model/LnrpcForwardingHistoryResponse
     */
    constructor() { 
        LnrpcForwardingHistoryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcForwardingHistoryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcForwardingHistoryResponse} obj Optional instance to populate.
     * @return {module:model/LnrpcForwardingHistoryResponse} The populated <code>LnrpcForwardingHistoryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcForwardingHistoryResponse();

            if (data.hasOwnProperty('forwarding_events')) {
                obj['forwarding_events'] = ApiClient.convertToType(data['forwarding_events'], [LnrpcForwardingEvent]);
            }
            if (data.hasOwnProperty('last_offset_index')) {
                obj['last_offset_index'] = ApiClient.convertToType(data['last_offset_index'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A list of forwarding events from the time slice of the time series specified in the request.
 * @member {Array.<module:model/LnrpcForwardingEvent>} forwarding_events
 */
LnrpcForwardingHistoryResponse.prototype['forwarding_events'] = undefined;

/**
 * The index of the last time in the set of returned forwarding events. Can be used to seek further, pagination style.
 * @member {Number} last_offset_index
 */
LnrpcForwardingHistoryResponse.prototype['last_offset_index'] = undefined;






export default LnrpcForwardingHistoryResponse;

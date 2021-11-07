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
import LnrpcChannelPoint from './LnrpcChannelPoint';
import LnrpcRoutingPolicy from './LnrpcRoutingPolicy';

/**
 * The LnrpcChannelEdgeUpdate model module.
 * @module model/LnrpcChannelEdgeUpdate
 * @version version not set
 */
class LnrpcChannelEdgeUpdate {
    /**
     * Constructs a new <code>LnrpcChannelEdgeUpdate</code>.
     * @alias module:model/LnrpcChannelEdgeUpdate
     */
    constructor() { 
        LnrpcChannelEdgeUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LnrpcChannelEdgeUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LnrpcChannelEdgeUpdate} obj Optional instance to populate.
     * @return {module:model/LnrpcChannelEdgeUpdate} The populated <code>LnrpcChannelEdgeUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LnrpcChannelEdgeUpdate();

            if (data.hasOwnProperty('chan_id')) {
                obj['chan_id'] = ApiClient.convertToType(data['chan_id'], 'String');
            }
            if (data.hasOwnProperty('chan_point')) {
                obj['chan_point'] = LnrpcChannelPoint.constructFromObject(data['chan_point']);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'String');
            }
            if (data.hasOwnProperty('routing_policy')) {
                obj['routing_policy'] = LnrpcRoutingPolicy.constructFromObject(data['routing_policy']);
            }
            if (data.hasOwnProperty('advertising_node')) {
                obj['advertising_node'] = ApiClient.convertToType(data['advertising_node'], 'String');
            }
            if (data.hasOwnProperty('connecting_node')) {
                obj['connecting_node'] = ApiClient.convertToType(data['connecting_node'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The unique channel ID for the channel. The first 3 bytes are the block height, the next 3 the index within the block, and the last 2 bytes are the output index for the channel.
 * @member {String} chan_id
 */
LnrpcChannelEdgeUpdate.prototype['chan_id'] = undefined;

/**
 * @member {module:model/LnrpcChannelPoint} chan_point
 */
LnrpcChannelEdgeUpdate.prototype['chan_point'] = undefined;

/**
 * @member {String} capacity
 */
LnrpcChannelEdgeUpdate.prototype['capacity'] = undefined;

/**
 * @member {module:model/LnrpcRoutingPolicy} routing_policy
 */
LnrpcChannelEdgeUpdate.prototype['routing_policy'] = undefined;

/**
 * @member {String} advertising_node
 */
LnrpcChannelEdgeUpdate.prototype['advertising_node'] = undefined;

/**
 * @member {String} connecting_node
 */
LnrpcChannelEdgeUpdate.prototype['connecting_node'] = undefined;






export default LnrpcChannelEdgeUpdate;


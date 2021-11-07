# lnd.LnrpcSendRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dest** | **Blob** | The identity pubkey of the payment recipient. When using REST, this field must be encoded as base64. | [optional] 
**destString** | **String** | The hex-encoded identity pubkey of the payment recipient. Deprecated now that the REST gateway supports base64 encoding of bytes fields. | [optional] 
**amt** | **String** | The amount to send expressed in satoshis.  The fields amt and amt_msat are mutually exclusive. | [optional] 
**amtMsat** | **String** | The amount to send expressed in millisatoshis.  The fields amt and amt_msat are mutually exclusive. | [optional] 
**paymentHash** | **Blob** | The hash to use within the payment&#39;s HTLC. When using REST, this field must be encoded as base64. | [optional] 
**paymentHashString** | **String** | The hex-encoded hash to use within the payment&#39;s HTLC. Deprecated now that the REST gateway supports base64 encoding of bytes fields. | [optional] 
**paymentRequest** | **String** | A bare-bones invoice for a payment within the Lightning Network. With the details of the invoice, the sender has all the data necessary to send a payment to the recipient. | [optional] 
**finalCltvDelta** | **Number** | The CLTV delta from the current height that should be used to set the timelock for the final hop. | [optional] 
**feeLimit** | [**LnrpcFeeLimit**](LnrpcFeeLimit.md) |  | [optional] 
**outgoingChanId** | **String** | The channel id of the channel that must be taken to the first hop. If zero, any channel may be used. | [optional] 
**lastHopPubkey** | **Blob** | The pubkey of the last hop of the route. If empty, any hop may be used. | [optional] 
**cltvLimit** | **Number** | An optional maximum total time lock for the route. This should not exceed lnd&#39;s &#x60;--max-cltv-expiry&#x60; setting. If zero, then the value of &#x60;--max-cltv-expiry&#x60; is enforced. | [optional] 
**destCustomRecords** | **{String: Blob}** | An optional field that can be used to pass an arbitrary set of TLV records to a peer which understands the new records. This can be used to pass application specific data during the payment attempt. Record types are required to be in the custom range &gt;&#x3D; 65536. When using REST, the values must be encoded as base64. | [optional] 
**allowSelfPayment** | **Boolean** | If set, circular payments to self are permitted. | [optional] 
**destFeatures** | [**[LnrpcFeatureBit]**](LnrpcFeatureBit.md) | Features assumed to be supported by the final node. All transitive feature dependencies must also be set properly. For a given feature bit pair, either optional or remote may be set, but not both. If this field is nil or empty, the router will try to load destination features from the graph as a fallback. | [optional] 
**paymentAddr** | **Blob** | The payment address of the generated invoice. | [optional] 



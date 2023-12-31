/* tslint:disable */
/* eslint-disable */
/**
 * W3S
 * All W3S APIs
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { SchemasBlockchain } from './schemas-blockchain';

/**
 * 
 * @export
 * @interface ValidateAddressRequest
 */
export interface ValidateAddressRequest {
    /**
     * The blockchain address generated upon wallet creation.
     * @type {string}
     * @memberof ValidateAddressRequest
     */
    'address': string;
    /**
     * 
     * @type {SchemasBlockchain}
     * @memberof ValidateAddressRequest
     */
    'blockchain': SchemasBlockchain;
}




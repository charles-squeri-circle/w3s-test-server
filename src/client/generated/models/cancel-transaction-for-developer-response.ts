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
import { TransactionState } from './transaction-state';

/**
 * 
 * @export
 * @interface CancelTransactionForDeveloperResponse
 */
export interface CancelTransactionForDeveloperResponse {
    /**
     * Unique system generated identifier of the resource.
     * @type {string}
     * @memberof CancelTransactionForDeveloperResponse
     */
    'id': string;
    /**
     * 
     * @type {TransactionState}
     * @memberof CancelTransactionForDeveloperResponse
     */
    'state': TransactionState;
}




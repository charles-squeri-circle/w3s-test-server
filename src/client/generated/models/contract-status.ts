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



/**
 * The status of the contract.
 * @export
 * @enum {string}
 */

export const ContractStatus = {
    Pending: 'PENDING',
    Failed: 'FAILED',
    Complete: 'COMPLETE'
} as const;

export type ContractStatus = typeof ContractStatus[keyof typeof ContractStatus];



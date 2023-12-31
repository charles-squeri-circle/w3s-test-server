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
 * The input type for the contract.
 * @export
 * @enum {string}
 */

export const ContractInputType = {
    Import: 'IMPORT',
    Bytecode: 'BYTECODE',
    Template: 'TEMPLATE'
} as const;

export type ContractInputType = typeof ContractInputType[keyof typeof ContractInputType];




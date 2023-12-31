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
 * The blockchain network the resource will be created on or is currently on.
 * @export
 * @enum {string}
 */

export const ScpSchemasBlockchain = {
    EthGoerli: 'ETH-GOERLI',
    Eth: 'ETH',
    MaticMumbai: 'MATIC-MUMBAI',
    Matic: 'MATIC'
} as const;

export type ScpSchemasBlockchain = typeof ScpSchemasBlockchain[keyof typeof ScpSchemasBlockchain];




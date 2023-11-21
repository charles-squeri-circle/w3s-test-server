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
 * Source code of a contract from Etherscan.
 * @export
 * @interface SolFile
 */
export interface SolFile {
    /**
     * Name of the file.
     * @type {string}
     * @memberof SolFile
     */
    'fileName'?: string;
    /**
     * Content of the file. If the contract\'s source code was flattened before verification, this may be the entire source code.
     * @type {string}
     * @memberof SolFile
     */
    'fileContent': string;
}


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
 * 
 * @export
 * @interface TemplateContractDeploymentResponse
 */
export interface TemplateContractDeploymentResponse {
    /**
     * Unique identifiers of the created smart contracts.
     * @type {Array<string>}
     * @memberof TemplateContractDeploymentResponse
     */
    'contractIds'?: Array<string>;
    /**
     * Unique identifier of the pending deployment transaction. transaction.
     * @type {string}
     * @memberof TemplateContractDeploymentResponse
     */
    'transactionId'?: string;
}


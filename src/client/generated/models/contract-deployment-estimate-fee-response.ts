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
import { ModelTransactionFee } from './model-transaction-fee';

/**
 * 
 * @export
 * @interface ContractDeploymentEstimateFeeResponse
 */
export interface ContractDeploymentEstimateFeeResponse {
    /**
     * 
     * @type {ModelTransactionFee}
     * @memberof ContractDeploymentEstimateFeeResponse
     */
    'high'?: ModelTransactionFee;
    /**
     * 
     * @type {ModelTransactionFee}
     * @memberof ContractDeploymentEstimateFeeResponse
     */
    'low'?: ModelTransactionFee;
    /**
     * 
     * @type {ModelTransactionFee}
     * @memberof ContractDeploymentEstimateFeeResponse
     */
    'medium'?: ModelTransactionFee;
}


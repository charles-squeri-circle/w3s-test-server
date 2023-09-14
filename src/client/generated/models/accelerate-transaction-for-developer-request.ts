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
 * @interface AccelerateTransactionForDeveloperRequest
 */
export interface AccelerateTransactionForDeveloperRequest {
    /**
     * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests. To create a UUIDv4 go to [uuidgenerator.net](https://www.uuidgenerator.net).
     * @type {string}
     * @memberof AccelerateTransactionForDeveloperRequest
     */
    'idempotencyKey': string;
    /**
     * A base64 string expression of the entity secret ciphertext. The entity secret should be encrypted by the entity public key. Circle mandates that the entity secret ciphertext is unique for each API request. 
     * @type {string}
     * @memberof AccelerateTransactionForDeveloperRequest
     */
    'entitySecretCiphertext': string;
}


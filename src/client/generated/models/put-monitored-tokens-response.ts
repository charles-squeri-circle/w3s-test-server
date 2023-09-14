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
import { TokenMonitorScope } from './token-monitor-scope';
// May contain unused imports in some cases
// @ts-ignore
import { TokenResponse } from './token-response';

/**
 * 
 * @export
 * @interface PutMonitoredTokensResponse
 */
export interface PutMonitoredTokensResponse {
    /**
     * 
     * @type {TokenMonitorScope}
     * @memberof PutMonitoredTokensResponse
     */
    'scope'?: TokenMonitorScope;
    /**
     * The list of tokens that have been added to the monitored tokens list. When fetching wallet balances, these tokens will be shown by default.
     * @type {Array<TokenResponse>}
     * @memberof PutMonitoredTokensResponse
     */
    'tokens'?: Array<TokenResponse>;
}




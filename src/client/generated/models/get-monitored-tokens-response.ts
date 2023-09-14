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
 * @interface GetMonitoredTokensResponse
 */
export interface GetMonitoredTokensResponse {
    /**
     * 
     * @type {TokenMonitorScope}
     * @memberof GetMonitoredTokensResponse
     */
    'scope'?: TokenMonitorScope;
    /**
     * The list of tokens that are currently on the monitored tokens list. When fetching wallet balances, only these tokens will be shown by default.
     * @type {Array<TokenResponse>}
     * @memberof GetMonitoredTokensResponse
     */
    'tokens'?: Array<TokenResponse>;
}




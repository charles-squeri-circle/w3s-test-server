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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateMonitoredTokens200Response } from '../models';
// @ts-ignore
import { DeleteMonitoredTokensRequest } from '../models';
// @ts-ignore
import { ListMonitoredTokens200Response } from '../models';
// @ts-ignore
import { PostMonitoredTokensRequest } from '../models';
// @ts-ignore
import { PutMonitoredTokensRequest } from '../models';
// @ts-ignore
import { PutMonitoredTokensScopeRequest } from '../models';
// @ts-ignore
import { UpdateMonitoredTokens200Response } from '../models';
/**
 * MonitorTokensApi - axios parameter creator
 * @export
 */
export const MonitorTokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a new token to the monitored token list.
         * @summary Set monitored tokens
         * @param {PostMonitoredTokensRequest} postMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMonitoredTokens: async (postMonitoredTokensRequest: PostMonitoredTokensRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'postMonitoredTokensRequest' is not null or undefined
            assertParamExists('createMonitoredTokens', 'postMonitoredTokensRequest', postMonitoredTokensRequest)
            const localVarPath = `/config/entity/monitoredTokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(postMonitoredTokensRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete tokens from the monitored token list.
         * @summary Delete monitored tokens
         * @param {DeleteMonitoredTokensRequest} deleteMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMonitoredTokens: async (deleteMonitoredTokensRequest: DeleteMonitoredTokensRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'deleteMonitoredTokensRequest' is not null or undefined
            assertParamExists('deleteMonitoredTokens', 'deleteMonitoredTokensRequest', deleteMonitoredTokensRequest)
            const localVarPath = `/config/entity/monitoredTokens/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteMonitoredTokensRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get monitored tokens
         * @summary Retreive existing monitored tokens.
         * @param {ListMonitoredTokensBlockchainEnum} [blockchain] Blockchain filters on the blockchain of the transaction
         * @param {string} [tokenAddress] 
         * @param {string} [symbol] 
         * @param {string} [from] From is the start time of the query, inclusive
         * @param {string} [to] To is the end time of the query, inclusive, default to current time
         * @param {string} [pageBefore] PageBefore is used to return items before the given item exclusively. SHOULD NOT be used in conjunction with pageAfter
         * @param {string} [pageAfter] PageAfter is used to return items after the given item exclusively. SHOULD NOT be used in conjunction with pageBefore
         * @param {number} [pageSize] PageSize is the number of items to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMonitoredTokens: async (blockchain?: ListMonitoredTokensBlockchainEnum, tokenAddress?: string, symbol?: string, from?: string, to?: string, pageBefore?: string, pageAfter?: string, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/config/entity/monitoredTokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (blockchain !== undefined) {
                localVarQueryParameter['blockchain'] = blockchain;
            }

            if (tokenAddress !== undefined) {
                localVarQueryParameter['tokenAddress'] = tokenAddress;
            }

            if (symbol !== undefined) {
                localVarQueryParameter['symbol'] = symbol;
            }

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString() :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString() :
                    to;
            }

            if (pageBefore !== undefined) {
                localVarQueryParameter['pageBefore'] = pageBefore;
            }

            if (pageAfter !== undefined) {
                localVarQueryParameter['pageAfter'] = pageAfter;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Edit the monitored token list.
         * @summary Update monitored tokens
         * @param {PutMonitoredTokensRequest} putMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMonitoredTokens: async (putMonitoredTokensRequest: PutMonitoredTokensRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'putMonitoredTokensRequest' is not null or undefined
            assertParamExists('updateMonitoredTokens', 'putMonitoredTokensRequest', putMonitoredTokensRequest)
            const localVarPath = `/config/entity/monitoredTokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(putMonitoredTokensRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Select between monitoring all tokens or selected tokens added to the monitored tokens list.
         * @summary Update monitored tokens scope
         * @param {PutMonitoredTokensScopeRequest} putMonitoredTokensScopeRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMonitoredTokensScope: async (putMonitoredTokensScopeRequest: PutMonitoredTokensScopeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'putMonitoredTokensScopeRequest' is not null or undefined
            assertParamExists('updateMonitoredTokensScope', 'putMonitoredTokensScopeRequest', putMonitoredTokensScopeRequest)
            const localVarPath = `/config/entity/monitoredTokens/scope`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(putMonitoredTokensScopeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MonitorTokensApi - functional programming interface
 * @export
 */
export const MonitorTokensApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MonitorTokensApiAxiosParamCreator(configuration)
    return {
        /**
         * Add a new token to the monitored token list.
         * @summary Set monitored tokens
         * @param {PostMonitoredTokensRequest} postMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMonitoredTokens(postMonitoredTokensRequest: PostMonitoredTokensRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateMonitoredTokens200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMonitoredTokens(postMonitoredTokensRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete tokens from the monitored token list.
         * @summary Delete monitored tokens
         * @param {DeleteMonitoredTokensRequest} deleteMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMonitoredTokens(deleteMonitoredTokensRequest: DeleteMonitoredTokensRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMonitoredTokens(deleteMonitoredTokensRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get monitored tokens
         * @summary Retreive existing monitored tokens.
         * @param {ListMonitoredTokensBlockchainEnum} [blockchain] Blockchain filters on the blockchain of the transaction
         * @param {string} [tokenAddress] 
         * @param {string} [symbol] 
         * @param {string} [from] From is the start time of the query, inclusive
         * @param {string} [to] To is the end time of the query, inclusive, default to current time
         * @param {string} [pageBefore] PageBefore is used to return items before the given item exclusively. SHOULD NOT be used in conjunction with pageAfter
         * @param {string} [pageAfter] PageAfter is used to return items after the given item exclusively. SHOULD NOT be used in conjunction with pageBefore
         * @param {number} [pageSize] PageSize is the number of items to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMonitoredTokens(blockchain?: ListMonitoredTokensBlockchainEnum, tokenAddress?: string, symbol?: string, from?: string, to?: string, pageBefore?: string, pageAfter?: string, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListMonitoredTokens200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMonitoredTokens(blockchain, tokenAddress, symbol, from, to, pageBefore, pageAfter, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Edit the monitored token list.
         * @summary Update monitored tokens
         * @param {PutMonitoredTokensRequest} putMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMonitoredTokens(putMonitoredTokensRequest: PutMonitoredTokensRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateMonitoredTokens200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMonitoredTokens(putMonitoredTokensRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Select between monitoring all tokens or selected tokens added to the monitored tokens list.
         * @summary Update monitored tokens scope
         * @param {PutMonitoredTokensScopeRequest} putMonitoredTokensScopeRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMonitoredTokensScope(putMonitoredTokensScopeRequest: PutMonitoredTokensScopeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMonitoredTokensScope(putMonitoredTokensScopeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MonitorTokensApi - factory interface
 * @export
 */
export const MonitorTokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MonitorTokensApiFp(configuration)
    return {
        /**
         * Add a new token to the monitored token list.
         * @summary Set monitored tokens
         * @param {PostMonitoredTokensRequest} postMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMonitoredTokens(postMonitoredTokensRequest: PostMonitoredTokensRequest, options?: any): AxiosPromise<CreateMonitoredTokens200Response> {
            return localVarFp.createMonitoredTokens(postMonitoredTokensRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete tokens from the monitored token list.
         * @summary Delete monitored tokens
         * @param {DeleteMonitoredTokensRequest} deleteMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMonitoredTokens(deleteMonitoredTokensRequest: DeleteMonitoredTokensRequest, options?: any): AxiosPromise<void> {
            return localVarFp.deleteMonitoredTokens(deleteMonitoredTokensRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get monitored tokens
         * @summary Retreive existing monitored tokens.
         * @param {ListMonitoredTokensBlockchainEnum} [blockchain] Blockchain filters on the blockchain of the transaction
         * @param {string} [tokenAddress] 
         * @param {string} [symbol] 
         * @param {string} [from] From is the start time of the query, inclusive
         * @param {string} [to] To is the end time of the query, inclusive, default to current time
         * @param {string} [pageBefore] PageBefore is used to return items before the given item exclusively. SHOULD NOT be used in conjunction with pageAfter
         * @param {string} [pageAfter] PageAfter is used to return items after the given item exclusively. SHOULD NOT be used in conjunction with pageBefore
         * @param {number} [pageSize] PageSize is the number of items to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMonitoredTokens(blockchain?: ListMonitoredTokensBlockchainEnum, tokenAddress?: string, symbol?: string, from?: string, to?: string, pageBefore?: string, pageAfter?: string, pageSize?: number, options?: any): AxiosPromise<ListMonitoredTokens200Response> {
            return localVarFp.listMonitoredTokens(blockchain, tokenAddress, symbol, from, to, pageBefore, pageAfter, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Edit the monitored token list.
         * @summary Update monitored tokens
         * @param {PutMonitoredTokensRequest} putMonitoredTokensRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMonitoredTokens(putMonitoredTokensRequest: PutMonitoredTokensRequest, options?: any): AxiosPromise<UpdateMonitoredTokens200Response> {
            return localVarFp.updateMonitoredTokens(putMonitoredTokensRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Select between monitoring all tokens or selected tokens added to the monitored tokens list.
         * @summary Update monitored tokens scope
         * @param {PutMonitoredTokensScopeRequest} putMonitoredTokensScopeRequest Request body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMonitoredTokensScope(putMonitoredTokensScopeRequest: PutMonitoredTokensScopeRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateMonitoredTokensScope(putMonitoredTokensScopeRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MonitorTokensApi - object-oriented interface
 * @export
 * @class MonitorTokensApi
 * @extends {BaseAPI}
 */
export class MonitorTokensApi extends BaseAPI {
    /**
     * Add a new token to the monitored token list.
     * @summary Set monitored tokens
     * @param {PostMonitoredTokensRequest} postMonitoredTokensRequest Request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MonitorTokensApi
     */
    public createMonitoredTokens(postMonitoredTokensRequest: PostMonitoredTokensRequest, options?: AxiosRequestConfig) {
        return MonitorTokensApiFp(this.configuration).createMonitoredTokens(postMonitoredTokensRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete tokens from the monitored token list.
     * @summary Delete monitored tokens
     * @param {DeleteMonitoredTokensRequest} deleteMonitoredTokensRequest Request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MonitorTokensApi
     */
    public deleteMonitoredTokens(deleteMonitoredTokensRequest: DeleteMonitoredTokensRequest, options?: AxiosRequestConfig) {
        return MonitorTokensApiFp(this.configuration).deleteMonitoredTokens(deleteMonitoredTokensRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get monitored tokens
     * @summary Retreive existing monitored tokens.
     * @param {ListMonitoredTokensBlockchainEnum} [blockchain] Blockchain filters on the blockchain of the transaction
     * @param {string} [tokenAddress] 
     * @param {string} [symbol] 
     * @param {string} [from] From is the start time of the query, inclusive
     * @param {string} [to] To is the end time of the query, inclusive, default to current time
     * @param {string} [pageBefore] PageBefore is used to return items before the given item exclusively. SHOULD NOT be used in conjunction with pageAfter
     * @param {string} [pageAfter] PageAfter is used to return items after the given item exclusively. SHOULD NOT be used in conjunction with pageBefore
     * @param {number} [pageSize] PageSize is the number of items to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MonitorTokensApi
     */
    public listMonitoredTokens(blockchain?: ListMonitoredTokensBlockchainEnum, tokenAddress?: string, symbol?: string, from?: string, to?: string, pageBefore?: string, pageAfter?: string, pageSize?: number, options?: AxiosRequestConfig) {
        return MonitorTokensApiFp(this.configuration).listMonitoredTokens(blockchain, tokenAddress, symbol, from, to, pageBefore, pageAfter, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Edit the monitored token list.
     * @summary Update monitored tokens
     * @param {PutMonitoredTokensRequest} putMonitoredTokensRequest Request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MonitorTokensApi
     */
    public updateMonitoredTokens(putMonitoredTokensRequest: PutMonitoredTokensRequest, options?: AxiosRequestConfig) {
        return MonitorTokensApiFp(this.configuration).updateMonitoredTokens(putMonitoredTokensRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Select between monitoring all tokens or selected tokens added to the monitored tokens list.
     * @summary Update monitored tokens scope
     * @param {PutMonitoredTokensScopeRequest} putMonitoredTokensScopeRequest Request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MonitorTokensApi
     */
    public updateMonitoredTokensScope(putMonitoredTokensScopeRequest: PutMonitoredTokensScopeRequest, options?: AxiosRequestConfig) {
        return MonitorTokensApiFp(this.configuration).updateMonitoredTokensScope(putMonitoredTokensScopeRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const ListMonitoredTokensBlockchainEnum = {
    Eth: 'ETH',
    EthGoerli: 'ETH-GOERLI',
    Avax: 'AVAX',
    AvaxFuji: 'AVAX-FUJI',
    Matic: 'MATIC',
    MaticMumbai: 'MATIC-MUMBAI'
} as const;
export type ListMonitoredTokensBlockchainEnum = typeof ListMonitoredTokensBlockchainEnum[keyof typeof ListMonitoredTokensBlockchainEnum];

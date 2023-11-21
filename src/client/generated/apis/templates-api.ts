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
import { EstimateDeployContractByTemplateFeeRequest } from '../models';
// @ts-ignore
import { EstimateDeployContractByTemplateFeeResponse } from '../models';
// @ts-ignore
import { TemplateContractDeploymentRequest } from '../models';
// @ts-ignore
import { TemplateContractDeploymentResponse } from '../models';
/**
 * TemplatesApi - axios parameter creator
 * @export
 */
export const TemplatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deploy a smart contract using a template.
         * @summary Deploy a contract from a template
         * @param {string} id Template id
         * @param {TemplateContractDeploymentRequest} templateContractDeploymentRequest Deploy contract by template request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractTemplate: async (id: string, templateContractDeploymentRequest: TemplateContractDeploymentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deployContractTemplate', 'id', id)
            // verify required parameter 'templateContractDeploymentRequest' is not null or undefined
            assertParamExists('deployContractTemplate', 'templateContractDeploymentRequest', templateContractDeploymentRequest)
            const localVarPath = `/templates/{id}/deploy`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(templateContractDeploymentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Estimate the fee required to deploy contract by template.
         * @summary Estimate fee for a contract template deployment
         * @param {string} id Template id
         * @param {EstimateDeployContractByTemplateFeeRequest} estimateDeployContractByTemplateFeeRequest Request object for estimating the transaction fees for deploying a contract from a template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        estimateContractTemplateDeploy: async (id: string, estimateDeployContractByTemplateFeeRequest: EstimateDeployContractByTemplateFeeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('estimateContractTemplateDeploy', 'id', id)
            // verify required parameter 'estimateDeployContractByTemplateFeeRequest' is not null or undefined
            assertParamExists('estimateContractTemplateDeploy', 'estimateDeployContractByTemplateFeeRequest', estimateDeployContractByTemplateFeeRequest)
            const localVarPath = `/templates/{id}/deploy/estimateFee`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(estimateDeployContractByTemplateFeeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TemplatesApi - functional programming interface
 * @export
 */
export const TemplatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TemplatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Deploy a smart contract using a template.
         * @summary Deploy a contract from a template
         * @param {string} id Template id
         * @param {TemplateContractDeploymentRequest} templateContractDeploymentRequest Deploy contract by template request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deployContractTemplate(id: string, templateContractDeploymentRequest: TemplateContractDeploymentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TemplateContractDeploymentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deployContractTemplate(id, templateContractDeploymentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Estimate the fee required to deploy contract by template.
         * @summary Estimate fee for a contract template deployment
         * @param {string} id Template id
         * @param {EstimateDeployContractByTemplateFeeRequest} estimateDeployContractByTemplateFeeRequest Request object for estimating the transaction fees for deploying a contract from a template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async estimateContractTemplateDeploy(id: string, estimateDeployContractByTemplateFeeRequest: EstimateDeployContractByTemplateFeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EstimateDeployContractByTemplateFeeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.estimateContractTemplateDeploy(id, estimateDeployContractByTemplateFeeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TemplatesApi - factory interface
 * @export
 */
export const TemplatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TemplatesApiFp(configuration)
    return {
        /**
         * Deploy a smart contract using a template.
         * @summary Deploy a contract from a template
         * @param {string} id Template id
         * @param {TemplateContractDeploymentRequest} templateContractDeploymentRequest Deploy contract by template request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractTemplate(id: string, templateContractDeploymentRequest: TemplateContractDeploymentRequest, options?: any): AxiosPromise<TemplateContractDeploymentResponse> {
            return localVarFp.deployContractTemplate(id, templateContractDeploymentRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Estimate the fee required to deploy contract by template.
         * @summary Estimate fee for a contract template deployment
         * @param {string} id Template id
         * @param {EstimateDeployContractByTemplateFeeRequest} estimateDeployContractByTemplateFeeRequest Request object for estimating the transaction fees for deploying a contract from a template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        estimateContractTemplateDeploy(id: string, estimateDeployContractByTemplateFeeRequest: EstimateDeployContractByTemplateFeeRequest, options?: any): AxiosPromise<EstimateDeployContractByTemplateFeeResponse> {
            return localVarFp.estimateContractTemplateDeploy(id, estimateDeployContractByTemplateFeeRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TemplatesApi - object-oriented interface
 * @export
 * @class TemplatesApi
 * @extends {BaseAPI}
 */
export class TemplatesApi extends BaseAPI {
    /**
     * Deploy a smart contract using a template.
     * @summary Deploy a contract from a template
     * @param {string} id Template id
     * @param {TemplateContractDeploymentRequest} templateContractDeploymentRequest Deploy contract by template request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApi
     */
    public deployContractTemplate(id: string, templateContractDeploymentRequest: TemplateContractDeploymentRequest, options?: AxiosRequestConfig) {
        return TemplatesApiFp(this.configuration).deployContractTemplate(id, templateContractDeploymentRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Estimate the fee required to deploy contract by template.
     * @summary Estimate fee for a contract template deployment
     * @param {string} id Template id
     * @param {EstimateDeployContractByTemplateFeeRequest} estimateDeployContractByTemplateFeeRequest Request object for estimating the transaction fees for deploying a contract from a template.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TemplatesApi
     */
    public estimateContractTemplateDeploy(id: string, estimateDeployContractByTemplateFeeRequest: EstimateDeployContractByTemplateFeeRequest, options?: AxiosRequestConfig) {
        return TemplatesApiFp(this.configuration).estimateContractTemplateDeploy(id, estimateDeployContractByTemplateFeeRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


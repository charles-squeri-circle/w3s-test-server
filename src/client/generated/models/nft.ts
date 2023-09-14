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
import { TokenResponse } from './token-response';

/**
 * 
 * @export
 * @interface Nft
 */
export interface Nft {
    /**
     * Amount of NFTs on a wallet. For non-fungible token standards, like ERC721, amount will always be “1”; for semi-fungible token standards like ERC1155, amount will correspond to the number of tokens.
     * @type {string}
     * @memberof Nft
     */
    'amount': string;
    /**
     * The metadata of the NFT.
     * @type {string}
     * @memberof Nft
     */
    'metadata'?: string;
    /**
     * The NFT token ID.
     * @type {string}
     * @memberof Nft
     */
    'nftTokenId': string;
    /**
     * 
     * @type {TokenResponse}
     * @memberof Nft
     */
    'token': TokenResponse;
    /**
     * Last update date of the resource. ISO-8601 UTC date/time.
     * @type {string}
     * @memberof Nft
     */
    'updateDate': string;
}


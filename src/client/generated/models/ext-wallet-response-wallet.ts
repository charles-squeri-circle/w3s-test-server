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
import { Blockchain } from './blockchain';
// May contain unused imports in some cases
// @ts-ignore
import { CustodyType } from './custody-type';
// May contain unused imports in some cases
// @ts-ignore
import { WalletState } from './wallet-state';

/**
 * 
 * @export
 * @interface ExtWalletResponseWallet
 */
export interface ExtWalletResponseWallet {
    /**
     * The blockchain address generated upon wallet creation.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'address'?: string;
    /**
     * 
     * @type {Blockchain}
     * @memberof ExtWalletResponseWallet
     */
    'blockchain'?: Blockchain;
    /**
     * Date and time the resource was created. ISO-8601 UTC date/time.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'createDate'?: string;
    /**
     * 
     * @type {CustodyType}
     * @memberof ExtWalletResponseWallet
     */
    'custodyType'?: CustodyType;
    /**
     * Unique system generated identifier of the resource.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'id'?: string;
    /**
     * Name or description associated with the wallet.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'name'?: string;
    /**
     * Optional reference or description used to identify the wallet.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'refId'?: string;
    /**
     * 
     * @type {WalletState}
     * @memberof ExtWalletResponseWallet
     */
    'state'?: WalletState;
    /**
     * Last update date of the resource. ISO-8601 UTC date/time.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'updateDate'?: string;
    /**
     * Unique system generated identifier for the user.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'userId'?: string;
    /**
     * Unique system generated identifier of the wallet\'s parent wallet set. under.
     * @type {string}
     * @memberof ExtWalletResponseWallet
     */
    'walletSetId'?: string;
}




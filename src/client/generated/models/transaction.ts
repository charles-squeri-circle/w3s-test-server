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
import { CustodyType } from './custody-type';
// May contain unused imports in some cases
// @ts-ignore
import { EstimatedTransactionFee } from './estimated-transaction-fee';
// May contain unused imports in some cases
// @ts-ignore
import { FeeLevel } from './fee-level';
// May contain unused imports in some cases
// @ts-ignore
import { Operation } from './operation';
// May contain unused imports in some cases
// @ts-ignore
import { SchemasBlockchain } from './schemas-blockchain';
// May contain unused imports in some cases
// @ts-ignore
import { TransactionState } from './transaction-state';
// May contain unused imports in some cases
// @ts-ignore
import { TransactionType } from './transaction-type';

/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * Unique system generated identifier of the resource.
     * @type {string}
     * @memberof Transaction
     */
    'id': string;
    /**
     * The contract ABI function signature or `callData` field is required for interacting with the smart contract. The ABI function signature cannot be used simultaneously with `callData`. e.g. burn(uint256)
     * @type {string}
     * @memberof Transaction
     */
    'abiFunctionSignature'?: string;
    /**
     * The contract ABI function signature parameters for executing the contract interaction. Supported parameter types include string, integer, boolean, and array. These parameters should be used exclusively with the abiFunctionSignature and cannot be used with `callData`.
     * @type {Array<string>}
     * @memberof Transaction
     */
    'abiParameters'?: Array<string>;
    /**
     * Transfer amount in decimal number format.
     * @type {Array<string>}
     * @memberof Transaction
     */
    'amounts'?: Array<string>;
    /**
     * Transaction amount in USD decimal format.
     * @type {string}
     * @memberof Transaction
     */
    'amountInUSD'?: string;
    /**
     * Identifier for the block that includes the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'blockHash'?: string;
    /**
     * Block height of the transaction, representing the number of blockchain confirmations.
     * @type {number}
     * @memberof Transaction
     */
    'blockHeight'?: number;
    /**
     * 
     * @type {SchemasBlockchain}
     * @memberof Transaction
     */
    'blockchain': SchemasBlockchain;
    /**
     * The blockchain address of the contract to be executed.
     * @type {string}
     * @memberof Transaction
     */
    'contractAddress'?: string;
    /**
     * Date and time the resource was created. ISO-8601 UTC date/time.
     * @type {string}
     * @memberof Transaction
     */
    'createDate': string;
    /**
     * 
     * @type {CustodyType}
     * @memberof Transaction
     */
    'custodyType'?: CustodyType;
    /**
     * The destination blockchain address for the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'destinationAddress'?: string;
    /**
     * Description of the error. Only present for transactions in `FAILED` state.
     * @type {string}
     * @memberof Transaction
     */
    'errorReason'?: string;
    /**
     * 
     * @type {EstimatedTransactionFee}
     * @memberof Transaction
     */
    'estimatedFee'?: EstimatedTransactionFee;
    /**
     * 
     * @type {FeeLevel}
     * @memberof Transaction
     */
    'feeLevel'?: FeeLevel;
    /**
     * Date the transaction was first confirmed in a block. ISO-8601 UTC date/time.
     * @type {string}
     * @memberof Transaction
     */
    'firstConfirmDate'?: string;
    /**
     * Gas fee, in native token, paid to the network for the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'networkFee'?: string;
    /**
     * Gas fee, in USD, paid to the network for the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'networkFeeInUSD'?: string;
    /**
     * List of Nfts, in JSON string format, associated with the transaction.
     * @type {Array<string>}
     * @memberof Transaction
     */
    'nfts'?: Array<string>;
    /**
     * 
     * @type {Operation}
     * @memberof Transaction
     */
    'operation'?: Operation;
    /**
     * Optional reference or description used to identify the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'refId'?: string;
    /**
     * The source blockchain address of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'sourceAddress'?: string;
    /**
     * 
     * @type {TransactionState}
     * @memberof Transaction
     */
    'state': TransactionState;
    /**
     * System generated identifier of the token.
     * @type {string}
     * @memberof Transaction
     */
    'tokenId'?: string;
    /**
     * 
     * @type {TransactionType}
     * @memberof Transaction
     */
    'transactionType': TransactionType;
    /**
     * Blockchain generated identifier of the transaction.
     * @type {string}
     * @memberof Transaction
     */
    'txHash'?: string;
    /**
     * Last update date of the resource. ISO-8601 UTC date/time.
     * @type {string}
     * @memberof Transaction
     */
    'updateDate': string;
    /**
     * Unique system generated identifier for the user.
     * @type {string}
     * @memberof Transaction
     */
    'userId'?: string;
    /**
     * Unique system generated identifier of the wallet. Required when source Address and blockchain is not provided. Mutually exclusive. For contract deploys this wallet ID will be used as the source.
     * @type {string}
     * @memberof Transaction
     */
    'walletId'?: string;
}




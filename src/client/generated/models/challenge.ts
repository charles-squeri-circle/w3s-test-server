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
 * @interface Challenge
 */
export interface Challenge {
    /**
     * Unique system generated identifier of the resource.
     * @type {string}
     * @memberof Challenge
     */
    'id': string;
    /**
     * For type CREATE_WALLET, the wallet id associated with the request. For types CREATE_TRANSACTION, ACCELERATE_TRANSACTION, and CANCEL_TRANSACTION, the transaction id associated with the request.  
     * @type {Array<string>}
     * @memberof Challenge
     */
    'correlationIds'?: Array<string>;
    /**
     * Indicates the failure reason of a challenge. Only present for challenges in FAILED status.
     * @type {number}
     * @memberof Challenge
     */
    'errorCode'?: number;
    /**
     * Description of the error or error reason. Only present for challenges in FAILED status.
     * @type {string}
     * @memberof Challenge
     */
    'errorMessage'?: string;
    /**
     * 
     * @type {string}
     * @memberof Challenge
     */
    'status': ChallengeStatusEnum;
    /**
     * The challenge type
     * @type {string}
     * @memberof Challenge
     */
    'type': ChallengeTypeEnum;
}

export const ChallengeStatusEnum = {
    Pending: 'PENDING',
    InProgress: 'IN_PROGRESS',
    Complete: 'COMPLETE',
    Failed: 'FAILED',
    Expired: 'EXPIRED'
} as const;

export type ChallengeStatusEnum = typeof ChallengeStatusEnum[keyof typeof ChallengeStatusEnum];
export const ChallengeTypeEnum = {
    Empty: '',
    Initialize: 'INITIALIZE',
    SetPin: 'SET_PIN',
    ChangePin: 'CHANGE_PIN',
    SetSecurityQuestions: 'SET_SECURITY_QUESTIONS',
    CreateWallet: 'CREATE_WALLET',
    RestorePin: 'RESTORE_PIN',
    CreateTransaction: 'CREATE_TRANSACTION',
    AccelerateTransaction: 'ACCELERATE_TRANSACTION',
    CancelTransaction: 'CANCEL_TRANSACTION',
    ContractExecution: 'CONTRACT_EXECUTION',
    SignMessage: 'SIGN_MESSAGE',
    SignTypeddata: 'SIGN_TYPEDDATA'
} as const;

export type ChallengeTypeEnum = typeof ChallengeTypeEnum[keyof typeof ChallengeTypeEnum];



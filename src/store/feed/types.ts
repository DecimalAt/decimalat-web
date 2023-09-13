// This file holds our state type, as well as any other types related to this Redux store.

// Response object for GET /feed
// DUMMY API: https://docs.opendota.com/#tag/heroes%2Fpaths%2F~1heroes%2Fget
// export interface Feed extends ApiResponse {
//     id: number
//     name: string
//     localized_name: string
//     primary_attr: string
//     attack_type: string
//     roles: string[]
//     img: string
//     icon: string
//     base_health: number
//     base_health_regen: number
//     base_mana: number
//     base_mana_regen: number
//     base_armor: number
//     base_mr: number
//     base_attack_min: number
//     base_attack_max: number
//     base_str: number
//     base_agi: number
//     base_int: number
//     str_gain: number
//     agi_gain: number
//     int_gain: number
//     attack_range: number
//     projectile_speed: number
//     attack_rate: number
//     move_speed: number
//     turn_rate: number
//     cm_enabled: boolean
//     legs: number
// }

// // the expected return type of the API response.
// export type ApiResponse = Record<string, any>

// // using the `@@context/ACTION_TYPE` convention, this follows the convention of Redux's `@@INIT` action.
// export enum FeedActionTypes {
//     FETCH_REQUEST = '@@feed/FETCH_REQUEST',
//     FETCH_SUCCESS = '@@feed/FETCH_SUCCESS',
//     FETCH_ERROR = '@@feed/FETCH_ERROR',
//     SELECT_FEED = '@@feed/SELECT_FEED',
//     SELECTED = '@@feed/SELECTED'
// }

// // Declare state types with `readonly` modifier to get compile time immutability.
// export interface FeedState {
//     readonly loading: boolean
//     readonly data: any //Feed[]
//     readonly error?: string
// }

// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// export const fetchDataRequest = () => ({
//   type: FETCH_DATA_REQUEST,
// });

// export const fetchDataSuccess = (data: any) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// export const fetchDataFailure = (error: any) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: error,
// });

export interface FeedState {
    readonly data: Feed[]
    readonly errors?: string,
    readonly loading: boolean
};

type Param = {
    id: string;
};

export interface Job {
    id: string;
    creator: string;
    params: Param[];
    paymentPerExecution: string;
};

export interface Validation {
    id: string;
    job: {
        id: string;
    };
    index: string;
    params: Param[];
};

export interface Feed {
    jobs: Job[];
    validations: Validation[];
};
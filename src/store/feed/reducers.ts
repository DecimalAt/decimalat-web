import { Reducer } from 'redux'
// import { FeedState, FeedActionTypes } from './types'

// // Type-safe initialState
// export const initialState: FeedState = {
//     data: [],
//     error: undefined,
//     loading: false
// }

// // everything will remain type-safe
// const reducer: Reducer<FeedState> = (state = initialState, action) => {
//     switch (action.type) {
//         case FeedActionTypes.FETCH_REQUEST: {
//             return { ...state, loading: true }
//         }
//         case FeedActionTypes.FETCH_SUCCESS: {
//             return { ...state, loading: false, data: action.payload }
//         }
//         case FeedActionTypes.FETCH_ERROR: {
//             return { ...state, loading: false, error: action.payload }
//         }
//         default: {
//             return state
//         }
//     }
// }

// // named export
// export { reducer as feedReducer }

import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST } from './actions';
import { FeedState, Feed } from './types';

// interface FeedState {
//     jobs: Job[];
//     validations: Validation[];
//     error: any;
//     loading: boolean;
// }

// export const initialState: JobState = {
//     data: [],
//     errors: undefined,
//     loading: false
// }


export const initialState: FeedState = {
    data: {} as Feed,
    errors: undefined,
    loading: false
};

const reducer: Reducer<FeedState> = (state = initialState, action: any): FeedState => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                errors: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export { reducer as feedReducer }

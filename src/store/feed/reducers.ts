import { Reducer } from 'redux'
import { FeedState, FeedActionTypes } from './types'

// Type-safe initialState
export const initialState: FeedState = {
    data: [],
    errors: undefined,
    loading: false
}

// everything will remain type-safe
const reducer: Reducer<FeedState> = (state = initialState, action) => {
    switch (action.type) {
        case FeedActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case FeedActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload }
        }
        case FeedActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

// named export
export { reducer as feedReducer }
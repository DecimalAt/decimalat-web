import { Reducer } from 'redux'
import { JobState, JobActionTypes } from './types'

// Type-safe initialState
export const initialState: JobState = {
    data: [],
    errors: undefined,
    loading: false
}

// everything will remain type-safe
const reducer: Reducer<JobState> = (state = initialState, action) => {
    switch (action.type) {
        case JobActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case JobActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload }
        }
        case JobActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

// named export
export { reducer as jobReducer }
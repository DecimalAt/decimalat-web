import { Reducer } from 'redux'
import { DashboardState, DashboardActionTypes } from './types'

// Type-safe initialState
export const initialState: DashboardState = {
    data: [],
    errors: undefined,
    loading: false
}

// everything will remain type-safe
const reducer: Reducer<DashboardState> = (state = initialState, action) => {
    switch (action.type) {
        case DashboardActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case DashboardActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload }
        }
        case DashboardActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload }
        }
        default: {
            return state
        }
    }
}

// named export
export { reducer as dashboardReducer }
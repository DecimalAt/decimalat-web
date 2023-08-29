import { action } from 'typesafe-actions'
import { DashboardActionTypes, Dashboard } from './types'

// Here we are using the `action` helper function provided by `typesafe-actions`, for writing Redux actions in a type-safe manner.
export const fetchRequest = () => action(DashboardActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data: Dashboard[]) => action(DashboardActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(DashboardActionTypes.FETCH_ERROR, message)
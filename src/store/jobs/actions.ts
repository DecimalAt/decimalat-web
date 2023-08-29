import { action } from 'typesafe-actions'
import { JobActionTypes, Job } from './types'

// Here we are using the `action` helper function provided by `typesafe-actions`, for writing Redux actions in a type-safe manner.
export const fetchRequest = () => action(JobActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data: Job[]) => action(JobActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(JobActionTypes.FETCH_ERROR, message)
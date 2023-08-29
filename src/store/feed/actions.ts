import { action } from 'typesafe-actions'
import { FeedActionTypes, Feed } from './types'

// Here we are using the `action` helper function provided by `typesafe-actions`, for writing Redux actions in a type-safe manner.
export const fetchRequest = () => action(FeedActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data: Feed[]) => action(FeedActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(FeedActionTypes.FETCH_ERROR, message)
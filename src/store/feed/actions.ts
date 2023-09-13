// import { action } from 'typesafe-actions'
// import { FeedActionTypes, Feed } from './types'

// // Here we are using the `action` helper function provided by `typesafe-actions`, for writing Redux actions in a type-safe manner.
// export const fetchRequest = () => action(FeedActionTypes.FETCH_REQUEST)
// export const fetchSuccess = (data: any) => action(FeedActionTypes.FETCH_SUCCESS, data)
// export const fetchError = (error: any) => action(FeedActionTypes.FETCH_ERROR, error)

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchSuccess = (data: any) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchError = (error: any) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

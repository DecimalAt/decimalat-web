import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { Feed, FeedActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'

const API_ENDPOINT = /*process.env.REACT_APP_API_ENDPOINT ||*/ 'https://api.opendota.com' // TODO: Need to change the API end point as per the contract

function* handleFetch() {
    try {
        const res: Feed[] = yield call(callApi, 'get', API_ENDPOINT, '/heroStats') // TODO: Need to change the API end point as per the contract

        if (!res) {
            yield put(fetchError('Unable to fetch'))
        } else {
            yield put(fetchSuccess(res))
        }
    } catch (err) {
        debugger
        if (err instanceof Error && err.stack) {
            yield put(fetchError(err.stack))
        } else {
            yield put(fetchError('An unknown error occured.'))
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(FeedActionTypes.FETCH_REQUEST, handleFetch)
}

function* feedSaga() {
    yield all([fork(watchFetchRequest)])
}

export default feedSaga
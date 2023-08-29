import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { JobActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi, ResponseGenerator } from '../../utils/api'

const API_ENDPOINT = /*process.env.REACT_APP_API_ENDPOINT ||*/ 'https://api.opendota.com' // TODO: Need to change the API end point as per the contract

function* handleFetch() {
    try {
        const res: ResponseGenerator = yield call(callApi, 'get', API_ENDPOINT, '/heroStats') // TODO: Need to change the API end point as per the contract

        if (res.error) {
            yield put(fetchError(res.error))
        } else {
            yield put(fetchSuccess(res.data))
        }
    } catch (err) {
        if (err instanceof Error && err.stack) {
            yield put(fetchError(err.stack))
        } else {
            yield put(fetchError('An unknown error occured.'))
        }
    }
}

function* watchFetchRequest() {
    yield takeEvery(JobActionTypes.FETCH_REQUEST, handleFetch)
}

function* jobSaga() {
    yield all([fork(watchFetchRequest)])
}

export default jobSaga
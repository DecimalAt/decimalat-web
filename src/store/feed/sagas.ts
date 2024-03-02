import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Feed, FeedActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import { callApi } from '../../utils/api'
// import { client } from '../../graphql/apollo';
// import { gql } from '@apollo/client';

// //const API_ENDPOINT = /*process.env.REACT_APP_API_ENDPOINT ||*/ 'https://api.opendota.com' // TODO: Need to change the API end point as per the contract

// const GET_FEED_DATA = gql`
//   {
//     jobs(first: 5) {
//       id
//       creator
//       params {
//         id
//       }
//       paymentPerExecution
//     }
//     validations(first: 5) {
//       id
//       job {
//         id
//       }
//       index
//       params {
//         id
//       }
//     }
//   }
// `;


// function* handleFetch() {
//   try {
//     const { data } = yield call([client, client.query], { query: GET_FEED_DATA });
//     //const res: Feed[] = yield call([client, client.query], { query: GET_FEED_DATA });
//     yield put(fetchSuccess(data));
//   } catch (error) {
//     yield put(fetchError('Unable to fetch : ' + error));
//   }
// }

const API_ENDPOINT = 'https://app.decimal.at';

function* handleFetch() {
  debugger
    try {
        const res: Feed[] = yield call(callApi, 'get', API_ENDPOINT, `feed/eth`)

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




//<<><><><><><************** GRAPHQL IMPLEMENTATION BELOW, UNCOMMENT TO ENABLE GRAPHQL FOR FEED ********************<><><><><><><><>//




// import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
// import { FETCH_DATA_REQUEST, fetchSuccess, fetchError } from './actions';
// import { client } from '../../graphql/apollo';
// import JOB_VALIDATION_QUERY from '../../graphql/queries';

// function* fetchData() {
//   try {
//     //const { data } = yield call([client, client.query], { query: GET_FEED_DATA });
//     // const result = yield call([client, client.query], {
//     // console.log("=======>",process.env.REACT_APP_API_ENDPOINT);
//     const { data } = yield call(client.query, {
//       query: JOB_VALIDATION_QUERY,
//       fetchPolicy: "network-only"
//     });
//     // debugger
//     yield put(fetchSuccess(data));
//   } catch (error: any) {
//     yield put(fetchError(error.toString()));
//   }
// }

// // function* feedSaga() {
// //   yield takeLatest(FETCH_DATA_REQUEST, fetchData);
// // }

// // export default feedSaga;

// function* watchFetchRequest() {
//   yield takeLatest(FETCH_DATA_REQUEST, fetchData);
// }

// function* feedSaga() {
//   yield all([fork(watchFetchRequest)])
// }

// export default feedSaga;
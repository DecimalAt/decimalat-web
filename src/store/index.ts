import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { LayoutState, layoutReducer } from './layout'

import feedSaga  from './feed/sagas'
import { feedReducer } from './feed/reducers'
import { FeedState } from './feed/types'

import jobSaga from './jobs/sagas'
import { jobReducer } from './jobs/reducers'
import { JobState } from './jobs/types'

import dashboardSaga from './dashboard/sagas'
import { dashboardReducer } from './dashboard/reducers'
import { DashboardState } from './dashboard/types'

// The top-level state object
export interface ApplicationState {
  layout: LayoutState
  feed: FeedState
  job: JobState
  dashboard: DashboardState
  router: RouterState
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer,
    feed: feedReducer,
    job: jobReducer,
    dashboard: dashboardReducer,
    router: connectRouter(history)
  })

// Here we use `redux-saga` to trigger actions asynchronously.
export function* rootSaga() {
  yield all([fork(feedSaga), fork(jobSaga), fork(dashboardSaga)])
}
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Root from './components/layout/Root'
import Header from './components/layout/Header'
import FeedPage from './pages/feed'
//import JobsPage from './pages/jobs'
//import DashboardPage from './pages/dashboard'
import normalize from './styles/normalize'
import globals from './styles/globals'


// Global styles
const Globals = createGlobalStyle`
${normalize}
${globals}
`

// If app becomes big the switch to `react-loadable`.
const Routes: React.FC = () => (
  <Root>
    <Globals/> 
    <Header title="DecimalAt Web App" />
    <Switch>
      <Route exact path="/" component={FeedPage} />
      <Route path="/feed" component={FeedPage} />
      <Route path="/jobs" component={FeedPage} />
      <Route path="/dashboard" component={FeedPage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Root>
)

export default Routes
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Root from './components/layout/Root'
import Header from './components/layout/Header'
import FeedPage from './pages/feed'
import JobPage from './pages/job'
//import DashboardPage from './pages/dashboard'
import normalize from './styles/normalize'
import globals from './styles/globals'
import FontStyles from './styles/fonts'
import SidePanel from './components/layout/SidePanel'


// Global styles
const Globals = createGlobalStyle`
${normalize}
${globals}
`

const Container = styled.div`
  display: flex;
  margin-top: ${props => props.theme.heights.header};
  padding-left: ${props => props.theme.widths.sidepanel}
`;

// If app becomes big the switch to `react-loadable`.
const Routes: React.FC = () => (
  <Root>
    <FontStyles />
    <Globals />
    <Header title="DecimalAt Web App" />
    <Container>
      <SidePanel />
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/feeds" component={FeedPage} />
        <Route path="/jobs" component={JobPage} />
        {/* <Route path="/dashboard" component={FeedPage} /> */}
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </Container>
  </Root>
)

export default Routes
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Root from './components/layout/Root'
import Header from './components/layout/Header'
import FeedPage from './pages/feed'
//import JobsPage from './pages/jobs'
//import DashboardPage from './pages/dashboard'
import normalize from './styles/normalize'
import globals from './styles/globals'
import FontStyles from './styles/fonts'
import SidePanel from './components/layout/SidePanel'
import NewJob from './pages/jobs/new'


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

// const NewRoutePage: React.FC = () => {
//   const handleJobSubmission = (title: string, description: string) => {
//     console.log("Job Title:", title);
//     console.log("Job Description:", description);
//     // You can handle the job data here. For example, you can send it to an API.
//   };
//   (
//     <div>
//       <h1>New Job</h1>
//       <NewJob onSubmit={handleJobSubmission} />
//     </div>
//   )
// }

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
        <Route path="/feed" component={FeedPage} />
        <Route path="/jobs" component={FeedPage} />
        <Route path="/dashboard" component={FeedPage} />
        {/* <Route path="/jobs/new" component={() => <div>{NewRoutePage}</div>} /> */}
        <Route component={() => <div>Not Found</div>} />
      </Switch>
    </Container>
  </Root>
)

export default Routes
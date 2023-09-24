import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'

import FeedIndexPage from './feeds/index'
import ShowFeedPage from './feeds/show'

import { ApplicationState } from '../store'
import { Feed } from '../store/feed/types'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
    loading: boolean
    data: Feed
    errors?: string
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & RouteComponentProps

const FeedPage: React.FC<AllProps> = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.path}/`} component={FeedIndexPage} />
            <Route path={`${match.path}/:name`} component={ShowFeedPage} />
            <Route component={() => <div>Not Found</div>} />
        </Switch>
    )
}

const mapStateToProps = ({ feed }: ApplicationState) => ({
    loading: feed.loading,
    errors: feed.errors,
    data: feed.data
})

export default connect(mapStateToProps)(FeedPage)
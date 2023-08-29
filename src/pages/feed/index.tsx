import * as React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import styled from 'styled-components'
import Page from '../../components/layout/Page'
import Container from '../../components/layout/Container'
import DataTable from '../../components/layout/DataTable'
import LoadingOverlay from '../../components/data/LoadingOverlay'
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner'
import LoadingSpinner from '../../components/data/LoadingSpinner'

import { ApplicationState } from '../../store'
import { Feed } from '../../store/feed/types'
import { fetchRequest } from '../../store/feed/actions'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
    loading: boolean
    data: Feed[]
    errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch

const API_ENDPOINT = /*process.env.REACT_APP_API_ENDPOINT ||*/ 'https://api.opendota.com' // TODO: change the API end point

class FeedIndexPage extends React.Component<AllProps> {
    public componentDidMount() {
        const { fetchRequest: fr } = this.props
        fr()
    }

    private renderData() {
        const { loading, data } = this.props

        return (
            <DataTable columns={['Job / Client ID', 'Value*', 'Time Taken (ms)*']} widths={['auto', '', '']}>
                {loading && data.length === 0 && (
                    <FeedLoading>
                        <td colSpan={3}>Loading...</td>
                    </FeedLoading>
                )}
                {data && data.length > 0 && data.map(feed => (
                    <tr key={feed.id}>
                        <FeedDetail>
                            <FeedIcon src={API_ENDPOINT + feed.icon} alt={feed.name} />
                            <FeedName>
                                <Link to={`/feed/${feed.name}`}>{feed.localized_name}</Link>
                            </FeedName>
                        </FeedDetail>
                        <td>
                            {feed.pro_pick || 0} / {feed.pro_ban || 0}
                        </td>
                        <td>{feed.pro_win || 0}</td>
                    </tr>
                ))}
            </DataTable>
        )
    }

    public render() {
        const { loading } = this.props

        return (
            <Page>
                <Container>
                    <TableWrapper>
                        {loading && (
                            <LoadingOverlay>
                                <LoadingOverlayInner>
                                    <LoadingSpinner />
                                </LoadingOverlayInner>
                            </LoadingOverlay>
                        )}
                        <p>
                            <small>Latest Feeds</small>
                        </p>
                        {this.renderData()}
                    </TableWrapper>
                </Container>
            </Page>
        )
    }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ feed }: ApplicationState) => ({
    loading: feed.loading,
    errors: feed.errors,
    data: feed.data
})

// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = {
    fetchRequest
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeedIndexPage)

const TableWrapper = styled('div')`
  position: relative;
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  min-height: 200px;
`

const FeedDetail = styled('td')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const FeedIcon = styled('img')`
  width: 32px;
  height: 32px;
`

const FeedName = styled('div')`
  flex: 1 1 auto;
  height: 100%;
  margin-left: 1rem;

  a {
    color: ${props => props.theme.colors.brand};
  }
`

const FeedLoading = styled('tr')`
  td {
    height: 48px;
    text-align: center;
  }
`
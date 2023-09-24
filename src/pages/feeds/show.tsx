import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'

import {
    FeedInfobox,
    FeedInfoboxImage,
    FeedInfoboxHeading,
    FeedInfoboxInner,
    FeedInfoboxBlurBackground,
    FeedName,
    FeedRoles
} from '../../components/feed/FeedInfoBox'
import { FeedStats, FeedStatsInner, StatAttribute, Bullet } from '../../components/feed/FeedStats'
import { FeedDetails, FeedDetailsColumn, FeedDetailsRow, FeedDetailsAttrName } from '../../components/feed/FeedDetails'
import Page from '../../components/layout/Page'
import Container from '../../components/layout/Container'

import { ApplicationState } from '../../store'
import { Feed } from '../../store/feed/types'
import { fetchRequest } from '../../store/feed/actions'
import styled from 'styled-components'
import LoadingOverlay from '../../components/data/LoadingOverlay'
import LoadingOverlayInner from '../../components/data/LoadingOverlayInner'
import LoadingSpinner from '../../components/data/LoadingSpinner'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
    loading: boolean
    data: Feed
    errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
    fetchFeed: typeof fetchRequest
}

interface RouteParams {
    name: string
}

interface State {
    selected?: Feed
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<RouteParams>

const API_ENDPOINT = /*process.env.REACT_APP_API_ENDPOINT ||*/  'https://api.opendota.com' // TODO: change the API end point

const Wrapper = styled('div')`
  position: relative;
`

class ShowFeedsPage extends React.Component<AllProps, State> {
    constructor(props: AllProps) {
        super(props)

        this.state = {}
    }

    public componentDidMount() {
        const { data, fetchFeed } = this.props

        if (!data) {
            fetchFeed()
        }
    }

    public render() {
        const { data, loading, match } = this.props
        const selected = data.jobs.find(j => j.id === match.params.name)

        return (
            <Page>
                <Container>
                    <Wrapper>
                        {loading && (
                            <LoadingOverlay>
                                <LoadingOverlayInner>
                                    <LoadingSpinner />
                                </LoadingOverlayInner>
                            </LoadingOverlay>
                        )}
                        {selected && (
                            <>
                                <FeedInfobox>
                                    <FeedInfoboxBlurBackground src={API_ENDPOINT + selected.creator} />
                                    <FeedInfoboxInner>
                                        <FeedInfoboxImage src={API_ENDPOINT + selected.creator} />
                                        <FeedInfoboxHeading>
                                            <FeedName>{selected.creator}</FeedName>
                                            <FeedRoles>
                                                {/* {selected.creator} - <span>{selected.roles.join(', ')}</span> */}
                                            </FeedRoles>
                                        </FeedInfoboxHeading>
                                        <FeedStats>
                                            <FeedStatsInner>
                                                <StatAttribute attr="str" isPrimaryAttr={selected.creator === 'str'}>
                                                    <Bullet attr="str" /> {selected.creator || 0} + {selected.creator || 0}
                                                </StatAttribute>
                                                <StatAttribute attr="agi" isPrimaryAttr={selected.creator === 'agi'}>
                                                    <Bullet attr="agi" /> {selected.creator || 0} + {selected.creator || 0}
                                                </StatAttribute>
                                                <StatAttribute attr="int" isPrimaryAttr={selected.creator === 'int'}>
                                                    <Bullet attr="int" /> {selected.creator || 0} + {selected.creator || 0}
                                                </StatAttribute>
                                            </FeedStatsInner>
                                        </FeedStats>
                                    </FeedInfoboxInner>
                                </FeedInfobox>
                                <FeedDetails>
                                    <FeedDetailsColumn>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Base Attack:</FeedDetailsAttrName> {selected.creator} - {selected.creator}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Attack Range:</FeedDetailsAttrName> {selected.creator || '-'}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Attack Speed:</FeedDetailsAttrName> {selected.creator || '-'}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Projectile Speed:</FeedDetailsAttrName> {selected.creator || '-'}
                                        </FeedDetailsRow>
                                    </FeedDetailsColumn>
                                    <FeedDetailsColumn>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Health:</FeedDetailsAttrName> {selected.creator || 0}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Health Regen:</FeedDetailsAttrName> {selected.creator || 0}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Mana:</FeedDetailsAttrName> {selected.creator || 0}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Mana Regen:</FeedDetailsAttrName> {selected.creator || 0}
                                        </FeedDetailsRow>
                                    </FeedDetailsColumn>
                                    <FeedDetailsColumn>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Base Armor:</FeedDetailsAttrName> -
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Magic Resistance:</FeedDetailsAttrName> {selected.creator || 0}%
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Move Speed:</FeedDetailsAttrName> {selected.creator || 0}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Turn Speed:</FeedDetailsAttrName> {selected.creator || 0}
                                        </FeedDetailsRow>
                                    </FeedDetailsColumn>
                                    <FeedDetailsColumn>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>Number of Legs:</FeedDetailsAttrName> {selected.creator}
                                        </FeedDetailsRow>
                                        <FeedDetailsRow>
                                            <FeedDetailsAttrName>CM Enabled:</FeedDetailsAttrName> {selected.creator ? 'yes' : 'no'}
                                        </FeedDetailsRow>
                                    </FeedDetailsColumn>
                                </FeedDetails>
                            </>
                        )}
                    </Wrapper>
                </Container>
            </Page>
        )

        return <></>
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
    fetchFeed: fetchRequest
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowFeedsPage)
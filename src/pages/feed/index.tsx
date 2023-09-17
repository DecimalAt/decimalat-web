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
import { Job, Feed } from '../../store/feed/types'
import { fetchRequest } from '../../store/feed/actions'
import { Heading } from '../../components/Heading'
import Icon from '../../components/MyIcon'
import InfoCard from '../../components/InfoCard'
import { Wrapper } from '../../components/Wrapper'
import { StyledLabel } from '../../components/Label'
import { FilterTextbox } from '../../components/SearchBar'
import { Chip } from '../../components/Chip'
import { Button } from '../../components/Button'

// Separate state props + dispatch props to their own interfaces.
interface PropsFromState {
    loading: boolean
    data: Feed
    errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
    fetchRequest: typeof fetchRequest
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch

class FeedIndexPage extends React.Component<AllProps> {

    state = {
        searchTerm: ''
    }

    public componentDidMount() {
        const { fetchRequest: fr } = this.props
        fr()
    }

    private setSearchTerm(val: string) {
        this.setState({
            searchTerm: val
        });
    }

    private handleNewJobButtonClick() {
        
    }

    // componentDidUpdate(prevProps: Readonly<AllProps>, prevState: Readonly<{}>, snapshot?: any): void {

    // }

    private renderData() {
        const { loading, data } = this.props

        return (
            <>
                <Wrapper additionalStyles={`padding: 0.5em 1em; background: #FFF; margin-top: 2em; border-top-left-radius: 0.5em; border-top-right-radius: 0.5em;`}>
                    <Wrapper additionalStyles={`display: flex; flex-direction: row; align-content: center; justify-content: space-between; align-items: center;`}>
                        <Heading level={3} styleType='primary'>
                            <StyledLabel>
                                Latest Feeds
                            </StyledLabel>
                        </Heading>
                        <Wrapper additionalStyles={`display: flex; flex-direction: row; justify-content: center; align-items: center;`}>
                            <FilterTextbox placeholder="search"
                                value={this.state.searchTerm}
                                onChange={(e: any) => this.setSearchTerm(e.target.value)}
                            />
                            <Chip additionalStyles={`padding:3px 10px;margin-left:1em;cursor:pointer;`} backgroundColor='#ECF2FF' border='2px solid #037DFF'>
                                <Icon icon='Filter' size='16px' color='#037DFF' />
                                <StyledLabel color='#037DFF' additionalStyles={`margin-left: 0.5em; font-size:12px;cursor:pointer`}>Filter</StyledLabel>
                            </Chip>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <DataTable columns={['Job ID/Client ID', 'Network Type', 'Category', 'Rewards Left', 'Rewards', 'Status', 'Runs Left', 'Time Left', 'Actions']} widths={['', '', '']}>
                    {loading && !data && (
                        <FeedLoading>
                            <td colSpan={3}>Loading...</td>
                        </FeedLoading>
                    )}
                    {data && data.jobs && data.jobs.map((job: Job) => (
                        <tr key={job.id}>
                            <FeedDetail>
                                <FeedName>
                                    <Link to={`/feed/${job.creator}`}>{job.creator}</Link>
                                </FeedName>
                            </FeedDetail>
                            <td>
                                <StyledLabel additionalStyles={`color:#6F7B89;`}>
                                    Solanet
                                </StyledLabel>
                            </td>
                            <td>
                                <StyledLabel additionalStyles={`color:#6F7B89;`}>
                                    Price
                                </StyledLabel>
                            </td>
                            <td>
                                <StyledLabel additionalStyles={`color:#000;`}>
                                    0.987672
                                </StyledLabel>
                            </td>
                            <td>
                                <StyledLabel additionalStyles={`color:#037DFF;`}>
                                    0.987672
                                </StyledLabel>
                            </td>
                            <td>
                                <Wrapper additionalStyles={`display: flex; align-content: center; align-items: center;color:#6F7B89;`}>
                                    <Wrapper additionalStyles={`height: 10px; width: 10px; border-radius: 50%; background-color: #4BAE4F; margin-right: 5px;`}></Wrapper>
                                    <StyledLabel additionalStyles={`color:#6F7B89;`}>Running</StyledLabel>
                                </Wrapper>
                            </td>
                            <td>
                                <Chip additionalStyles={`background: #ECF2FF; color: #6F7B89; padding: 3px 18px;`}>10</Chip>
                            </td>
                            <td>
                                <Chip additionalStyles={`background: #ED6C5A; color: #000s; padding: 3px 15px;`}>10 min</Chip>
                            </td>
                            <td>
                                <Wrapper>
                                    <Icon icon='Share' size='40px' color='#AEB0BB' />
                                    <Button onClick={this.handleNewJobButtonClick} color='secondary'>
                                        + Rewards
                                    </Button>
                                </Wrapper>
                            </td>
                        </tr>
                    ))}
                </DataTable>
            </>
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
                        <Heading level={2} styleType='primary'>
                            <Icon color="#037DFF" icon="NewConfiguration" size="32px" />
                            <StyledLabel additionalStyles={`margin-left:0.5em`}>All Feeds</StyledLabel>
                        </Heading>
                        <Wrapper additionalStyles={`display: flex; flex-direction: row; align-content: center; align-items: center; justify-content: flex-start;`}>
                            <InfoCard
                                title="300"
                                description="Reward Points"
                                icon={<Icon color="#FFF" icon="CopyConfiguration" size="60px" />}
                            />
                            <InfoCard
                                title="300"
                                description="Reward Points"
                                icon={<Icon color="#FFF" icon="CopyConfiguration" size="60px" />}
                            />
                            <InfoCard
                                title="300"
                                description="Reward Points"
                                icon={<Icon color="#FFF" icon="CopyConfiguration" size="60px" />}
                            />
                        </Wrapper>
                        {this.renderData()}
                    </TableWrapper>
                </Container>
            </Page>
        )
    }
}

// const FeedIndexPage1: React.FC<AllProps> = () => {
//     const dispatch = useDispatch();
//     debugger
//     const data = useSelector((state: any) => state);

//     React.useEffect(() => {
//       dispatch(fetchRequest());
//     }, [dispatch]);


//     return (
//       <div className="App">
//         {/* Display your jobs and validations here */}
//       </div>
//     );
//   };


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
//   max-width: ${props => props.theme.widths.md};
  margin: 0 50px;
  min-height: 200px;
`

const FeedDetail = styled('td')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

// const FeedIcon = styled('img')`
//   width: 32px;
//   height: 32px;
// `

const FeedName = styled('div')`
  flex: 1 1 auto;
  height: 100%;
  width: 200px;
  line-break: anywhere;

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
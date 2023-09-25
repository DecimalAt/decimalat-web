import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import styled from 'styled-components'

import Page from '../../components/layout/Page'
import Container from '../../components/layout/Container'

import { ApplicationState } from '../../store'
import { Feed } from '../../store/feed/types'
import { Heading } from '../../components/Heading'
import { StyledLabel } from '../../components/Label'
import Icon from '../../components/MyIcon'
import { Wrapper } from '../../components/Wrapper'
import StepByStep from '../../components/job/StepByStep'
interface PropsFromState {
  loading: boolean
  data: Feed
  errors?: string
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
  // fetchFeed: typeof fetchRequest
}

interface RouteParams {
  name: string
}

interface State {
  selected?: Feed
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = PropsFromState & PropsFromDispatch & RouteComponentProps<RouteParams>

// const API_ENDPOINT = /*process.env.REACT_APP_API_ENDPOINT ||*/  'https://api.opendota.com' // TODO: change the API end point

const NewJobWrapper = styled('div')`
position: relative;
//   max-width: ${props => props.theme.widths.md};
margin: 0 50px;
min-height: 200px;
`

class NewJobPage extends React.Component<AllProps, State> {
  constructor(props: AllProps) {
    super(props)

    this.state = {}
  }

  public render() {

    return (
      <Page>
        <Container>
          <NewJobWrapper>
            <Heading level={2} styletype='primary'>
              <Icon color="#037DFF" icon="NewConfiguration" size="32px" />
              <StyledLabel additionalstyles={`margin-left:0.5em`}>New Job</StyledLabel>
            </Heading>
          </NewJobWrapper>
          <Wrapper additionalstyles={`display: flex; flex-direction: row; align-content: center; align-items: center; justify-content: flex-start;`}>
            <StepByStep />
          </Wrapper>
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
  // fetchFeed: fetchRequest
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewJobPage)
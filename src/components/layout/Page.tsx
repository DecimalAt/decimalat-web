import styled from 'styled-components'

const Page = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  padding: ${props => props.theme.containerPadding};
  padding-bottom: 3rem;
  background-color: ${props => props.theme.colors.bodyBackground};
`

export default Page
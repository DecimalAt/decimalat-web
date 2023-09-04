import * as React from 'react'
import styled from 'styled-components'

interface RootProps {
    children: React.ReactNode
    className?: string
}

const Root: React.FC<RootProps> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Root

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.bodyBackground};
  color: ${props => props.theme.colors.textColor};
  font-family: ${props => props.theme.fonts.body};
`
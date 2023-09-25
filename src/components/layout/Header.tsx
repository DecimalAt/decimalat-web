import * as React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import brandLogo from '../../../public/decimal_Logo.svg'
import LayoutContainer from '../../containers/LayoutContainer'
import Container from './Container'
import { FilterTextbox } from '../SearchBar'
import Switch from '../Switch'
import Icon from '../MyIcon'
import { Button } from '../Button'
import { Wrapper } from '../Wrapper'

interface HeaderProps {
  title: string
}

const WrapperHeader = styled('header')`
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.colors.contentBackground};
  color: ${props => props.theme.colors.textColor};
  font-family: ${props => props.theme.fonts.headings};
  height: ${props => props.theme.heights.header};
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 10000;
  border-bottom: 1px solid lightgray;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const HeaderLeft = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 32%;
  }
`

const WrapperInner = styled('div')`
  display: flex;
  font-size: 14px;
  font-family: 'POPPINS_600';
  color: ${props => props.theme.colors.black};

  &.subHeaderMenu {
    display: contents;
    font-family: 'Poppins_400';
    font-size: 12px;
    color: inherit;
  }
`

const HeaderNav = styled('nav')`
  flex: 1 1 auto;
  margin: 1rem 0;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
`

const HeaderNavLink = styled(NavLink)`
  margin: 0 1rem;

  &.is-active {
    text-decoration: auto;
    font-family: 'POPPINS_600';
    color: ${props => props.theme.colors.selectionColor};
  }
  &:hover {
    text-decoration: none;
  }
`

const HeaderRight = styled('div')`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`

const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
`

const VerticalLine = styled('div')`
  border-left: 1px solid ${props => props.theme.colors.borderColor1};
  align-self: stretch;
  width: 1px;
  display: block;
  margin-left: 20px;
  margin-right: 20px; 
`

const HeaderOptions = styled('div')`
  button {
    font-family: 'Poppins_300'
  }
  >svg, button {
    margin-right: 15px;
    cursor: pointer;
    fill: ${props => props.theme.colors.textColor};
  }
  >svg:hover {
    fill: ${props => props.theme.colors.selectionColor};
  }
`

const Header: React.FC<HeaderProps> = ({ }) => {
  const history = useHistory();

  const handleNewJobButtonClick = () => {
    history.push('/jobs/new');
  };
  return (
    <WrapperHeader>
      <HeaderInner>
        <HeaderLeft>
          <Title>
            <img src={brandLogo} alt="DecimalAt" height={'30px'} />
          </Title>
          <Wrapper additionalstyles={`margin-left: 2em`}>
            <FilterTextbox />
          </Wrapper>
        </HeaderLeft>
        <WrapperInner>
          <HeaderNav>
            <HeaderNavLink exact to="/jobs" activeClassName="is-active">
              ALL JOBS
            </HeaderNavLink>
            <HeaderNavLink exact to="/feeds" activeClassName="is-active">
              ALL FEEDS
            </HeaderNavLink>
          </HeaderNav>
        </WrapperInner>
        <VerticalLine />
        <WrapperInner className='subHeaderMenu'>
          <HeaderNav>
            <HeaderNavLink exact to="/jobs/my" activeClassName="is-active">
              MY JOBS
            </HeaderNavLink>
            <HeaderNavLink to="/feeds/my" activeClassName="is-active">
              MY FEEDS
            </HeaderNavLink>
            <HeaderNavLink to="/dashboard" activeClassName="is-active">
              MY REWARDS
            </HeaderNavLink>
          </HeaderNav>
        </WrapperInner>
        <HeaderRight>
          <HeaderOptions>
            <Button onClick={handleNewJobButtonClick}>
              + New Job
            </Button>
            <Icon icon='Settings' size='22px' />
            <Icon icon='Notification' size='22px' />
            <Icon icon='User' size='22px' />
          </HeaderOptions>
          <LayoutContainer>
            {({ theme, setTheme }) => (
              <>
                <Switch
                  id="my-switch"
                  toggled={theme !== 'light'}
                  onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                />
              </>
            )}
          </LayoutContainer>
        </HeaderRight>
      </HeaderInner>
    </WrapperHeader>
  )
}
export default Header
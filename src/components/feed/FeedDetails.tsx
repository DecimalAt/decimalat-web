import styled from 'styled-components'

export const FeedDetailsAttrName = styled('span')`
  color: ${props => props.theme.colors.body};
  flex-grow: 1;
  font-size: 12px;
  margin-right: 5px;
  text-transform: uppercase;
`

export const FeedDetailsRow = styled('span')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  color: ${props => props.theme.colors.body};
  border-top: 1px solid ${props => props.theme.colors.backgroundFillWhite};

  &:nth-of-type(even) {
    background: ${props => props.theme.colors.tableOdd};
  }

  &:last-of-type {
    border-bottom: 1px solid ${props => props.theme.colors.borders};
  }
`

export const FeedDetailsColumn = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  padding: 8px;
`

export const FeedDetails = styled('div')`
  display: flex;
  margin-top: 10px;
  margin-left: -8px;
  margin-right: -8px;
`
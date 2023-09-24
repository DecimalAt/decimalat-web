import styled, { css } from 'styled-components';

type WrapperProps = {
    margin?: string;
    padding?: string;
    additionalstyles?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  
  /* Additional styles passed as props */
  ${(props) => props.additionalstyles && css`
    ${props.additionalstyles}
  `}
`;
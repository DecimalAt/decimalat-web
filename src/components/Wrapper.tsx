import styled, { css } from 'styled-components';

type WrapperProps = {
    margin?: string;
    padding?: string;
    additionalStyles?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  
  /* Additional styles passed as props */
  ${(props) => props.additionalStyles && css`
    ${props.additionalStyles}
  `}
`;
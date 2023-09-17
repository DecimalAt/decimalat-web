import styled, { css } from 'styled-components';

type LabelProps = {
    color?: string;
    additionalStyles?: string;
};

export const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || 'black'};
  
  /* Additional styles passed as props */
  ${(props) => props.additionalStyles && css`
    ${props.additionalStyles}
  `}
`;
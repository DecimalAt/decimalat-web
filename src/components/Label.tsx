import styled, { css } from 'styled-components';

type LabelProps = {
    color?: string;
    additionalstyles?: string;
};

export const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || 'black'};
  
  /* Additional styles passed as props */
  ${(props) => props.additionalstyles && css`
    ${props.additionalstyles}
  `}
`;
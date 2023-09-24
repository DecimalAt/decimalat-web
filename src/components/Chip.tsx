import styled, { css } from 'styled-components';

type ChipProps = {
    color?: string;
    backgroundcolor?: string;
    border?: string;
    borderradius?: string;
    additionalstyles?: string;
};

export const Chip = styled.span<ChipProps>`
  display: inline-block;
  padding: 5px 15px;
  font-size: 0.875em;
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.backgroundcolor || '#6200EA'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderradius || '16px'};
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
  
  /* Additional styles passed as props */
  ${(props) => props.additionalstyles && css`
    ${props.additionalstyles}
  `}
`;
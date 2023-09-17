import styled, { css } from 'styled-components';

type ChipProps = {
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    additionalStyles?: string;
};

export const Chip = styled.span<ChipProps>`
  display: inline-block;
  padding: 5px 15px;
  font-size: 0.875em;
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.backgroundColor || '#6200EA'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderRadius || '16px'};
  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
  
  /* Additional styles passed as props */
  ${(props) => props.additionalStyles && css`
    ${props.additionalStyles}
  `}
`;
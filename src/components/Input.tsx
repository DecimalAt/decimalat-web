import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: string;
}

const StyledInput = styled.input<InputProps>`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;

  ${(props) => props.customStyle && props.customStyle};
`;

const Input: React.FC<InputProps> = ({ customStyle, ...rest }) => {
  return <StyledInput customStyle={customStyle} {...rest} />;
};

export default Input;
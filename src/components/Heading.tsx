import React from 'react';
import styled, { css } from 'styled-components';

interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    styleType?: 'primary' | 'secondary';
    children: React.ReactNode;
}

const styles = {
    primary: css`
    color: #333;
    font-weight: bold;
  `,
    secondary: css`
    color: #666;
    font-weight: normal;
  `,
};

const StyledH1 = styled.h1<HeadingProps>`
  ${(props) => props.styleType && styles[props.styleType]}
`;
const StyledH2 = styled.h2<HeadingProps>`
  ${(props) => props.styleType && styles[props.styleType]}
`;
const StyledH3 = styled.h2<HeadingProps>`
  ${(props) => props.styleType && styles[props.styleType]}
`;
const StyledH4 = styled.h2<HeadingProps>`
  ${(props) => props.styleType && styles[props.styleType]}
`;
const StyledH5 = styled.h2<HeadingProps>`
  ${(props) => props.styleType && styles[props.styleType]}
`;
const StyledH6 = styled.h2<HeadingProps>`
  ${(props) => props.styleType && styles[props.styleType]}
`;

export const Heading: React.FC<HeadingProps> = ({ level = 1, styleType = 'primary', children }) => {
    switch (level) {
        case 1:
            return <StyledH1 styleType={styleType}>{children}</StyledH1>;
        case 2:
            return <StyledH2 styleType={styleType}>{children}</StyledH2>;
        case 3:
            return <StyledH3 styleType={styleType}>{children}</StyledH3>;
        case 4:
            return <StyledH4 styleType={styleType}>{children}</StyledH4>;
        case 5:
            return <StyledH5 styleType={styleType}>{children}</StyledH5>;
        case 6:
            return <StyledH6 styleType={styleType}>{children}</StyledH6>;
        default:
            return <StyledH1 styleType={styleType}>{children}</StyledH1>;
    }
};

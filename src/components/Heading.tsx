import React from 'react';
import styled, { css } from 'styled-components';

interface HeadingProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    styletype?: 'primary' | 'secondary';
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
  ${(props) => props.styletype && styles[props.styletype]}
`;
const StyledH2 = styled.h2<HeadingProps>`
  ${(props) => props.styletype && styles[props.styletype]}
`;
const StyledH3 = styled.h3<HeadingProps>`
  ${(props) => props.styletype && styles[props.styletype]}
`;
const StyledH4 = styled.h4<HeadingProps>`
  ${(props) => props.styletype && styles[props.styletype]}
`;
const StyledH5 = styled.h5<HeadingProps>`
  ${(props) => props.styletype && styles[props.styletype]}
`;
const StyledH6 = styled.h6<HeadingProps>`
  ${(props) => props.styletype && styles[props.styletype]}
`;

export const Heading: React.FC<HeadingProps> = ({ level = 1, styletype = 'primary', children }) => {
    switch (level) {
        case 1:
            return <StyledH1 styletype={styletype}>{children}</StyledH1>;
        case 2:
            return <StyledH2 styletype={styletype}>{children}</StyledH2>;
        case 3:
            return <StyledH3 styletype={styletype}>{children}</StyledH3>;
        case 4:
            return <StyledH4 styletype={styletype}>{children}</StyledH4>;
        case 5:
            return <StyledH5 styletype={styletype}>{children}</StyledH5>;
        case 6:
            return <StyledH6 styletype={styletype}>{children}</StyledH6>;
        default:
            return <StyledH1 styletype={styletype}>{children}</StyledH1>;
    }
};

import styled, { css } from "styled-components";

const COLOR = {
    primary: css`
        color: ${props => props.theme.colors.contentBackground};
        background: ${props => props.theme.colors.primaryOrange};
        // background: linear-gradient(#3f3cfe, #e943d5);
    `,
    secondary: css`
        color: #FFF;
        background: #037DFF;
    `,
};

const DISABLED = css`
    cursor: not-allowed;
    background: #d4d4d4;
    color: #f5f5f5;
`;

export const Container = styled.button<ButtonProps>`
    padding: 10px 15px;
    cursor: pointer;
    border: none;
    border-radius: 50px;
    font-weight: 500;
    outline: none;
    transition: all 0.2s;

    ${(props) => props.color && COLOR[props.color]}
    ${(props) => props.disabled && DISABLED}
    ${(props) => props.additionalStyles && css`
      ${props.additionalStyles}
    `}
`;


export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: React.ReactNode; // make the component able to receive children elements
    color?: "primary" | "secondary"; // two styling options
    disabled?: boolean; // make the button disabled or not
    additionalStyles?: string;
};

export const Button = ({
    onClick,
    children,
    color = "primary",
    disabled,
}: ButtonProps) => {
    return (
        <Container onClick={onClick} color={color} disabled={disabled}>
            {children}
        </Container>
    );
};

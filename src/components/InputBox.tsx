import React, { ChangeEvent } from 'react';

interface InputBoxProps {
    type?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}

interface InputBoxState {
    value: string;
}

class InputBox extends React.Component<InputBoxProps, InputBoxState> {
    constructor(props: InputBoxProps) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        this.setState({ value });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    };

    render() {
        const { type = 'text', placeholder, className, style } = this.props;
        return (
            <input
                type={type}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder={placeholder}
                className={className}
                style={style}
            />
        );
    }
}

export default InputBox;

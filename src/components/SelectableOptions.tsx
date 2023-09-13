import React, { useState } from 'react';
import styled from 'styled-components';

interface Option {
    id: string | number;
    label: string;
}

interface SelectableOptionsProps {
    options: Option[];
    onSelectionChange?: (selectedOptionIds: (string | number)[]) => void;
}

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionItem = styled.div<{ selected: boolean }>`
  padding: 8px 15px;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#e9ecef' : 'transparent')};
  &:hover {
    background-color: #e2e2e2;
  }
`;

const SelectableOptions: React.FC<SelectableOptionsProps> = ({ options, onSelectionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<(string | number)[]>([]);

    const handleOptionClick = (optionId: string | number) => {
        const isSelected = selectedOptions.includes(optionId);
        let updatedSelection: (string | number)[];

        if (isSelected) {
            updatedSelection = selectedOptions.filter(id => id !== optionId);
        } else {
            updatedSelection = [...selectedOptions, optionId];
        }

        setSelectedOptions(updatedSelection);
        onSelectionChange?.(updatedSelection);
    };

    return (
        <OptionsContainer>
            {options.map(option => (
                <OptionItem
                    key={option.id}
                    selected={selectedOptions.includes(option.id)}
                    onClick={() => handleOptionClick(option.id)}
                >
                    {option.label}
                </OptionItem>
            ))}
        </OptionsContainer>
    );
};

export default SelectableOptions;

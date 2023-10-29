import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './MyIcon';
import { Wrapper } from './Wrapper';

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
`;

const Button = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 10px;
  outline: none;
  cursor: pointer;
  border: 1px solid #EEF0F4;
  width: 350px;
  margin: 15px 0px;
  border-radius: 9px;
  color: #AEB0BB;
  background: #fff;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Poppins_400';

  color: ${(props) => (props.isActive ? '#037DFF' : '#AEB0BB')};
  border-color: ${(props) => (props.isActive ? '#037DFF' : '#EEF0F4')};

  &:hover {
    color: #037DFF;
    border: 1px solid #037DFF;
  }
`;

interface MutuallyExclusiveButtonsProps {
    options: { id: string; name: string; }[];
    onOptionSelect: (option: { id: string; name: string; }) => void;
}

const MutuallyExclusiveButtons: React.FC<MutuallyExclusiveButtonsProps> = ({
    options,
    onOptionSelect,
}) => {
    const [activeOption, setActiveOption] = useState<string | null>(null);

    const handleButtonClick = (option: { id: string; name: string; }) => {
        if (activeOption === option.id) {
            // If the same button is clicked again, deactivate it
            setActiveOption(null);
        } else {
            setActiveOption(option.id);
        }
        onOptionSelect(option);
    };

    return (
        <ButtonGroup>
            {options.map((option) => (
                <Button
                    key={option.id}
                    isActive={activeOption === option.id}
                    onClick={() => handleButtonClick(option)}
                >
                    <Wrapper additionalstyles={'display: flex; align-items: center;'}>
                        <Icon color="#037DFF" icon="NewConfiguration" size="28px" />
                        <Wrapper additionalstyles={'padding-left: 15px;'}>
                            {option.name}
                        </Wrapper>
                    </Wrapper>
                </Button>
            ))}
        </ButtonGroup>
    );
};

export default MutuallyExclusiveButtons;

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #F4F5F9;
  color: #2A3551;
  width: 350px;
  text-align: left;
  font-size: 11px;
  height: 40px;
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'block' : 'none')};
  max-height: 200px;
  overflow-y: scroll;
  width: 100%;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface DropdownProps {
    options: { id: string; name: string; }[];
    onSelect: (option: { id: string; name: string; }) => void;
    defaultOption?: { id: string; name: string; } | null;
    isOpen?: boolean;
}

function Dropdown({
    options,
    onSelect,
    defaultOption = null,
}: DropdownProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<{ id: string; name: string; } | null>(defaultOption);

    useEffect(() => {
        setSelectedOption(defaultOption);
    }, [defaultOption]);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option: { id: string; name: string; }) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={handleToggleDropdown}>
                {selectedOption ? selectedOption.name.toString() : 'Choose Mainnet Network'}
            </DropdownButton>
            <DropdownList isOpen={isOpen}>
                {options.map((option, index) => (
                    <DropdownItem key={index} onClick={() => handleSelectOption(option)}>
                        {option.name}
                    </DropdownItem>
                ))}
            </DropdownList>
        </DropdownContainer>
    );
}

export default Dropdown;

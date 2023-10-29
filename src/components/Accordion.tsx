import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaCaretDown } from 'react-icons/fa';

export const AccordionHeader = styled.div<{ additionalstyles?: string }>`
  padding: 10px 15px;
  background-color: #e0e0e0;
  cursor: pointer;
  margin-top: 20px;
  color: #FFFFFF;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: 'Poppins_500';

  ${(props) => props.additionalstyles && css`
    ${props.additionalstyles}
  `}
`;

export const AccordionContent = styled.div<{ isOpen: boolean, additionalstylesContent?: string }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  padding: 10px 15px;
  background-color: #f0f0f0;

  ${(props) => props.additionalstylesContent && css`
    ${props.additionalstylesContent}
  `}
`;

export const CaretDownIcon = styled(FaCaretDown)`
  color: white;
  font-size: 0.7rem;

  ${(props) => props.iconStyles && css`
    ${props.iconStyles}
  `}
`;

interface AccordionProps {
  title: string;
  children?: any;
  additionalstyles: string;
  additionalstylesContent?: string;
  iconStyles?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, additionalstyles, additionalstylesContent, iconStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AccordionHeader onClick={toggleAccordion} additionalstyles={additionalstyles}>
        <div>
          {title}
        </div>
        <div>
          <CaretDownIcon iconStyles={iconStyles} />
        </div>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen} additionalstylesContent={additionalstylesContent}>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;

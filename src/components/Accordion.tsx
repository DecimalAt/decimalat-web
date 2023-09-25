import React, { useState } from 'react';
import styled from 'styled-components';

export const AccordionHeader = styled.div`
  padding: 10px 15px;
  background-color: #e0e0e0;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #d0d0d0;
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  padding: 10px 15px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-top: 5px;
`;

interface AccordionProps {
    title: string;
    children?: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <AccordionHeader onClick={toggleAccordion}>{title}</AccordionHeader>
            <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
        </div>
    );
};

export default Accordion;

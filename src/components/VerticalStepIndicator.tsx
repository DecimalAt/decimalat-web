import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa'; // Importing the check (tick) icon from FontAwesome

type StepProps = {
    isCompleted?: boolean;
};

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Step = styled.div<StepProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.isCompleted ? 'green' : '#e0e0e0')};
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:after {
    content: '';
    width: 2px;
    height: 20px;
    background-color: ${(props) => (props.isCompleted ? 'green' : '#e0e0e0')};
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:last-child:after {
    content: none;
  }
`;

export const TickIcon = styled(FaCheck)`
  color: white;
  font-size: 1rem;
`;


const VerticalStepIndicator: React.FC = () => {
    const steps = [true, true, false, false];

    return (
        <StepsContainer>
            {steps.map((isCompleted, index) => (
                <Step key={index} isCompleted={isCompleted}>
                    {isCompleted && <TickIcon />}
                </Step>
            ))}
        </StepsContainer>
    );
};

export default VerticalStepIndicator;

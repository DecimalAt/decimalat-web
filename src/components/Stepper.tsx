import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa'; // Importing the check (tick) icon from FontAwesome
import { useListenToBroadcast } from '../hooks/useBroadcast';

type StepProps = {
    title?: string;
    content?: React.ReactNode;
    isCompleted?: boolean;
    isactive?: boolean;
};

type StepperProps = {
    steps: StepProps[];
};

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Step = styled.div<StepProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isCompleted ? 'green' : '#e0e0e0')};
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-color: ${(props) => (props.isactive ? 'green' : 'transparent')};

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
  font-size: 0.7rem;
`;

const VerticalStepper: React.FC<StepperProps> = ({ steps }) => {

    const [activeStep, setActiveStep] = useState(0);

    useListenToBroadcast((currStep) => {
        if (activeStep < currStep) {
            steps[activeStep].isCompleted = true;
            steps[activeStep].isactive = false;
            steps[currStep].isCompleted = true;
            steps[currStep].isactive = true;
            setActiveStep((prev) => {
                return prev + 1;
            });
        } else if (activeStep > currStep) {
            steps[activeStep].isCompleted = false;
            steps[activeStep].isactive = true;
            setActiveStep((prev) => {
                return prev - 1;
            });
        }
    });

    return (
        <StepsContainer>
            {steps.map((step, index) => (
                <Step key={index} isactive={index === activeStep} isCompleted={step.isCompleted}>
                    {step.isCompleted && <TickIcon />}
                    <h3>{step.title}</h3>
                    {index === activeStep && step.content}
                </Step>
            ))}
        </StepsContainer>
    );
};

export default VerticalStepper;

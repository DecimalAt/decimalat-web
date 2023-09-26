import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa'; // Importing the check (tick) icon from FontAwesome
import { useListenToBroadcast } from '../hooks/useBroadcast';
import { Wrapper } from './Wrapper';

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
  align-items: flex-start;
  flex-direction: column;
`;

export const Step = styled.div<StepProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isCompleted ? '#4BAD4F' : '#AEB0BB')};
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-color: ${(props) => (props.isactive ? '#4BAD4F' : 'transparent')};

  &:after {
    content: '';
    width: 1px;
    height: 80px;
    background-color: ${(props) => (props.isCompleted ? '#4BAD4F' : '#AEB0BB')};
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:last-child:after {
    content: none;
  }
`;

export const StepHeader = styled.div<{ isActive: boolean }>`
    color: ${(props) => (props.isActive ? '#2A3546' : '#AEB0BB')};
    position: absolute;
    left: 2em;
    font-family: 'Poppins_600';
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    width: max-content;
`;

export const StepDescription = styled.div`
    color: #AEB0BB;
    font-family: 'Poppins_400';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    left: 2.5em;
    position: absolute;
    width: 200px;
    top: 2em;
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
        <Wrapper additionalstyles='margin: 9em 2em;'>
            <StepsContainer>
                {steps.map((step, index) => (
                    <Step key={index} isactive={index === activeStep} isCompleted={step.isCompleted}>
                        {step.isCompleted && <TickIcon />}
                        <StepHeader isActive={index === activeStep}>{step.title}</StepHeader>
                        <StepDescription>{step.content}</StepDescription>
                    </Step>
                ))}
            </StepsContainer>
        </Wrapper>
    );
};

export default VerticalStepper;

import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Step = styled.div<{ isActive: boolean }>`
  padding: 20px;
  margin: 10px 0;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isActive ? '#f5f5f5' : 'transparent')};
`;

// Component
type StepProps = {
    title: string;
    content: React.ReactNode;
};

type StepperProps = {
    steps: StepProps[];
};

const VerticalStepper: React.FC<StepperProps> = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (activeStep > 0) setActiveStep((prev) => prev - 1);
    };

    return (
        <StepperContainer>
            {steps.map((step, index) => (
                <Step key={index} isActive={index === activeStep}>
                    <h3>{step.title}</h3>
                    {index === activeStep && step.content}
                </Step>
            ))}
            <div>
                <button onClick={handleBack} disabled={activeStep === 0}>
                    Back
                </button>
                <button onClick={handleNext} disabled={activeStep === steps.length - 1}>
                    Next
                </button>
            </div>
        </StepperContainer>
    );
};

export default VerticalStepper;

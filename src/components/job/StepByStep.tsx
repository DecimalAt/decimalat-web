import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { jobCreationSteps } from '../../utils/constants';
import { useStep } from '../../hooks/useStep';
import { useBroadcast } from '../../hooks/useBroadcast';
import { Deploy, Network, Operations } from './StepComponents';
import OperationsPanel from './OperationsPanel';
import DeployPanel from './DeployPanel';


const RightSidePanel = styled.div`
  position: fixed;
  right: 0;
  top: ${props => props.theme.heights.header};
  width: 250px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;
`;

const StepsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const steps = jobCreationSteps.map(s => s.title);

const StepByStep: React.FC = () => {

    const { currentStep, nextStep, prevStep } = useStep(0, handleStepChange);
    const broadcast = useBroadcast();

    function handleStepChange(step: number) {
        broadcast(step);
    }

    const isPrevDisabled = currentStep === 0;
    const isNextDisabled = currentStep === steps.length - 1;

    return (
        <>
            {currentStep !== 0 &&
                <RightSidePanel>
                    {currentStep === 1 && <OperationsPanel />}
                    {currentStep === 2 && <DeployPanel />}
                </RightSidePanel>
            }
            <StepsContainer>
                {currentStep === 0 && <Network />}
                {currentStep === 1 && <Operations />}
                {currentStep === 2 && <Deploy />}
            </StepsContainer>
            <div>
                <Button
                    disabled={isPrevDisabled}
                    onClick={prevStep}
                >
                    Previous
                </Button>
                <Button
                    disabled={isNextDisabled}
                    onClick={nextStep}
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default StepByStep;

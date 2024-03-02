import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { jobCreationSteps } from '../../utils/constants';
import { useStep } from '../../hooks/useStep';
import { useBroadcast } from '../../hooks/useBroadcast';
import Deploy from './Deploy';
import NetworkSelection from './Network';
import Operations, { Job } from './Operations';
import OperationsPanel from './panels/OperationsPanel';
import DeployPanel from './panels/DeployPanel';

import { networks } from '../../utils/constants';
import { Wrapper } from '../Wrapper';


const RightSidePanel = styled.div`
  position: fixed;
  right: 0;
  top: ${props => props.theme.heights.header};
  width: 350px;
  height: 100vh;
  background-color: #fff;
//   padding: 20px;
  overflow-y: auto;
`;

const StepsContainer = styled.div`
//   display: flex;
//   align-items: center;
`;

const steps = jobCreationSteps.map(s => s.title);

const StepByStep: React.FC = () => {

    const [selectedNetworkConfig, setSelectedNetworkConfig] = useState<string>('');
    const [selectedOperationConfig, setSelectedOperationConfig] = useState<Job | null>(null);
    const { currentStep, nextStep, prevStep } = useStep(0, handleStepChange);
    const broadcast = useBroadcast();

    function handleStepChange(step: number) {
        broadcast(step);
    }

    function checkIfNextStepNotDisabled() {
        if (currentStep === 0) {
            return !!selectedNetworkConfig && currentStep !== steps.length - 1;
        }
        if (currentStep === 1) {
            return !!selectedOperationConfig && currentStep !== steps.length - 1;
        }
        return true;
    }

    const isPrevDisabled = currentStep === 0;


    return (
        <>
            <div>
                {/* {currentStep !== 0 
                    &&
                    <RightSidePanel>
                        {/* {currentStep === 0 && <OperationsPanel />} */}
                        {/* {currentStep === 1 && <OperationsPanel />} */}
                        {/* {currentStep === 2 && <DeployPanel />} */}
                    {/* </RightSidePanel> */}
                <StepsContainer>
                    {currentStep === 0 && <NetworkSelection networks={networks} onCreateJob={(networkConfig) => {
                        setSelectedNetworkConfig(networkConfig);
                    }} />}
                    {currentStep === 1 && <Operations networkConfig={selectedNetworkConfig} onCreateJob={(operationConfig: Job) => {
                        setSelectedOperationConfig(operationConfig);
                    }} />}
                    {currentStep === 2 && <Deploy onSubmit={() => { }} />}
                </StepsContainer>
            </div>
            <Wrapper additionalstyles={'margin-right: 60px; position: absolute; bottom: 30px; right: 0;'}>
                {!isPrevDisabled &&
                    <Button
                        disabled={isPrevDisabled}
                        onClick={prevStep}
                        color='secondary'
                    >
                        Previous
                    </Button>
                }
                <Button
                    disabled={!checkIfNextStepNotDisabled()}
                    onClick={nextStep}
                    color='secondary'
                >
                    Next
                </Button>
            </Wrapper>
        </>
    );
};

export default StepByStep;

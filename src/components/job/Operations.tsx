import React from 'react';
import styled from 'styled-components';
import NewConfigurationForm from './configurations/NewConfigurationForm';
import CopyConfigurationForm from './configurations/CopyConfigurationForm';
import LoadConfigurationForm from './configurations/LoadConfigurationForm';

const OperationsContainer = styled.div`
  background-color: #f0f0f0;
//   padding: 20px;
//   border: 1px solid #ccc;
  border-radius: 5px;
//   margin: 20px;
`;

export interface Job {
    title: string;
    description: string;
}

interface OperationsProps {
    networkConfig: string;
    onCreateJob: (job: Job) => void;
}

const Operations: React.FC<OperationsProps> = ({ networkConfig, onCreateJob }) => {

    const networkAndConfigOptions = networkConfig.split('_');
    const option = networkAndConfigOptions[2];

    const handleCreateConfiguration = (config: any) => {
        debugger;
        onCreateJob(config);
    }

    const handleCopyConfiguration = (config: any) => {
        debugger;
        onCreateJob(config);
    }

    const handleLoadConfiguration = (config: any) => {
        debugger;
        onCreateJob(config);
    }

    return (
        <OperationsContainer>
            {option === '1' && <NewConfigurationForm onSubmit={handleCreateConfiguration} />}
            {option === '2' && <CopyConfigurationForm onSubmit={handleCopyConfiguration} />}
            {option === '3' && <LoadConfigurationForm onSubmit={handleLoadConfiguration} />}
        </OperationsContainer>
    );
};

export default Operations;

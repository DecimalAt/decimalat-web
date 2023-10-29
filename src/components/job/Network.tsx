import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import { StyledLabel } from '../Label';
import { Chip } from '../Chip';
import Switch from '../Switch';
import { Wrapper } from '../Wrapper';
import MutuallyExclusiveButtons from '../MutuallyExclusiveButtons';
import { configButtonOptions, environments } from '../../utils/constants';
import { JobStepSelectionContainer } from './types';

// const NetworkSelect = styled.select`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const Label = styled.label`
//   font-weight: bold;
// `;

const VerticalLine = styled('div')`
  border-left: 1px solid ${props => props.theme.colors.borderColor1};
  align-self: stretch;
  width: 1px;
  display: block;
  margin: 0 6em;
`

interface NetworkSelectionProps {
    networks: { id: string; name: string; }[];
    onCreateJob: (network: string) => void;
}

const NetworkSelection: React.FC<NetworkSelectionProps> = ({
    networks,
    onCreateJob,
}) => {
    const [selectedNetwork, setSelectedNetwork] = useState<{ id: string; name: string; } | null>(null);
    const [selectedNetworkEnvironment, setSelectedNetworkEnvironment] = useState<string>(environments[0]);

    const handleNetworkChange = (option: { id: string; name: string; }) => {
        setSelectedNetwork(option);
    };

    const handleCreateJob = (option: { id: string; name: string; }) => {
        if (selectedNetwork && option) {
            onCreateJob(`${selectedNetworkEnvironment}_${selectedNetwork.id}_${option.id}`);
            setSelectedNetwork(null);
        }
    };

    return (
        <JobStepSelectionContainer>
            <StyledLabel additionalstyles={`margin: 0; font-weight: bold; font-size: 18px; font-family: 'Poppins_400';`}>Network</StyledLabel>
            <br />
            <br />
            <br />
            <Wrapper additionalstyles={`display: flex; flex-direction: row; align-items: center; width: 180px; justify-content: space-between;`}>
                <Wrapper>
                    <StyledLabel additionalstyles={`margin: 0; font-weight: bold; font-size: 12px; font-family: 'Poppins_400';`}>Select Network</StyledLabel>
                    <br />
                    <br />
                    <Wrapper additionalstyles={`display: flex; flex-direction: row; align-items: center; width: 180px; justify-content: space-between;`}>
                        <Chip backgroundcolor='#7196FF' color='#FFF' borderradius='1em' additionalstyles={`font-size: 12px; font-family: 'Poppins_400'; padding: 4px 9px;`}>Mainnet</Chip>
                        <Switch
                            id="nw-switch-2"
                            onChange={(e: any) => {
                                debugger;
                                if (e && e.target.checked) {
                                    setSelectedNetworkEnvironment(environments[1])
                                } else {
                                    setSelectedNetworkEnvironment(environments[0])
                                }
                            }}
                        />
                        <Chip backgroundcolor='#ED6C5A' color='#FFF' borderradius='1em' additionalstyles={`font-size: 12px; font-family: 'Poppins_400'; padding: 4px 9px;`}>Testnet</Chip>
                    </Wrapper>
                    <br />
                    <br />
                    <br />
                    <StyledLabel additionalstyles={`margin: 0; font-weight: bold; font-size: 12px; font-family: 'Poppins_400';`}>Select Mainnet Network</StyledLabel>
                    <br />
                    <br />
                    <Dropdown options={networks} onSelect={handleNetworkChange} />
                </Wrapper>
                <VerticalLine />
                <Wrapper>
                    <MutuallyExclusiveButtons options={configButtonOptions} onOptionSelect={handleCreateJob} />
                </Wrapper>
            </Wrapper>
            <br />
            <br />
            <br />
        </JobStepSelectionContainer>
    );
};

export default NetworkSelection;

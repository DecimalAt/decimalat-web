// SidePanel.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NetworkSelector from '../NetworkSelector';
import { Heading } from '../Heading';
import Switch from '../Switch';
import VerticalStepper from '../Stepper';


interface PanelProps {
  isOpen: boolean;
}

const PanelContainer = styled.div<PanelProps>`
  position: fixed;
  top: ${props => props.theme.heights.header};
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #f4f4f4;
  transform: translateX(${props => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.5em;
  margin: 10px;
  cursor: pointer;
`;

interface SidePanelProps {
  isOpen?: boolean;
  togglePanel?: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen = true, togglePanel }) => {



  const location = useLocation();

  const [network, setNetwork] = useState("");

  const networks = [
    { id: '1', name: 'BSC' },
    { id: '2', name: 'Polygon' },
    { id: '3', name: 'Etherium' },
    { id: '4', name: 'BSC' },
    { id: '5', name: 'Polygon' },
    { id: '6', name: 'Etherium' },
    { id: '7', name: 'BSC' },
    { id: '8', name: 'Polygon' },
    { id: '9', name: 'Etherium' },
    { id: '10', name: 'BSC' },
    { id: '11', name: 'Polygon' },
    { id: '12', name: 'Etherium' },
    { id: '13', name: 'BSC' },
    { id: '14', name: 'Polygon' },
    { id: '15', name: 'Etherium' },
    // ... more networks
  ];

  // Here, you can conditionally render or style based on the route
  if (location.pathname === "/feeds" || location.pathname === "/") {
    // Do something special for this route
    return <PanelContainer isOpen={isOpen}>
      <Heading level={6} styleType='primary'>Network Selection</Heading>
      <Switch />
      <Heading level={6} styleType='primary'>{network ? network : 'Select Network'}</Heading>
      <NetworkSelector
        networks={networks}
        onSelect={(network: any) => setNetwork(network.name)}
      />
    </PanelContainer>
  }

  return (
    <PanelContainer isOpen={isOpen}>
      {/* <CloseButton onClick={togglePanel}>&times;</CloseButton> */}
      <div>
        <VerticalStepper
          steps={[
            {
              title: 'Network',
              content: (
                <div>
                  <p>Load a new configuration <br/> or built a new</p>
                  {/* Include other components or form elements as needed */}
                </div>
              ),
            },
            {
              title: 'Operations',
              content: <p>Load a new configuration <br/> or built a new</p>,
            },
            {
              title: 'Deploy',
              content: <p>Load a new configuration <br/> or built a new</p>,
            },
          ]}
        />
      </div>
    </PanelContainer>
  )
};

export default SidePanel;

// SidePanel.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import NetworkSelector from '../NetworkSelector';
import Switch from '../Switch';
import VerticalStepper from '../Stepper';
// import VerticalStepIndicator from '../VerticalStepIndicator';
import { StyledLabel } from '../Label';
import { Wrapper } from '../Wrapper';
import { Chip } from '../Chip';
import Icon from '../MyIcon';


interface PanelProps {
  isopen: boolean;
}

const PanelContainer = styled.div<PanelProps>`
  position: fixed;
  top: ${props => props.theme.heights.header};
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #f4f4f4;
  transform: translateX(${props => (props.isopen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  // padding: 1.5em 2em;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// const CloseButton = styled.button`
//   border: none;
//   background: none;
//   font-size: 1.5em;
//   margin: 10px;
//   cursor: pointer;
// `;

interface SidePanelProps {
  isopen?: boolean;
  togglePanel?: () => void;
}

type OptionProps = {
  bandcolor?: string;
  isactive?: boolean;
  additionalstyles?: string;
};

const Option = styled.div<OptionProps>`
  padding: 10px 20px;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 5px;
    background-color: ${(props) => (props.isactive ? props.bandcolor || '#6200EA' : 'transparent')};
    transition: all 0.3s;
  }

  // &:hover {
  //   background-color: #e0e0e0;
  // }
  
  /* Additional styles passed as props */
  ${(props) => props.additionalstyles && css`
    ${props.additionalstyles}
  `}
`;

const SidePanel: React.FC<SidePanelProps> = ({ isopen = true, /*togglePanel*/ }) => {



  const location = useLocation();

  const networks = [
    { id: '1', name: 'BSC' },
    { id: '2', name: 'Polygon' },
    { id: '3', name: 'Etherium' },
    { id: '4', name: 'BSC' },
    { id: '5', name: 'Polygon' },
    { id: '6', name: 'Etherium' },
    { id: '7', name: 'BSC' },
    { id: '8', name: 'Polygon' },
    { id: '9', name: 'Etherium' }
    // ... more networks
  ];

  const [network, setNetwork] = useState(networks[1]);

  // Here, you can conditionally render or style based on the route
  if (location.pathname === "/feeds" || location.pathname === "/jobs" || location.pathname === "/") {
    return <PanelContainer isopen={isopen}>
      <Wrapper additionalstyles={`padding: 1.5em 2em;padding-bottom: 0.5em;`}>
        <StyledLabel additionalstyles={`color: #2A3546; font-size: 14px; font-family: 'POPPINS_500';`}>
          Network Selection
        </StyledLabel>
        <Wrapper padding="10px" additionalstyles={`display: flex; padding-left: 0; flex-direction: row; justify-content: flex-start; align-items: center;`}>
          <Switch
            id="nw-switch"
            onChange={() => { }}
          />
          <Chip backgroundcolor='#7196FF' color='#FFF' borderradius='1em' additionalstyles={`margin-left:10px; font-size: 14px; font-family: 'Poppins_400';`}>Mainnet</Chip>
        </Wrapper>
      </Wrapper>
      <Wrapper additionalstyles={`background-color:#7196FF;`}>
        <Option
          bandcolor="#7196FF"
          isactive={true}
          onClick={() => { }}
          additionalstyles={`padding: 0.6em 2em;`}
        >
          <Wrapper>
            <Icon icon='Settings' size='22px' color='#FFF' />
            <StyledLabel additionalstyles={`color: #FFF; font-size: 16px; font-family: 'Poppins_400'; margin-left: 2em;`}>
              {network?.name}
            </StyledLabel>
          </Wrapper>
        </Option>
      </Wrapper>
      <Wrapper additionalstyles={`padding: 1em 2em; padding-top:2.1em;`}>
        <StyledLabel additionalstyles={`color: #2A3546; font-size: 14px; font-family: 'POPPINS_500';`}>
          MainNet Network
        </StyledLabel>
      </Wrapper>
      <NetworkSelector
        networks={networks}
        onSelect={(network: any) => setNetwork(network)}
      />
      <Wrapper additionalstyles={`background-color:#037DFF;position: absolute; bottom: 56px; width: 100%;`}>
        <Option
          bandcolor="#037DFF"
          isactive={true}
          onClick={() => { }}
          additionalstyles={`padding: 0.6em 2em;`}
        >
          <Wrapper>
            <StyledLabel additionalstyles={`color: #FFF; font-size: 14px; font-family: 'Poppins_300';`}>
              + Request for new Network
            </StyledLabel>
          </Wrapper>
        </Option>
      </Wrapper>
    </PanelContainer>
  }

  return (
    <PanelContainer isopen={isopen}>
      {/* <CloseButton onClick={togglePanel}>&times;</CloseButton> */}
      <div>
        <VerticalStepper
          steps={[
            {
              title: 'Network',
              content: (
                <div>
                  <p>Load a new configuration <br /> or built a new</p>
                </div>
              ),
              isCompleted: false,
              isactive: true
            },
            {
              title: 'Operations',
              content: <p>Load a new configuration <br /> or built a new</p>,
            },
            {
              title: 'Deploy',
              content: <p>Load a new configuration <br /> or built a new</p>,
            },
          ]}
        />
      </div>
    </PanelContainer>
  )
};

export default SidePanel;

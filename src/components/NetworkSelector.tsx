// NetworkSelector.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FilterTextbox } from './SearchBar';
import Icon from './MyIcon';
import { StyledLabel } from './Label';
import { Wrapper } from './Wrapper';

interface Network {
    id: string;
    name: string;
}

interface NetworkSelectorProps {
    networks: Network[];
    onSelect?: (selectedNetwork: Network) => void;
}

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const NetworkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NetworkItem = styled.li<{ selected: boolean }>`
  padding: 8px 15px;
  cursor: pointer;
//   background-color: ${props => (props.selected ? '#e2e2e2' : 'transparent')};
//   font-family: ${props => (props.selected ? 'Poppins_500' : 'inherit')};
  &:hover {
    background-color: #e2e2e2;
    font-family: 'Poppins_500';
  }
`;

const NetworkSelector: React.FC<NetworkSelectorProps> = ({ networks, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredNetworks, setFilteredNetworks] = useState<Network[]>(networks);
    const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);

    useEffect(() => {
        if (searchTerm) {
            setFilteredNetworks(networks.filter(network => network.name.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            setFilteredNetworks(networks);
        }
    }, [searchTerm, networks]);

    const handleNetworkClick = (network: Network) => {
        setSelectedNetwork(network);
        onSelect?.(network);
    };

    return (
        <div>
            <Wrapper additionalStyles={`padding: 0em 2em;padding-top:0;max-width:80%`}>
                <FilterTextbox placeholder="search"
                    value={searchTerm}
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                />
            </Wrapper>
            <NetworkList>
                {filteredNetworks.map(network => (
                    <NetworkItem
                        key={network.id}
                        selected={selectedNetwork?.id === network.id}
                        onClick={() => handleNetworkClick(network)}
                    >
                        <Wrapper additionalStyles={`padding: 0em 1em;`}>
                            <Icon icon='Settings' size='22px' color='#2A3546' />
                            <StyledLabel additionalStyles={`color: #2A3546; font-size: 14px; margin-left: 1.5em;`}>
                                {network.name}
                            </StyledLabel>
                        </Wrapper>
                    </NetworkItem>
                ))}
            </NetworkList>
        </div>
    );
};

export default NetworkSelector;

// NetworkSelector.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FilterTextbox } from './SearchBar';

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
  background-color: ${props => (props.selected ? '#f0f0f0' : 'transparent')};
  &:hover {
    background-color: #e2e2e2;
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
            <SearchInput
                placeholder="Search for a network..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <FilterTextbox placeholder="Search for a network..."
                value={searchTerm} />
            <NetworkList>
                {filteredNetworks.map(network => (
                    <NetworkItem
                        key={network.id}
                        selected={selectedNetwork?.id === network.id}
                        onClick={() => handleNetworkClick(network)}
                    >
                        {network.name}
                    </NetworkItem>
                ))}
            </NetworkList>
        </div>
    );
};

export default NetworkSelector;

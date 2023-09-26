import React, { useState } from 'react';
// import styled from 'styled-components';
import Accordion from '../Accordion';
import { FilterTextbox } from '../SearchBar';
import { Wrapper } from '../Wrapper';
import DraggableBox from '../DraggableBox';

const OperationsPanel: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <div>
            <Wrapper additionalstyles={`padding: 0em 0.5em;padding-top:0`}>
                <FilterTextbox placeholder="search"
                    value={searchTerm}
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                />
            </Wrapper>
            <Accordion title="First Section">
                <p>Content for the first section.</p>
                <DraggableBox id="box1" text="Box 1" />
                <DraggableBox id="box2" text="Box 2" />
            </Accordion>
            <Accordion title="Second Section">
                <p>Content for the second section.</p>
            </Accordion>
            <Accordion title="Third Section">
                <p>Content for the third section.</p>
            </Accordion>
        </div>
    );
};

export default OperationsPanel;
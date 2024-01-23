import React from 'react';
// import styled from 'styled-components';
import Accordion from '../../Accordion';

const DeployPanel: React.FC = () => {
    return (
        <div>
            Deploy
            <Accordion title="First Section" additionalstyles=''>
                <p>Content for the first section.</p>
            </Accordion>
            <Accordion title="Second Section" additionalstyles=''>
                <p>Content for the second section.</p>
            </Accordion>
            <Accordion title="Third Section" additionalstyles=''>
                <p>Content for the third section.</p>
            </Accordion>
        </div>
    );
};

export default DeployPanel;
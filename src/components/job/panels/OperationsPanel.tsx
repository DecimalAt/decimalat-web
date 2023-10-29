import React, { useState } from 'react';
import styled from 'styled-components';
import { BsGridFill } from 'react-icons/bs';
import Accordion from '../../Accordion';
import { FilterTextbox } from '../../SearchBar';
import { Wrapper } from '../../Wrapper';
import DraggableBox from '../../DraggableBox';
import { StyledLabel } from '../../Label';
import { httpTasks } from '../../../utils/constants';

export const CaretDownIcon = styled(BsGridFill)`
  color: #2E67FF;
  font-size: 0.7rem;
`;

const OperationsPanel: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <div>
            <Wrapper additionalstyles={`padding: 0em 0.5em;padding-top:0; background: #EEF0F4; padding: 20px;`}>
                <FilterTextbox placeholder="search"
                    value={searchTerm}
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                />
            </Wrapper>
            <Wrapper additionalstyles={`padding: 20px; padding-top: 0px;`}>
                <Accordion title="INPUT" additionalstyles={'background-color: #2E67FF'}>
                    <Wrapper additionalstyles={`padding: 10px 0;`}>
                        <Accordion title="Web 2 Fetch" additionalstyles={'background-color: #FFFFFF; color: #2A3546; margin-top: 0;'} additionalstylesContent={'background-color: #FFFFFF; padding:0;'} iconStyles={'color: #2A3546;'}>
                            <Wrapper additionalstyles={'display: grid; grid-template-columns: 1fr 1fr;'}>
                                {
                                    httpTasks.map(t => {
                                        return (
                                            <DraggableBox id={t.id.toString()} text="httptask">
                                                <Wrapper additionalstyles={'display: flex; flex-direction: column; align-items: center; color: #2A3546; font-size: 12px; padding-top: 16px; justify-content: center;'}>
                                                    <Wrapper additionalstyles={'background-color: #ECF2FF; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 5px;'}>
                                                        <CaretDownIcon />
                                                    </Wrapper>
                                                    <div>httpTask-{t.name}</div>
                                                </Wrapper>
                                            </DraggableBox>
                                        )
                                    })
                                }
                            </Wrapper>
                        </Accordion>
                    </Wrapper>
                    <Wrapper additionalstyles={`padding: 10px 0;`}>
                        <Accordion title="Web 3 Fetch" additionalstyles={'background-color: #FFFFFF; color: #2A3546; margin-top: 0;'} additionalstylesContent={'background-color: #FFFFFF; padding:0;'} iconStyles={'color: #2A3546;'}>
                            <Wrapper additionalstyles={'display: grid; grid-template-columns: 1fr 1fr;'}>
                            </Wrapper>
                        </Accordion>
                    </Wrapper>
                </Accordion>
                <Accordion title="PROCESSING" additionalstyles={'background-color: #ED6C5A'}>
                    <p>Content for the second section.</p>
                </Accordion>
                <Accordion title="VARIABLES" additionalstyles={'background-color: #8C7DFF'}>
                    <p>Content for the third section.</p>
                </Accordion>
            </Wrapper>
            <Wrapper additionalstyles={`padding: 0em 0.5em;padding-top:0; background: transparent; padding: 20px;`}>
                <StyledLabel additionalstyles={`color: #2A3546;font-size: 24px; font-family: 'POPPINS_500';`}>
                    httptask
                </StyledLabel>
                <br />
                <br />
                <StyledLabel additionalstyles={`color: #2A3546;font-size: 12px; font-family: 'POPPINS_300'; line-height:30px`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit facilis sit maxime error est quos, facere consequuntur praesentium ducimus, aut, voluptatibus quam. Molestiae nulla tempora pariatur. Molestiae, expedita assumenda!
                </StyledLabel>
            </Wrapper>
        </div>
    );
};

export default OperationsPanel;
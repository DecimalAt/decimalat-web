import React, { useState } from 'react';
import styled from 'styled-components';
import { BsGridFill } from 'react-icons/bs';
import Accordion from '../../Accordion';
import { FilterTextbox } from '../../SearchBar';
import { Wrapper } from '../../Wrapper';
import DraggableBox from '../../DraggableBox';
import { StyledLabel } from '../../Label';
import { httpTasks, processingTasks, web3Tasks } from '../../../utils/constants';
import { useListenToBroadcast } from '../../../hooks/useBroadcast';

export const CaretDownIcon = styled(BsGridFill)`
  color: #2E67FF;
  font-size: 0.7rem;
`;

const OperationsPanel: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    // const [variables, setVariables] = useState<[{ uid: string, id: string; text: string, type: string, config: any }]>();
    const [variables, setVariables] = useState<any[]>();
    const [helpHeaderText, setHelpHeaderText] = useState('')

    useListenToBroadcast((droppedVariables) => {
        debugger
        if (Array.isArray(droppedVariables)) {
            setVariables(droppedVariables);
        }
    });

    const handleHelpText = (text: string) => {
        setHelpHeaderText(text);
    }

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
                                            <DraggableBox id={t.id.toString()} type="httptask" text={t.name} onHelpClick={handleHelpText} helpHeaderText={t.label} >
                                                <Wrapper additionalstyles={'display: flex; flex-direction: column; align-items: center; color: #2A3546; font-size: 12px; padding-top: 16px; justify-content: center;'}>
                                                    <Wrapper additionalstyles={'background-color: #ECF2FF; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 5px;'}>
                                                        <CaretDownIcon />
                                                    </Wrapper>
                                                    <div>{t.label}</div>
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
                                {
                                    web3Tasks.map(t => {
                                        return (
                                            <DraggableBox id={t.id.toString()} type="web3Tasks" text={t.name} onHelpClick={handleHelpText} helpHeaderText={t.label}>
                                                <Wrapper additionalstyles={'display: flex; flex-direction: column; align-items: center; color: #2A3546; font-size: 12px; padding-top: 16px; justify-content: center;'}>
                                                    <Wrapper additionalstyles={'background-color: #ECF2FF; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 5px;'}>
                                                        <CaretDownIcon />
                                                    </Wrapper>
                                                    <div>{t.label}</div>
                                                </Wrapper>
                                            </DraggableBox>
                                        )
                                    })
                                }
                            </Wrapper>
                        </Accordion>
                    </Wrapper>
                </Accordion>
                <Accordion title="PROCESSING" additionalstyles={'background-color: #ED6C5A'}>
                    <Wrapper additionalstyles={`padding: 10px 0;`}>
                        <Accordion title={processingTasks[0].type.toUpperCase()} additionalstyles={'background-color: #FFFFFF; color: #2A3546; margin-top: 0;'} additionalstylesContent={'background-color: #FFFFFF; padding:0;'} iconStyles={'color: #2A3546;'}>
                            <Wrapper additionalstyles={'display: grid; grid-template-columns: 1fr 1fr;'}>
                                {
                                    processingTasks[0].operations.map(t => {
                                        return (
                                            <DraggableBox id={t.id.toString()} type={processingTasks[0].type.toUpperCase()} text={t.name} onHelpClick={handleHelpText} helpHeaderText={t.label}>
                                                <Wrapper additionalstyles={'display: flex; flex-direction: column; align-items: center; color: #2A3546; font-size: 12px; padding-top: 16px; justify-content: center;'}>
                                                    <Wrapper additionalstyles={'background-color: #ECF2FF; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 5px;'}>
                                                        {t.symbol}
                                                    </Wrapper>
                                                    <div>{t.label}</div>
                                                </Wrapper>
                                            </DraggableBox>
                                        )
                                    })
                                }
                            </Wrapper>
                        </Accordion>
                    </Wrapper>
                    <Wrapper additionalstyles={`padding: 10px 0;`}>
                        <Accordion title={processingTasks[1].type.toUpperCase()} additionalstyles={'background-color: #FFFFFF; color: #2A3546; margin-top: 0;'} additionalstylesContent={'background-color: #FFFFFF; padding:0;'} iconStyles={'color: #2A3546;'}>
                            <Wrapper additionalstyles={'display: grid; grid-template-columns: 1fr 1fr;'}>
                                {
                                    processingTasks[1].operations.map(t => {
                                        return (
                                            <DraggableBox id={t.id.toString()} type={processingTasks[1].type.toUpperCase()} text={t.name} onHelpClick={handleHelpText} helpHeaderText={t.label}>
                                                <Wrapper additionalstyles={'display: flex; flex-direction: column; align-items: center; color: #2A3546; font-size: 12px; padding-top: 16px; justify-content: center;'}>
                                                    <Wrapper additionalstyles={'background-color: #ECF2FF; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 5px;'}>
                                                        {t.symbol}
                                                    </Wrapper>
                                                    <div>{t.label}</div>
                                                </Wrapper>
                                            </DraggableBox>
                                        )
                                    })
                                }
                            </Wrapper>
                        </Accordion>
                    </Wrapper>
                </Accordion>
                <Accordion title="VARIABLES" additionalstyles={'background-color: #8C7DFF'}>
                    <Wrapper additionalstyles={'display: grid; grid-template-columns: 1fr 1fr;'}>
                        {
                            Array.isArray(variables) && variables?.map(t => {
                                return (
                                    <DraggableBox key={t.id} id={t.id.toString()} type="variables" text={t.text} onHelpClick={handleHelpText} helpHeaderText='Variables'>
                                        <Wrapper additionalstyles={'display: flex; flex-direction: column; align-items: center; color: #2A3546; font-size: 12px; padding-top: 16px; justify-content: center;'}>
                                            <Wrapper additionalstyles={'background-color: #ECF2FF; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 5px;'}>
                                                {/* <CaretDownIcon /> */}
                                                (X)
                                            </Wrapper>
                                            <div>{t.config?.label || t.text}</div>
                                        </Wrapper>
                                    </DraggableBox>
                                )
                            })
                        }
                    </Wrapper>
                </Accordion>
            </Wrapper>
            <Wrapper additionalstyles={`padding: 0em 0.5em;padding-top:0; background: transparent; padding: 20px;`}>
                <StyledLabel additionalstyles={`color: #2A3546;font-size: 24px; font-family: 'POPPINS_500';`}>
                    {helpHeaderText}
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

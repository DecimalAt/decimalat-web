import React, { useState } from 'react';
import styled from 'styled-components';
import EditableLabel from '../../../../EditableLabel';
import { useBroadcast } from '../../../../../hooks/useBroadcast';
import UniswapExchangeRate from './UniswapExchangeRate';

export interface Web3FetchType {
    label?: string;
}

interface Web3FetchFormProps {
    method?: string,
    index?: number,
    item?: any,
    onSubmit: (task: Web3FetchType) => void;
}

const FormContainer = styled.div`
//   width: 300px;
//   margin: 0 auto;
`;

const CollapsiblePanel = styled.div<{ isOpen: boolean }>`
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  transition: max-height 0.3s ease-in-out;
`;



// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Web3Fetch: React.FC<Web3FetchFormProps> = ({ onSubmit, index = 0, item }) => {
    // const [task, setTask] = useState<Web3FetchType>({
    //     // method: method,
    //     // url: '',
    //     // value: '',
    //     // decoding: '',
    //     label: `Variable ${index}`,
    // });

    const [isPanelOpen, setPanelOpen] = useState(true);
    const [taskLabel, setTaskLabel] = useState('');
    const broadcast = useBroadcast();


    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null,
    //     field: keyof Web3FetchType,
    //     option?: { id: string, name: string }
    // ) => {
    //     let value = null;
    //     if (field === 'decoding' || field === 'label') {
    //         value = option?.name;
    //     } else {
    //         value = e?.target?.value;
    //     }
    //     setTask({ ...task, [field]: value });
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     onSubmit(task);
    //     // setTask({ method: 'GET', url: '', value: '', decoding: '' }); // Reset the form fields
    // };

    const handleTogglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

    const handleLabelSave = (newLabel: string, /*uid: string*/) => {
        console.log('Label saved:', newLabel);
        setTaskLabel(newLabel);
        debugger
        item.config.label = newLabel;
        broadcast(item);
    };

    debugger

    return (
        <>
            <FormContainer>
                Web3 Task - {item.text}
                <div>
                    <EditableLabel label={taskLabel || item.config?.label} onSave={handleLabelSave} uid={item.uid} />
                    <Button type="button" onClick={handleTogglePanel} />
                </div>
                <CollapsiblePanel isOpen={isPanelOpen}>
                    {
                        item.text === 'UniswapExchangeRate' &&
                        <UniswapExchangeRate></UniswapExchangeRate>
                    }
                </CollapsiblePanel>
            </FormContainer>
        </>
    );
};

export default Web3Fetch;

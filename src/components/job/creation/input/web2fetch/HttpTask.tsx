import React, { useState } from 'react';
import styled from 'styled-components';
import { contentTypes } from '../../../../../utils/constants';
import Dropdown from '../../../../Dropdown';
import EditableLabel from '../../../../EditableLabel';

export interface HttpTaskType {
    method: string;
    url: string;
    value: string;
    decoding: string;
    headers?: string;
    label?: string;
    // Add more fields as needed
}

interface HttpTaskFormProps {
    method: string,
    index?: number,
    onSubmit: (task: HttpTaskType) => void;
}

const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
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

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const HttpTask: React.FC<HttpTaskFormProps> = ({ method = 'GET', onSubmit, index = 0 }) => {
    const [task, setTask] = useState<HttpTaskType>({
        method: method,
        url: '',
        value: '',
        decoding: '',
        label: 'VariableA',
        // Add default values for other fields
    });

    const [isPanelOpen, setPanelOpen] = useState(false);
    const [taskLabel, setTaskLabel] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null,
        field: keyof HttpTaskType,
        option?: { id: string, name: string }
    ) => {
        let value = null;
        if (field === 'decoding' || field === 'label') {
            value = option?.name;
        } else {
            value = e?.target?.value;
        }
        setTask({ ...task, [field]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(task);
        // setTask({ method: 'GET', url: '', value: '', decoding: '' }); // Reset the form fields
    };

    const handleTogglePanel = () => {
        setPanelOpen(!isPanelOpen);
    };

    const handleLabelSave = (newLabel: string) => {
        console.log('Label saved:', newLabel);
        setTaskLabel(newLabel);
        handleChange(null, 'label', { id: '1000', name: newLabel });
        // Perform any additional actions on label save
    };

    return (
        <>
            <FormContainer onClick={handleTogglePanel}>
                <h2>{index}. HTTP Task - {method}</h2>
                <EditableLabel label={taskLabel || 'VariableA'} onSave={handleLabelSave} />
            </FormContainer>
            <CollapsiblePanel isOpen={isPanelOpen}>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="url">URL:</Label>
                        <Input
                            type="text"
                            id="url"
                            name="url"
                            value={task.url}
                            onChange={(e) => handleChange(e, 'url')}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="value">Value:</Label>
                        <Input
                            type="text"
                            id="value"
                            name="value"
                            value={task.value}
                            onChange={(e) => handleChange(e, 'value')}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Dropdown options={contentTypes} onSelect={(option) => handleChange(null, 'decoding', option)} />
                    </FormGroup>
                    {/* <Button type="button" onClick={handleTogglePanel}>
                        {isPanelOpen ? 'Hide Headers' : 'Show Headers'}
                    </Button>
                    <Button type="submit">Capture Task</Button> */}
                </form>
            </CollapsiblePanel>
        </>
    );
};

export default HttpTask;

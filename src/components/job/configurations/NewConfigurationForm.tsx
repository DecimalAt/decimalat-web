import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledLabel } from '../../Label';
import { Wrapper } from '../../Wrapper';
import { JobStepSelectionContainer } from '../types';
import DroppableContainer from '../../DroppableContainer';
import { Job } from '../Operations';
import HttpTask, { HttpTaskType } from '../creation/input/web2fetch/HttpTask';
import { httpTasks } from '../../../utils/constants';

const FormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
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

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

interface Configuration {
    name: string;
    description: string;
}

interface ConfigurationFormProps {
    onSubmit: (config: Configuration) => void;
}

const NewConfigurationForm: React.FC<ConfigurationFormProps> = ({ onSubmit }) => {
    const [config, setConfig] = useState<Configuration>({
        name: '',
        description: '',
    });
    const [job, setJob] = useState<Job>({ title: '', description: '' });

    const [droppedItems, setDroppedItems] = useState<{
        [id: string]: string;
    }>({});

    const handleDrop = (item: { id: string; text: string }) => {
        setDroppedItems((prevDroppedItems) => ({
            ...prevDroppedItems,
            [item.id]: item.text,
        }));
    };

    const handleHttpTaskSubmit = (task: HttpTaskType) => {
        debugger;
    }

    // const handleInputChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     const { name, value } = e.target;
    //     setJob((prevJob) => ({ ...prevJob, [name]: value }));
    // };

    // const handleCreateJob = () => {
    //     // onCreateJob(job);
    //     setJob({ title: '', description: '' });
    // };

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement>,
    //     field: keyof Configuration
    // ) => {
    //     const { value } = e.target;
    //     setConfig({ ...config, [field]: value });
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     onSubmit(config);
    //     setConfig({ name: '', description: '' });
    // };

    return (
        <JobStepSelectionContainer>
            <StyledLabel additionalstyles={`margin: 0; font-weight: bold; font-size: 18px; font-family: 'Poppins_400';`}>Configuration</StyledLabel>
            <br />
            <br />
            <br />
            <Wrapper additionalstyles={``}>


                {/* <h2>Create a New Job</h2>
                <label htmlFor="title">Title:</label>
                <InputField
                    type="text"
                    name="title"
                    id="title"
                    value={job.title}
                    onChange={handleInputChange}
                />
                <label htmlFor="description">Description:</label> */}

                <div>
                    <ul>
                        {
                            Object.keys(droppedItems).map((tId: string, index: number) => {
                                const m = httpTasks.find(h => h.id === tId)?.name || 'm';
                                return <HttpTask method={m} onSubmit={handleHttpTaskSubmit} index={index + 1} />
                            })
                        }
                    </ul>
                </div>

                <DroppableContainer onDrop={handleDrop} />
                {/* <div>
                    <h2>Dropped Items:</h2>
                    <ul>
                        {Object.keys(droppedItems).map((id) => (
                            <li key={id}>{droppedItems[id]}</li>
                        ))}
                    </ul>
                </div>


                <textarea
                    name="description"
                    id="description"
                    rows={4}
                    value={job.description}
                    onChange={handleInputChange}
                /> */}
                {/* <Button onClick={handleCreateJob}>Create Job</Button> */}
            </Wrapper>
            <br />
            <br />
            <br />
        </JobStepSelectionContainer >
    );

    // return (
    //     <FormContainer>
    //         <h2>Create a New Configuration</h2>
    //         <form onSubmit={handleSubmit}>
    //             <FormGroup>
    //                 <Label htmlFor="name">Name:</Label>
    //                 <Input
    //                     type="text"
    //                     id="name"
    //                     name="name"
    //                     value={config.name}
    //                     onChange={(e) => handleChange(e, 'name')}
    //                 />
    //             </FormGroup>
    //             <FormGroup>
    //                 <Label htmlFor="description">Description:</Label>
    //                 <Input
    //                     type="text"
    //                     id="description"
    //                     name="description"
    //                     value={config.description}
    //                     onChange={(e) => handleChange(e, 'description')}
    //                 />
    //             </FormGroup>
    //             <Button type="submit">Create Configuration</Button>
    //         </form>
    //     </FormContainer>
    // );
};

export default NewConfigurationForm;
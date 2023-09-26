import React, { useState } from 'react';
import styled from 'styled-components';
import DroppableContainer from '../DroppableContainer';

const OperationsContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface Job {
    title: string;
    description: string;
}

interface OperationsProps {
    onCreateJob: (job: Job) => void;
}

const Operations: React.FC<OperationsProps> = ({ onCreateJob }) => {
    const [job, setJob] = useState<Job>({ title: '', description: '' });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setJob((prevJob) => ({ ...prevJob, [name]: value }));
    };

    const handleCreateJob = () => {
        onCreateJob(job);
        setJob({ title: '', description: '' });
    };

    const [droppedItems, setDroppedItems] = useState<{
        [id: string]: string;
    }>({});

    const handleDrop = (item: { id: string; text: string }) => {
        setDroppedItems((prevDroppedItems) => ({
            ...prevDroppedItems,
            [item.id]: item.text,
        }));
    };

    return (
        <OperationsContainer>
            <h2>Create a New Job</h2>
            <label htmlFor="title">Title:</label>
            <InputField
                type="text"
                name="title"
                id="title"
                value={job.title}
                onChange={handleInputChange}
            />
            <label htmlFor="description">Description:</label>

            <DroppableContainer onDrop={handleDrop} />
            <div>
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
            />
            <Button onClick={handleCreateJob}>Create Job</Button>
        </OperationsContainer>
    );
};

export default Operations;

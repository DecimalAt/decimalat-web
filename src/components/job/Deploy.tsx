import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-Components for styling
const SchedulerContainer = styled.div`
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

interface Deployment {
    environment: string;
    date: string;
}

interface DeploymentSchedulerProps {
    onSubmit: (deployment: Deployment) => void;
}

const Deploy: React.FC<DeploymentSchedulerProps> = ({ onSubmit }) => {
    const [deployment, setDeployment] = useState<Deployment>({
        environment: '',
        date: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: keyof Deployment
    ) => {
        const { value } = e.target;
        setDeployment({ ...deployment, [field]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(deployment);
        setDeployment({ environment: '', date: '' });
    };

    return (
        <SchedulerContainer>
            <h2>Schedule a Deployment</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="environment">Environment:</Label>
                    <Input
                        type="text"
                        id="environment"
                        name="environment"
                        value={deployment.environment}
                        onChange={(e) => handleChange(e, 'environment')}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date">Date:</Label>
                    <Input
                        type="text"
                        id="date"
                        name="date"
                        value={deployment.date}
                        onChange={(e) => handleChange(e, 'date')}
                    />
                </FormGroup>
                <Button type="submit">Schedule Deployment</Button>
            </form>
        </SchedulerContainer>
    );
};

export default Deploy;

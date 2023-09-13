// NewJob.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Page from '../../components/layout/Page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: 1px solid #e1e1e1;
  padding: 20px;
  border-radius: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 15px;
  cursor: pointer;
`;

interface NewJobProps {
  onSubmit: (title: string, description: string) => void;
}

const NewJob: React.FC<NewJobProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title && description) {
      onSubmit(title, description);
      setTitle(''); // Clear the inputs after submission
      setDescription('');
    }
  };

  return (
    <Page>
      <Container>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
          rows={5}
        />
        <Button onClick={handleSubmit}>Post Job</Button>
      </Container>
    </Page>
  );
};

export default NewJob;

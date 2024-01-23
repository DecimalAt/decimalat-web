// src/components/JsonVerificationComponent.tsx
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

interface JsonVerificationComponentProps {
  onSubmit: (jsonData: object) => void;
}

const JsonVerificationComponent: React.FC<JsonVerificationComponentProps> = ({ onSubmit }) => {
  const [jsonString, setJsonString] = useState('');

  const handleJsonChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJsonString(e.target.value);
  };

  const handleVerificationSubmit = () => {
    try {
      const jsonData = JSON.parse(jsonString);
      onSubmit(jsonData);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <Container>
      <h2>JSON Verification Component</h2>
      <TextArea
        placeholder="Paste JSON String Here"
        value={jsonString}
        onChange={handleJsonChange}
      />
      <SubmitButton onClick={handleVerificationSubmit}>Submit for Verification</SubmitButton>
    </Container>
  );
};

export default JsonVerificationComponent;
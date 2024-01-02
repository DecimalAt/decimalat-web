import React, { useState } from 'react';
import styled from 'styled-components';

// Define the form fields interface
interface HTTPPost {
  url: string;
  value: string;
  encoding: string;
}

// Styled components for the form
const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
`;

const Select = styled.select`
  padding: 8px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const FormCapture: React.FC = () => {
  // State to store the form fields
  const [httpPost, setHTTPPost] = useState<HTTPPost>({
    url: '',
    value: '',
    encoding: 'utf-8', // Default encoding
  });

  // Handler for form field changes
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHTTPPost((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can perform further actions here, like making an API request
    console.log('Form submitted:', httpPost);
  };

  return (
    <FormContainer>
      <h2>HTTP POST Task</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          URL:
          <Input type="text" name="url" value={httpPost.url} onChange={handleFieldChange} />
        </Label>
        <Label>
          Value:
          <Input type="text" name="value" value={httpPost.value} onChange={handleFieldChange} />
        </Label>
        <Label>
          Encoding:
          <Select name="encoding" value={httpPost.encoding} onChange={handleFieldChange}>
            <option value="utf-8">UTF-8</option>
            <option value="iso-8859-1">ISO-8859-1</option>
            {/* Add more encoding options as needed */}
          </Select>
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default FormCapture;
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

// Define the types for logical operations
type LogicalOperation = 'equal' | 'lessThan' | 'greaterThan';

// Define the props for the LogicalFormComponent
interface LogicalFormProps {
  operation: LogicalOperation;
}

// Styled components for the form
const FormContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

const LogicalFormComponent: React.FC<LogicalFormProps> = ({ operation }) => {
  const [inputValues, setInputValues] = useState<number[]>([]);
  const [result, setResult] = useState<boolean | null>(null);

  const handleChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = isNaN(newValue) ? 0 : newValue;
      return newValues;
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Perform the selected logical operation
    switch (operation) {
      case 'equal':
        setResult(inputValues[0] === inputValues[1]);
        break;
      case 'lessThan':
        setResult(inputValues[0] < inputValues[1]);
        break;
      case 'greaterThan':
        setResult(inputValues[0] > inputValues[1]);
        break;
      default:
        setResult(null);
    }
  };

  // Generate input fields based on the number of inputs required for the operation
  const renderInputFields = () => {
    return Array.from({ length: 2 }).map((_, index) => (
      <Input
        key={index}
        type="number"
        value={inputValues[index]}
        onChange={handleChange(index)}
        placeholder={`Number ${index + 1}`}
      />
    ));
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Label>Enter Numbers for {operation}:</Label>
        {renderInputFields()}
        <Button type="submit">Evaluate {operation}</Button>
      </form>
      {result !== null && <p>Result: {result.toString()}</p>}
    </FormContainer>
  );
};

export default LogicalFormComponent;

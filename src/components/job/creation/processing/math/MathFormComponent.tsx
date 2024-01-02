import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

// Define the types for mathematical operations
type MathOperation = 'add' | 'subtract' | 'multiply' | 'divide' | 'mean';

// Define the props for the MathFormComponent
interface MathFormProps {
  operation: MathOperation;
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

const MathFormComponent: React.FC<MathFormProps> = ({ operation }) => {
  const [numInputs, setNumInputs] = useState<number>(2);
  const [inputValues, setInputValues] = useState<number[]>(Array.from({ length: numInputs }, () => 0));
  const [result, setResult] = useState<number | null>(null);

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

    // Perform the selected mathematical operation
    switch (operation) {
      case 'add':
        setResult(inputValues.reduce((sum, value) => sum + value, 0));
        break;
      case 'subtract':
        setResult(inputValues.reduce((diff, value) => diff - value, 0));
        break;
      case 'multiply':
        setResult(inputValues.reduce((product, value) => product * value, 1));
        break;
      case 'divide':
        setResult(inputValues.reduce((quotient, value) => quotient / value, 1));
        break;
      case 'mean':
        setResult(inputValues.length ? inputValues.reduce((sum, value) => sum + value, 0) / inputValues.length : 0);
        break;
      default:
        setResult(null);
    }
  };

  const handleNumInputsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newNumInputs = parseInt(event.target.value, 10);
    setNumInputs(newNumInputs);
    setInputValues(Array.from({ length: newNumInputs }, () => 0));
  };

  // Generate input fields based on the number of inputs
  const renderInputFields = () => {
    return Array.from({ length: numInputs }).map((_, index) => (
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
        <Label>Select Number of Inputs:</Label>
        <select onChange={handleNumInputsChange} value={numInputs}>
          {[2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <Label>Enter Numbers for {operation}:</Label>
        {renderInputFields()}
        <Button type="submit">Calculate {operation}</Button>
      </form>
      {result !== null && <p>Result: {result}</p>}
    </FormContainer>
  );
};

export default MathFormComponent;

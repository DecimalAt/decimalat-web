import React, { useState } from 'react';
import styled from 'styled-components';

// Define the form fields interface
interface FormFields {
  tokenAddressIn: string;
  tokenAddressOut: string;
  tokenAmountIn: string;
  slippage: string;
  provider: string;
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

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const UniswapExchangeRate: React.FC = () => {
  // State to store the form fields
  const [formFields, setFormFields] = useState<FormFields>({
    tokenAddressIn: '',
    tokenAddressOut: '',
    tokenAmountIn: '',
    slippage: '',
    provider: '',
  });

  // Handler for form field changes
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can perform further actions here, like making an API request
    console.log('Form submitted:', formFields);
  };

  return (
    <FormContainer>
      <h2>Uniswap Exchange Rate</h2>
      <Form onSubmit={handleSubmit}>
        <Label>
          Token Address (In):
          <Input
            type="text"
            name="tokenAddressIn"
            value={formFields.tokenAddressIn}
            onChange={handleFieldChange}
          />
        </Label>
        <Label>
          Token Address (Out):
          <Input
            type="text"
            name="tokenAddressOut"
            value={formFields.tokenAddressOut}
            onChange={handleFieldChange}
          />
        </Label>
        <Label>
          Token Amount (In):
          <Input
            type="text"
            name="tokenAmountIn"
            value={formFields.tokenAmountIn}
            onChange={handleFieldChange}
          />
        </Label>
        <Label>
          Slippage:
          <Input type="text" name="slippage" value={formFields.slippage} onChange={handleFieldChange} />
        </Label>
        <Label>
          Provider:
          <Input
            type="text"
            name="provider"
            value={formFields.provider}
            onChange={handleFieldChange}
          />
        </Label>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default UniswapExchangeRate;

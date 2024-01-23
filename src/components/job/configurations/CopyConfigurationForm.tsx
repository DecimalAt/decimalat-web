import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledLabel } from '../../Label';
import { Wrapper } from '../../Wrapper';
import { JobStepSelectionContainer } from '../types';
import JsonVerificationComponent from './JsonInput';

// Styled-Components for styling
// const FormContainer = styled.div`
//   width: 300px;
//   margin: 0 auto;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

interface Configuration {
  name: string;
  description: string;
}

interface ConfigurationFormProps {
  onSubmit: (config: Configuration) => void;
}

const CopyConfigurationForm: React.FC<ConfigurationFormProps> = ({ onSubmit }) => {
  const [config, setConfig] = useState<Configuration>({
    name: '',
    description: '',
  });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   field: keyof Configuration
  // ) => {
  //   const { value } = e.target;
  //   setConfig({ ...config, [field]: value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onSubmit(config);
  //   setConfig({ name: '', description: '' });
  // };

  const handleVerificationSubmit = (jsonData: object) => {
    // Add your verification logic here
    console.log('Verifying JSON:', jsonData);
  };

  return (
    <JobStepSelectionContainer>
      <StyledLabel additionalstyles={`margin: 0; font-weight: bold; font-size: 18px; font-family: 'Poppins_400';`}>JSON</StyledLabel>
      <br />
      <br />
      <br />
      <Wrapper additionalstyles={`display: flex; flex-direction: row; align-items: center; width: 180px; justify-content: space-between;`}>
        <JsonVerificationComponent onSubmit={handleVerificationSubmit} />
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

export default CopyConfigurationForm;

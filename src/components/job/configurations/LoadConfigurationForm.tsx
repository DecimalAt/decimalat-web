import React, { useState } from 'react';
// import styled from 'styled-components';
import { StyledLabel } from '../../Label';
import { Wrapper } from '../../Wrapper';
import { JobStepSelectionContainer } from '../types';
import InputBox from '../../InputBox';
// import Dropdown from '../../Dropdown';
// import { frequencies } from '../../../utils/constants';
// import { Button } from '../../Button';

const URL_REGEX = /^(ftp|http|https):\/\/[^ "]+$/;
const [url, setUrl] = useState<string>('');
const [isValid, setIsValid] = useState<boolean>(true);

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

const LoadConfigurationForm: React.FC<ConfigurationFormProps> = ({ /*onSubmit*/ }) => {
    // const [config, setConfig] = useState<Configuration>({
    //     name: '',
    //     description: '',
    // });

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

    const handleUrlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setUrl(value);
        setIsValid(URL_REGEX.test(value));
    };

    const handleFrequencyChange = (option: { id: string; name: string; }) => {

    };

    return (
        <JobStepSelectionContainer>
            <StyledLabel additionalstyles={`margin: 0; font-weight: bold; font-size: 18px; font-family: 'Poppins_400';`}>Load Configuration</StyledLabel>
            <br />
            <br />
            <br />
            <Wrapper additionalstyles={`display: flex; flex-direction: row; align-items: center; justify-content: space-between;`}>
                <InputBox
                    type="text"
                    placeholder="Enter github URL"
                    onChange={handleUrlInputChange}
                    className="my-input"
                    style={{
                        width: '500px',
                        height: '30px',
                        background: '#F4F5F9',
                        border: 'none',
                        borderRadius: '5px',
                        outline: 'none',
                        fontSize: '12px',
                        padding: '0px 10px'
                    }}
                />
            </Wrapper>
            <br />
            <br />
            <Wrapper additionalstyles={`display: flex; flex-direction: row; align-items: center; width: 300px; justify-content: space-between;`}>
                <InputBox
                    type="text"
                    placeholder="Enter units"
                    onChange={handleInputChange}
                    className="my-input"
                    style={{
                        width: '500px',
                        height: '30px',
                        background: '#F4F5F9',
                        border: 'none',
                        borderRadius: '5px',
                        outline: 'none',
                        fontSize: '12px',
                        padding: '0px 10px',
                        marginRight: '10px'
                    }}
                />
                Blocks
                {/* <Dropdown options={frequencies} onSelect={handleFrequencyChange} /> */}
            </Wrapper>
            <br />
            <br />
            {/* <Wrapper additionalstyles={`display: flex; flex-direction: row; align-items: center; width: 180px; justify-content: space-between;`}>
                <Button
                    color='secondary'
                >
                    Submit
                </Button>
            </Wrapper> */}
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

export default LoadConfigurationForm;

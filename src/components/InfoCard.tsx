import React from 'react';
import styled from 'styled-components';
import { StyledLabel } from './Label';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;  // This type will allow us to pass any React component as an icon
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e1e1e1;
  padding: 18px;
  border-radius: 12px;
  background: #4870e1;
  height: 112px;
  width: 224px;
  color: #FFF;
  margin-right: 1em;
`;

const IconContainer = styled.div`
  margin-right: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 0;
`;

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <CardContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>
          <StyledLabel additionalStyles={`color: #FFF;font-size: 14px; font-family: 'POPPINS_300';`}>
            {description}
          </StyledLabel>
        </Description>
      </TextContainer>
      <IconContainer>
        {icon}
      </IconContainer>
    </CardContainer>
  );
};

export default InfoCard;

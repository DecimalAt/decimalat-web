import React from 'react';
import styled from 'styled-components';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;  // This type will allow us to pass any React component as an icon
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e1e1e1;
  padding: 10px;
  border-radius: 12px;
  background: blue;
  height: 180px;
  width: 320px;
  color: #FFF
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
        <Description>{description}</Description>
      </TextContainer>
      <IconContainer>
        {icon}
      </IconContainer>
    </CardContainer>
  );
};

export default InfoCard;

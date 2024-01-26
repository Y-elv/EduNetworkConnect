import React from 'react';
import styled from "styled-components";

const TestimonyCard = ({ imageSrc, spokenText }) => {
  return (
    <Card>
      <img src={imageSrc} alt="Testimony" />
      <SpokenText>{spokenText}</SpokenText>
    </Card>
  );
};

export default TestimonyCard;

////////// styles
const Card = styled.div`
  background-color: #fff;
  padding-top: 20px;
  border-radius: 8px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added box shadow for a subtle lift effect */;
  width:20vw;
  

  img {
    width: 18vw;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const SpokenText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center; /* Center the spoken text horizontally and vertically */
  height: 100px; /* Set a fixed height for better appearance */
`;

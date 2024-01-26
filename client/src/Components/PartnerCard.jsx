import React from 'react'
import styled from "styled-components";
const PartnerCard = ({ logoSrc, partnerName }) => {
    return (
      <Card>
        <img src={logoSrc} alt="Partner Logo" />
        <p>{partnerName}</p>
      </Card>
    );
  };

  export default PartnerCard ;

  ////////// styles
  const Card = styled.div`
  background-color: #fff; /* Set your desired background color */
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  text-align: center;

  img {
    width: 100%; /* Ensure the image takes the full width of the card */
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #555; /* Set your desired text color */
  }
`;
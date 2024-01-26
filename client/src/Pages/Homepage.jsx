import React from 'react'
import { Header,Hero,BecomeMember,TestimonyCard,PartnerCard } from '../Components';
import styled from "styled-components";
import student1 from "../../src/assets/images/student1.jpg"
import student2 from "../../src/assets/images/student2.jpg"
import student3 from "../../src/assets/images/student3.jpg"
import masterCard from "../../src/assets/images/masterCard.png"
import aluLogo from "../../src/assets/images/ALU logo.jpg"
import aims from "../../src/assets/images/aims.jpg"


const Homepage = () => {
  return (
    <Wrapper>
       <BecomeMember/>
       <TestimoniesTitle>Testimonies</TestimoniesTitle>
       <div className="testimonies">
       <TestimonyCard
          imageSrc={student1}
          spokenText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <TestimonyCard
          imageSrc={student2}
          spokenText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <TestimonyCard
          imageSrc={student3}
          spokenText="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
       </div>
       <PartnershipTitle>Our Partnership</PartnershipTitle>
       <div className="partnership">
       <PartnerCard
          logoSrc={masterCard}
          partnerName="Mastercard"
        />
        <PartnerCard
          logoSrc={aluLogo}
          partnerName="ALU"
        />
        <PartnerCard
          logoSrc={aims}
          partnerName="AIMS"
        />
       </div>
    </Wrapper>
  
  )
}

export default Homepage

///// styles
const Wrapper = styled.section`
  border: 1px solid red;
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .testimonies {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Adjust the gap between cards */
    height: 100%; /* Full height of the container */
  }
  .partnership{
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    gap: 20px; 
     
  }
`;
const TestimoniesTitle = styled.h2`
  font-size: 34px;
  color: var(--primary-color); /* Set your desired title color */
  margin-top:10px; /* Adjust the margin as needed */
`;

const PartnershipTitle = styled.h2`
  font-size: 34px;
  color: var(--primary-color); /* Set your desired title color */
  margin-top: 10px; /* Adjust the margin as needed */
`;
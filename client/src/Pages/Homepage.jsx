import React from 'react'
import { Header,Hero,BecomeMember,TestimonyCard,PartnerCard } from '../Components';
import styled from "styled-components";
import student1 from "../../src/assets/images/student1.jpg"
import student2 from "../../src/assets/images/student2.jpg"
import student3 from "../../src/assets/images/student3.jpg"


const Homepage = () => {
  return (
    <Wrapper>
       <BecomeMember/>
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
       <div className="partnership">
       <PartnerCard
          logoSrc="path/to/partner-logo-1.png"
          partnerName="ABC Company"
        />
        <PartnerCard
          logoSrc="path/to/partner-logo-2.png"
          partnerName="XYZ Foundation"
        />
        <PartnerCard
          logoSrc="path/to/partner-logo-3.png"
          partnerName="123 Organization"
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
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .testimonies {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Adjust the gap between cards */
    height: 100%; /* Full height of the container */
  }
`;
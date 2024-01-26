import React from "react";
import styled from "styled-components";
import student from "../../src/assets/images/student.jpg";
import Card from "../Components/card"
import volunteer from "../../src/assets/images/volunteer.jpg"
import { Header } from '../Components'
import view from "../../src/assets/images/view.jpg"
import studentHelp from "../../src/assets/images/studenthelp.jpg"

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className="header">
      <Header/>
      </div>
      <div className="all-sec">
        <div className="first-sec">
          <div className="first-sec-left">
            <h1>EduConnectNetwork</h1>
            <p>
              Education Connect is dedicated to bridging the gap for students,
              ensuring they thrive academically and professionally. Our mission
              involves connecting students with volunteers who offer various
              forms of support, including financial assistance, educational
              guidance, and mentorship.
            </p>
            <p>
              As a global education platform, Education Connect empowers
              students throughout their academic journey. Serving as a hub, we
              connect students with passionate volunteers providing support in
              funds, teaching assistance, and valuable advice. Our commitment
              lies in nurturing educational growth and fostering a community of
              dedicated volunteers.
            </p>
            <p>
              Originally an educational resource initiative, Education Connect
              has evolved into a vibrant global community. With over [number]
              users worldwide, our network of dedicated volunteers actively
              fosters inclusivity and support, empowering students to excel in
              their educational pursuits.
            </p>
          </div>

          <div className="first-sec-right">
            <img src={student} />
          </div>
        </div>
        <div className="second-sec">
        <div className="second-sec-contents"> 
          <h1>
            To narrow educational disparities, match students with
            <br /> volunteers, bridge gaps.
          </h1>
          <p>
            Education Connect Network advocates for companies committed to
            enhancing diversity in their educational initiatives. Our platform
            facilitates engagement with a targeted audience of students,
            positioning these organizations as preferred educational partners.
          </p>

          <p>
            We collaborate with institutions dedicated to making a positive
            impact in education and seeking to support a diverse student body.
            Our assistance includes creating a comprehensive information hub
            (institution profile) to showcase their commitment to inclusivity,
            emphasizing why students should choose them for their educational
            journey. Additionally, we aid in developing educational content and
            interviews that spotlight their inclusive culture, fostering an
            environment conducive to learning and growth.
          </p>
          </div>
        </div>
        <div className="third-sec">
         <Card
         name="SUPPORT"
         img={volunteer}
         button="Support"
         />
         <Card
         name="VIEW ORGANIZATION PROFILES"
         img={view}
         button="View"
         />
         <Card
         name="SEEK A HELP"
         img={studentHelp}
         button="Help"
         />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsPage;

//// styles
const Wrapper = styled.section`
  font-family:'Open Sans', sans-serif;
  display:flex;
  flex-direction:column;
  gap:4rem;
  .first-sec {
    
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
  }

  .first-sec-left {
    
    width: 55%;
    color: white;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 0px 30px;
  }

  .first-sec-left h1 {
    font-size: 2rem; /* Set your desired font size */
  }

  .first-sec-left p {
    font-size: 1.2rem; /* Set your desired font size */
  }

  .first-sec-right {
    
    width: 45%;
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }

  .first-sec-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .all-sec {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .second-sec {
    
    width: 100%;
    display: flex;
    padding: 40px;
  }

  .second-sec-contents {
   
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .second-sec-contents h1 {
    font-size: 2rem; /* Set your desired font size */
  }

  .second-sec-contents p {
    font-size: 1.2rem; /* Set your desired font size */
  }

  .third-sec {
    display: flex;
    flex-direction: row;
    
    justify-content: space-around;
  }
`;

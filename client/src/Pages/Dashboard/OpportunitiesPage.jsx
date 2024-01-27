import React from 'react';
import { EduConnectOpportunities } from "../../data";
import styled from "styled-components";
import { useNavigate,Link } from "react-router-dom";


const OpportunitiesPage = () => {
  return (
    <Wrapper>

      <Heading>Explore Current Opportunities with ECN</Heading>
      <PromoSection>
          <PromoText>Are you in need of financial assistance for school fees?</PromoText>
          <ApplyButton> <Link to="/apply" >Apply Now </Link> </ApplyButton>
        </PromoSection>
        {/* opportunities */}
        <Heading>Other opportunities</Heading>
      <OpportunitiesContainer>
        <OpportunitiesList>
          {EduConnectOpportunities.map((opportunity, index) => {
            const { name, about, date, location } = opportunity;

            return (
              <OpportunityCard key={index}>
                <OpportunityTitle>{name}</OpportunityTitle>
                <OpportunityDescription>{about}</OpportunityDescription>
                <OpportunityInfo>
                  <InfoItem>{date}</InfoItem>
                  <InfoItem>{location}</InfoItem>
                </OpportunityInfo>
                <ApplyButton> <Link to="/event" >Apply</Link></ApplyButton>
              </OpportunityCard>
            );
          })}
        </OpportunitiesList>
      </OpportunitiesContainer>
    </Wrapper>
  );
}

export default OpportunitiesPage;

const Wrapper = styled.section`
  padding: 50px;
`;

const Heading = styled.h3`
 color:var(--primary-color);
  font-weight: bold;
  margin-bottom: 30px;
  text-align:center;
  margin:10px 0px
`;

const OpportunitiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:10px
`;
const PromoSection = styled.div`
  border: 1px solid var(--primary-color);
  background: linear-gradient(45deg, #1f4670, #555);
  color: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  button{
    border:1px solid white
  }
`;

const PromoText = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;





const ApplyButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  a{
    color:inherit
  }
`;

const OpportunitiesList = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
`;

const OpportunityCard = styled.article`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const OpportunityTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const OpportunityDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

const OpportunityInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const InfoItem = styled.p`
  font-size: 20px;
  color: var(--primary-color);
`;


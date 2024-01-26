import React from 'react'
import {EduConnectOpportunities} from "../../data"
import styled from "styled-components";

const OpportunitiesPage = () => {

    console.log("opoo",EduConnectOpportunities)
  return (
    <Wrapper>
        <h3> Check out currently available opportunities by EduConnect</h3>
       <div>
        {EduConnectOpportunities.map((opportunity,index)=>{
        
        /// destructuring opportunities
        const {schoolFees,Learning} = opportunity
          
          return <section key={index} >
              {schoolFees}
            </section>
        })}
       </div>
        </Wrapper>
  


  )
}

export default OpportunitiesPage


///////// styles
const Wrapper = styled.section`
   
`
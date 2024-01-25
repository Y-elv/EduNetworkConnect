import React from 'react'
import { Header,Hero,BecomeMember } from '../Components'
import styled from "styled-components";

const Homepage = () => {
  return (
    <Wrapper>
      <Header/>
       <Hero/>
       <BecomeMember/>
    </Wrapper>
  
  )
}

export default Homepage

///// styles
const Wrapper = styled.section`
  border:1px solid blue;
  width:100%
`
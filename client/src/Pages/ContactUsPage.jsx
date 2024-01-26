import React from 'react'
import styled from "styled-components";
import { Header } from '../Components'

const ContactUsPage = () => {
  return (
    <Wrapper>
      <div className="header">
      <Header/>
      </div>
   
   
  </Wrapper>
  )
}

export default ContactUsPage

///// styles
const Wrapper = styled.section`
  border:1px solid blue;
  width:100%
`

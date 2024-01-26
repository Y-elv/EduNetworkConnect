import React from 'react'
import styled from "styled-components";

const PublicOppoCard = ({opportunity}) => {

    /// destructuring opp properties
    const {title, href,url,description} = opportunity
  

    /// main return
  return (
    <Wrapper  >
    <img src={ href} alt="name" />
    {/* title , details and visit */}
    <div className='info-container' >
    <h3 className='title' >{title}</h3>
    <p>{description}</p>
    <a  className='yes-btn' href={url} target='_blank' >View more</a>
    </div>
    </Wrapper>
  )
}

export default PublicOppoCard


////////// styles
const Wrapper = styled.article`
margin:0px 5px;
img{
        height:200px
    };
   position: relative;
    
   .title{
    color:var(--primary-color);
    background-color:var(--backgroundColor);
    border-radius:3px;
    margin-top:5px
   }
    .info-container{
    
        position:absolute;
        top:0;
        background-color:#0700008f;
        color:var(--white);
        height:100%;
        text-align:center;
        display:flex;
        flex-direction:column;
        gap:5px;
        align-items:center
    }
`
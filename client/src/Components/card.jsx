import React from 'react'
import styled from "styled-components";
import volunteer from "../../src/assets/images/volunteer.jpg"

const Card = () => {
   
  return (
< Wrapper>
<div className="up-part">
    <img src={volunteer}/>
    <h4>Support </h4>
</div>
<div className="down-part">
    <p>Education Connect Network Supports Companies Championing Diversity in Tech Education. Engage with our platform to connect with a specialized audience, positioning your institution as a preferred educational partner.</p>
</div>

</Wrapper>
   
  )
}

export default Card


//styles

const Wrapper = styled.section`
    width:20%;
    height:20%;
    border:1px solid red;

.up-part img{
    border-radius :0px 15px 0px 0px;
    
    

}
.down-part{
    
    
}
  
`






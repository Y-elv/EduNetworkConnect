import React from 'react'
import styled from "styled-components";


const Card = ({name,img,button}) => {
   
  return (
< Wrapper>

<div className="up-part">
    <img src={img}/>
    <h4>{name} </h4>
</div>
<div className="down-part">
    <p>Education Connect Network Supports Companies Championing Diversity in Tech Education. Engage with our platform to connect with a specialized audience, positioning your institution as a preferred educational partner.</p>
</div>
<div className="button">
<button>{button}</button>
</div>

</Wrapper>
   
  )
}

export default Card


//styles

const Wrapper = styled.section`
width: 100%;
max-width: 300px; /* Set a maximum width for the card */
margin: 16px;
border: 1px solid #ddd;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

.up-part {
  img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }
  h4 {
    padding: 10px;
    margin: 0;
  }
}

.down-part {
  padding: 16px;
  p {
    margin: 0;
  }
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  button {
    width:80%;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
}

@media (max-width: 768px) {
  max-width: 100%;
  margin: 16px 0;
}
  
`






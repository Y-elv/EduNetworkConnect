import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {availableOpportunities} from "../data"


//// each opportunity card
const card = availableOpportunities.map((opportunity)=>{
    const {title,id} =  opportunity
    return <h2 key={id} >{title}</h2>
})

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
    <Slider {...settings}>
      {card}
    </Slider>
  )
}

export default Hero






import React from 'react'
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {availableOpportunities} from "../data"
import PublicOppoCard from './PublicOppoCard';



//// each opportunity card
const card = availableOpportunities.map((opportunity)=>{
    const {id} =  opportunity
    return <PublicOppoCard key={id} opportunity={opportunity} />
})

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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






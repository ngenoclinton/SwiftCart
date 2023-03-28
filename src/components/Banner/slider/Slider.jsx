
import React, { Component } from 'react';
import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImageSlider.css';
import Slider from 'react-slick';

import {slides} from  './data';
// import required modules
import {faArrowLeft, faArrowRight, faShieldHalved, faTruck,faPhone, faBagShopping} from '@fortawesome/free-solid-svg-icons';
const PrevArrow= (props) =>{
    const {onClick } = props;
    return (
      <div  className="arrow-btn s-prev " onClick={onClick}>   
           <FontAwesomeIcon icon={faArrowLeft}/>      
      </div>
    )
  }
  const NextArrow  = (props) =>{
    const { className, onClick } = props;
    return (
      <div className="arrow-btn s-next"  onClick={onClick}>      
           <FontAwesomeIcon icon={faArrowRight}/>   
      </div>
    )
  }


function ImageSlider (){       
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: false,
        centerPadding: '150px',
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow  />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              centerMode: true,
              focusOnSelect: true,
              centerPadding: '0px',
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              centerMode: true,
              focusOnSelect: false,
              centerPadding: '20px',
            }
          }
        ]
      };
   
    return ( 
        <div className="slider">
            <Slider {...settings} >
            {slides.map((slide, index) => {
                return (                
                <div key={index} className="slide">              
                    <div className=''>
                        <img src={slide.imageUrl} alt={slide.description}/>  
                    </div>                        
                </div>
             )})}
             </Slider>
         </div>
      );
}

export default ImageSlider; 
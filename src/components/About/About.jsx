import React from 'react';
import { Route } from "react-router-dom";
import Hero from '../../aboutImages/ecommerce-vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faTruck,faPhone, faBagShopping, faPercentage, faPerson, faUser, faArrowRightArrowLeft, faPercent} from '@fortawesome/free-solid-svg-icons';
import './about.css'
import Brand from '../Home/brand/brand';

function About() {
    return (
    <>
<section >
        <div class="about-container">
            <div class="about-py-5">
                <div class="about-header">
                    <h1>About Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class="about-image">
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/001/222/481/small_2x/e-commerce-smartphone-shopping-concept.jpg' alt="About Hero"/>
                </div>
            </div>
        </div>
    </section>
    <section>
    <div class="services-container">
          <div className='services-header'>
          <h1>Our Services</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='services'>
             <div className='serv-Item'>
                <FontAwesomeIcon icon={faTruck} className='as-i'/>
                <p>Delivery Services</p>
             </div>
             <div className='serv-Item'>
                <FontAwesomeIcon icon={faArrowRightArrowLeft} className='as-i'/>
                <p>Shipping & Return</p>
             </div>
             <div className='serv-Item'>
                <FontAwesomeIcon icon={faPercent} className='as-i'/>                
                <p>Promotion</p>
             </div>
             <div className='serv-Item'>
                <FontAwesomeIcon icon={faUser} className='as-i'/>  
                <p>24 Hours Service</p>
                <p></p>
             </div>
          </div>
     </div>
    </section>
    <section>
        <Brand />
    </section>
    </>   
 )
}

export default About;
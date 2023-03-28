import React from 'react';
import Slider from 'react-slick/lib/slider';


import brand1 from '../../../../src/brandImages/brand-1.png';
import brand2 from '../../../../src/brandImages/brand-2.png';
import brand3 from '../../../../src/brandImages/brand-3.png';
import brand4 from '../../../../src/brandImages/brand-4.png';
import brand5 from '../../../../src/brandImages/brand-5.png';
import brand6 from '../../../../src/brandImages/brand-6.png';
import './brands.css'
import { brands } from './brands';
console.log(brands)



const Brand =( )=>  {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
    return(
  <div className=''>
    <div class="brands-container">
        <div class="section-header">
        <h3>Our Brands</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus
        </p>
        </div>
        <div class=" slick-slider">
                <Slider {...settings}>
                {brands.map((brand, index)=>{
                    return(
                        <div key={index} className='brand-slider'>
                        <img src={brand.image}></img>
                        </div>
                    )
                })}
                </Slider>
            
         
        </div>
    </div>
</div>
    )
}

export default Brand; 
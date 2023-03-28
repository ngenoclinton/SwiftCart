import React from "react";

import './banner.css'
// components imports 
import ImageSlider from "./slider/Slider";

function Banner(props) {   
  // const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
          <div className="banner-container">
          <div className="slider-container">        
            <ImageSlider />           
          </div>    
         </div> 
        </div>
      )
        
}

export default Banner;
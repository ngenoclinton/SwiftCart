import React, {useState} from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { faStar, faPlus, faHeart, faLeftLong, faRightLong} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// styles css
import './productcard.css'

function ProductCard({product, addToCart}){
    const {name, price, imageUrl, discount, description} = product;

    return(        
        <div className='product-container'>      
              <div className="product ">
              <span className='discount'>${discount}% Off</span>
                <img src={imageUrl} alt={description} />
                <div className='product-details'>
                    <span className='title'>{name}</span>
                    <span className='price'>${price}</span>
                    
                    <div className='like'>
                      <label> 0 </label>
                      <FontAwesomeIcon icon={faHeart} className="icon"/>
                    </div>
                    <div className='rate'>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <FontAwesomeIcon icon={faStar} className="star"/>
                      <span>(10)</span>
                    </div>
                    <div>
                    <button className='add-btn' onClick={()=>addToCart(product)}>
                    <FontAwesomeIcon icon={faPlus}/> Add to Cart</button>
                    </div>
                </div>
              </div>       
        </div>
    )
}

export default ProductCard;
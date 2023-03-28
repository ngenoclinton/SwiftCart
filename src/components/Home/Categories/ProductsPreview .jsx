import React, {useState} from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { faStar, faPlus, faHeart, faLeftLong, faRightLong} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// styles
import './preview.css';
// components
import ProductCard from './ProductCard';

const NextArrow = (props) =>{
  const {onClick} = props
  return (
    <div className='control-btn' onClick={onClick}>      
         <FontAwesomeIcon icon={faRightLong}/>      
    </div>
  )
}
const PrevArrow = (props) =>{
  const {onClick} = props
  return (
    <div className='control-btn' onClick={onClick}>      
         <FontAwesomeIcon icon={faLeftLong}/>      
    </div>
  )
}
/*----------------* function component ----------------------*/
/*----------------* function component ----------------------*/

function ProductsPreview ({products, addToCart}){
 const [count, setCount] = useState(0);
 
 const increment = (productId) =>{
    setCount(prevLike =>
      prevLike.map((like)=>
        like.id === productId ? {...like, likes:like.likes + 1} : like
      )
    );
 }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
        <>
        <div className="products">
        <Slider {...settings}>
        {products.filter((_, index) => index < 5).map((product, index) => (
              <div key={index} className="product">
               <ProductCard 
                product={product}
                addToCart={addToCart}
               />
              </div>
            ))}
        </Slider>
        </div>
        </>
    )
}

export default ProductsPreview;


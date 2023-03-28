import React from "react";
import {useNavigate,Link} from 'react-router-dom';
import {faHeart, faEye, faShoppingCart,faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import StarRatings from "react-star-ratings";


// styling css
import './FeaturedProducts.css'
// import data
import featured from "./featured";
const featuredData = featured.FeaturedProducts;

// next and previous helper functions
const PrevArrow= (props) =>{
    const {onClick } = props;
    return (
      <div  className="prev arrow-btn" onClick={onClick}>   
           <FontAwesomeIcon icon={faArrowLeft}/>      
      </div>
    )
  }
  const NextArrow  = (props) =>{
    const { className, onClick } = props;
    return (
      <div className="next arrow-btn"  onClick={onClick}>      
           <FontAwesomeIcon icon={faArrowRight}/>   
      </div>
    )
  }
function FeaturedProducts(props) {
    const {addToCart} =props;
    const settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow  />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              slidesToScroll: 1,
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
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              centerMode: true,
              focusOnSelect: false,
            }
          }
        ]
      };
   
    return(       
        <div className="featured-container" >
            <div className="f-heading">
            <h3>Featured Product</h3>
            <div className="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus</p>
            </div> 
            <div className="featured" >
            <Slider {...settings}>
               {featuredData.map((product,index)=>{
                return (                    
                <div key={index}>                   
                        <div className="product" key={index}>
                        <div className="f-img-container">
                            <img src={product.imageUrl} className="f-img"></img>
                        </div>
                        <div className='f-prod-det'>
                            <p className="p-name">{product.name}</p>
                            <StarRatings  
                              // rating={rating}
                              starRatedColor="#FFC107"
                              starEmptyColor="blue"
                              starHoverColor="#FFC107"
                              // changeRating={handleRatingChange}
                              numberOfStars={5}
                              starDimension="20px"
                              starSpacing="5px"
                              className="star-ratings"
                            /> 

                            <p>${product.price}.00
                            <span className='discount'> $5</span></p>
                        </div> 
                        <div className="overlay overlay-icons">
                            <FontAwesomeIcon icon={faHeart} />
                            <Link to={`/details/${product.id}`}>
                                <FontAwesomeIcon icon={faEye}/>
                            </Link>
                            <FontAwesomeIcon icon={faShoppingCart} onClick={()=>addToCart(product)}/>
                        </div> 
                        </div>               
                 </div>  
                   
                  )
                 
               })
           
               } </Slider>
            </div>           
        </div>
    )
}
export default FeaturedProducts;

import React from 'react';
import{useState} from 'react';

import {useParams, Link, useNavigate} from 'react-router-dom';

/*------syles.css----*/
import './details.css'

import StarRatings from 'react-star-ratings';
import Slider from "react-slick";

import {faHeart, faEye, faShoppingCart,faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*-----fetch data--------*/
import Products from '../../productscategories';
import CountDown from './CountDown';
import Rating from '../ratings/Ratings';
import DetailDescription from './DetailDescription';
import Reviews from '../reviews/Reviews';

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
function Details(props){
    let {id} = useParams();

    const { addReview, name,setName, email,setEmail,title,setTitle, review,setReview,rating,setRating,reviews,setReviews, onRatingChange} = props;
    /*----------start of states------------*/
    const {quantity, setQuantity} = useState(0);   
       
     const handleChange = (event) => {
       switch (event.target.name) {
         case 'name':
           setName(event.target.value);
           break;
         case 'email':
           setEmail(event.target.value);
           break;
         case 'title':
           setTitle(event.target.value);
           break;
         case 'review':
           setReview(event.target.value);
           break;
         case 'rating':
           setRating(parseInt(event.target.value));
           break;
         default:
           break;
       }
     };
     
    console.log(rating);    
    /*----------end of states------------*/

    // const targetDate = new Date('2023-03-11T00:1:00');
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 2, 0, 0);

    let productDetails =[]
    productDetails= Products.find((product) => product.id === parseInt(id));
    //    console.log(productDetails);
    let details = [];
    details.push(productDetails);
    // Get the category of the current product
    const currentCategory = productDetails.category;
    // console.log(currentCategory);

    // Filter the products array to get all products in the same category as the current product
    const relatedProduct = Products.filter(product => product.category === currentCategory && product !== productDetails);
    // console.log(relatedProduct);

    const itemInCart = props.cartItems.map((item)=>{
        return item
    }); 
    
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2500,
        // centerMode: true,
        nextArrow: <NextArrow  />,
        prevArrow: <PrevArrow  />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    return(
        <div className='details-container'>        
         {details.map((product, index)=>{
            return(
            <div className="">
              <div className='section' key={index} >
                <div className='d-left'>
                    <div><img src={productDetails.imageUrl}></img></div>
                    <div>Product details</div>
                </div>
                <div className='d-right'>
                    <h2 className='header'>{productDetails.name}</h2>
                    <p className='price'>{`$${productDetails.price}.00`}</p>
                    <div className='rates'>
                      <Rating/> 
                      <span>Rating 4.3 (34) | Read Reviews</span>
                    </div>
                        
                    <p>{productDetails.desc}</p>
                    <span>{productDetails.prices}</span>
                    
                    <div className='d-buttons'>
                    <button onClick={()=>props.addToCart(product)} className="d-button">Add To Cart</button>  
                    <Link to="/cart" className="d-button"><button className="d-button">Go To Cart</button></Link>
                    </div>
                    <div>
                    <CountDown 
                        targetDate={targetDate}
                    />
                    </div>
                </div>
             </div>      
             <section className='DetailDescription'>
             <DetailDescription 
                name={name}
                email={email}
                title={title}
                review={review}                              
                handleChange={handleChange}
                addReview={addReview}
                // review ratings
                rating={rating}  
                onRatingChange={ onRatingChange}
                productId={product.id}
             /> 
             </section>  
             <section className='Reviews'>
              <Reviews 
                  reviews={reviews}
                  rating={rating}
                />      
                {reviews.length === 0 && <h2 className="no-reviews">
                    No Reviews
                 </h2>}          
            </section>   
            </div>
            
            )
            })}
            
            <section className='related-products'>
                <div className='r-header'>
                    <h4>Related Products</h4>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra at massa sit amet ultricies. Nullam consequat, mauris non interdum cursus</p>
                </div>
                <div className='r-container'> 
                <Slider {...settings}>
                {relatedProduct.map((product, index)=>{
                    const isEven = index % 2 === 0;
                        const productStyle = {
                        backgroundColor: isEven ? '#ffffff' : '#000000',
                        };

                    return(
                    <div  key={index} className="r-product" style={productStyle}>
                        <img src={product.imageUrl} className="r-img"></img>
                        <div className=' r-d-s'>
                            <p>{product.name}</p>
                            <p>{product.category}</p> 
                            <p>${product.price}.00  <span className='discount'> $25</span></p> 
                            <Rating
                            starEmptyColor="blue"
                            starDimension="50px"
                            />
                        </div> 
                        <div className="overlay overlay-icons">
                            <FontAwesomeIcon icon={faHeart} />
                            <Link to={`/details/${product.id}`}>
                                <FontAwesomeIcon icon={faEye}/>
                            </Link>
                            <FontAwesomeIcon icon={faShoppingCart} onClick={()=>props.addToCart(product)}/>
                        </div>                   
                    </div>
                    )
                })}
                </Slider>                                
                </div> 
            </section>
        </div>
    )
}

export default Details;
import React,{useState} from "react";

/*-----styles---------*/
import './reviews.css'

import {faPlus, faHeart, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from "../ratings/Ratings";
import StarRatings from "react-star-ratings";

const Reviews =(props)=>{
    const {reviews, rating} =props;
    // State variable to toggle reviews container
    const [showReviews, setShowReviews] = useState(false);

    const toggleReviews = () => {
      setShowReviews(!showReviews);
    };

    return <>
            <div className="reviews-container">
                <div className="rev-header">
                    <h3>Reviews</h3>
                    <div onClick={toggleReviews}>
                    <FontAwesomeIcon icon={faPlus} className="faPlus"/>
                    </div>
                </div>
                
                {showReviews && (reviews.map((review, index)=>{
                  return(
                  <>
                  <div className="review-container">
                  <div className="rev-one">
                    <h4>{review.name}</h4> 
                    <h5>Stars : <span>{review.rating}</span></h5>
                  </div> 
                  <div className="review rev-two">
                    <div>
                    <StarRatings
                    rating={rating}
                    starRatedColor="#FFC107"
                    starEmptyColor="blue"
                    starHoverColor="#FFC107"
                    numberOfStars={review.rating}
                    starDimension="20px"
                    starSpacing="5px"
                    className="star-ratings"
                     /> <span>{review.date}</span>
                    </div>
                    <h5 className="rev-title">{review.title}</h5>
                    <p>{review.review}</p>
                  </div>
                </div>
                  </>
                  )
                }))
                }
                
            </div>
    </>
}

export default Reviews;
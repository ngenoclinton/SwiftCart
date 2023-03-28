import React, { useState } from 'react';
// import Rating from './Rating';
// import Reviews from './Reviews';
import Rating from '../ratings/Ratings';
import StarRatings from "react-star-ratings";

function ReviewForm(props) {

    const {addReview, handleChange, name, email,title, review,rating, onRatingChange, productId} = props

    const handleRatingChange = (newRating) => {
        onRatingChange(productId, newRating);
      };
    console.log(rating);   
  return (
    <div className='order-form'>                   
       <StarRatings
            rating={rating}
            starRatedColor="#FFC107"
            starEmptyColor="blue"
            starHoverColor="#FFC107"
            changeRating={handleRatingChange}
            numberOfStars={5}
            starDimension="20px"
            starSpacing="5px"
            className="star-ratings"
            />
      <form >
        <div className='d-form'>
          <div class="one">
            <input type='text'
              placeholder='Name' 
              name='name'
              onChange={handleChange}
              value={name}
            ></input>
          </div>
          <div class="two">
            <input type='email'
              placeholder='email'
              name='email'
              onChange={handleChange}
              value={email}
            ></input>
          </div>
          <div className='three'>
            <label>Review Title*</label>
            <input type='text'
              placeholder='review title'
              name='title'                             
              onChange={handleChange}
              value={title}
            ></input>
          </div>
          <div class="four">
            <textarea 
              placeholder='Review'
              name='review'
              onChange={handleChange}
              value={review}
            ></textarea>
          </div>
        </div>
        <button className='d-button' onClick={addReview}>Post Review</button>
      </form>
      {/* <Reviews reviews={reviews} /> */}
    </div>  
  );
}

export default ReviewForm;
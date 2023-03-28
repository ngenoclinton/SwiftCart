import StarRatings from 'react-star-ratings';
import './ratings.css'

const Rating = (props) => {
  const {rating, onRatingChange, productId,handleChange} = props;
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#FFC107"
      starEmptyColor="blue"
      starHoverColor="#FFC107"
      changeRating={(newRating) => onRatingChange(productId, newRating)}
      numberOfStars={5}
      starDimension="20px"
      starSpacing="5px"
      className="star-ratings"
    />
  );
};

export default Rating;
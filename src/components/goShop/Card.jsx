import React from 'react';

import { faStar, faPlus, faHeart, faEye, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Card(addToCart, product,  handleItemClick){
    return(
        <div>
        <div className="product ">
                    <span className='discount'>${product.discount}% Off</span>
                    <div className="img-container">
                    <img src={product.imageUrl} alt={product.description}  className="card-img-top img-fluid"/>
                    </div>
                    <div className='product-details'>
                    <span className='title'>{product.name}</span>
                    <span className='price'>${product.price}</span>
                    
                    <div className='like'>
                      <label> 0 </label>
                    </div>
                    <div className="overlay overlay-icons">
                        <FontAwesomeIcon icon={faHeart} />
                        <FontAwesomeIcon icon={faEye}/>
                        <FontAwesomeIcon icon={faShoppingCart} onClick={()=>addToCart(product)}/>
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
                    </div>
                </div>
        </div> 
        </div>
    )
}

export default Card;
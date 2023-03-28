import React from "react";
import {useState, useEffect} from 'react'
import { Router, Link, Route,useNavigate } from "react-router-dom";
/*-----style.css----*/ 
import './goshop.css';
import Card from "./Card";

import { faStar, faPlus, faHeart, faEye, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from "./ratings/Ratings";

/*------------------------function component-----------------------*/ 
function GoShop(props){
    const {addToCart, Products, dataSearch, productRatings,handleRatingChange} =props;
    /*states*/
    const [products, setProduct] = useState(Products);   
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); 

  
    return (
        
        <div className="goshop-container">
            <div className="sections">            
            <div className="right"><span>
                <div className="sort-group">
                    <div>
                        <span>Sorted By :</span>
                        <span>price </span>
                        <span>Newest</span>
                        <span>A-Z</span>
                    </div>
                </div>                    
                <div className="shop-products">  
                 {dataSearch.map((product)=>{
                   return (
                    <div className="product " key={product.id}>
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
                        <Link to={{
                            pathname:`/details/${product.id}`,
                            state:{
                                rating: productRatings[product.id] || 0,
                                onRatingChange: handleRatingChange,
                                productId: product.id
                            }
                        }}>
                            <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <FontAwesomeIcon icon={faShoppingCart} onClick={()=>addToCart(product)}/>
                    </div>
                    <div className='rating'>
                     <Rating
                        rating={productRatings[product.id] || 0}
                        onRatingChange={handleRatingChange}
                        productId={product.id}
                     />
                      <span>(10)</span>
                    </div>
                  </div>
            </div> 
                        )
                    })
                 }
                </div>
                <div className="pagination">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </span></div>
            </div>
        </div>
    )
}
export default GoShop;
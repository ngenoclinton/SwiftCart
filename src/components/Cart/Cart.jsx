import React from 'react';
import "./cart.css"
function Cart ({cartItems, cartCount,addToCart,removeFromCart, clearitemFromCart,cartTotal}) {
     console.log(cartItems);
    return(
        <div className='cartItems-container'>
            <div className='cart-items'>
               <div className='cart-details'>               
                 {cartCount === 0 && <h1 className='empty-cart'>
                    No Items Added to the Cart
                 </h1>}
              <div>
                <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block">
                    Product
                    </div>
                    <div className="header-block">
                    Description
                    </div>
                    <div className="header-block">
                    Quantity
                    </div>
                    <div className="header-block">
                    Price
                    </div>
                    <div className="header-block">
                    Remove
                    </div>
                </div>                                
                {cartItems.map((cartItem) => {   
                    const {price, imageUrl, quantity, name} = cartItem;            
                    return(                
                    <div className="checkout-item-container">
                        <div className="image-container">
                            <img src={imageUrl} alt={`${name}`}/>
                        </div> 
                        <span className="name">{name}</span>  
                        <span className="quantity">
                        <div className="arrow" onClick={()=>removeFromCart(cartItem)}>&#10094;</div>
                        <span className="value">{quantity}</span>
                        <div className="arrow" onClick={()=>addToCart(cartItem)}>&#10095;</div>
                        </span>
                        <span className="price">$ {price}</span>
                        <span className="remove-button" onClick={()=>clearitemFromCart (cartItem)}>&#10005;</span>                
                    </div>         
                    )
                })}                
                <span className="total">Total: $ {cartTotal}</span>
                </div> 
             </div>
               </div>
            </div>
        </div>
    )
}

export default Cart;
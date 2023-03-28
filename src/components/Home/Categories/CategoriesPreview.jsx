
import React from 'react';
import './categories.css';

import ProductsPreview from './ProductsPreview ';
// import Data from '.';
import { Link } from 'react-router-dom';

function Categories ({productsData, addToCart}){
    console.log(productsData);  
    return (
      <div>
      {Object.keys(productsData).map((title) => {
        const categoryProducts = productsData[title]; 
        {console.log(categoryProducts)}            
        return (
          <div key={title} className='products-container'>
           <div className='products-header'><h2>{title}</h2><Link to={title}><span>SEE ALL &#10095; &#10095;</span></Link> </div>
              <div className="">    
                <ProductsPreview 
                  products={categoryProducts}          
                  addToCart={addToCart}
                />            
              </div>
          </div>
        );
      })}
     </div>
      );
}
export default Categories; 
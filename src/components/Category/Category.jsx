import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Home/Categories/ProductCard";

/*-----------styles--------*/
import './category.css' 
function Category({productsData, addToCart}) {
    const { category } = useParams();
    const [products, setProducts] = useState([])    

    useEffect(() => {
        setProducts(productsData[category] ?? []);
    }, [ category, productsData]);

    return(
        <div className="category-container">     
         <div className='category-title'>{category.toUpperCase()}</div>
         <div className="category-product">
            {products.map(product => (
              <ProductCard key={product.id} 
              product={product} 
              addToCart={addToCart}
              />
            ))}
         </div>
        </div>
    )
}

export default Category;
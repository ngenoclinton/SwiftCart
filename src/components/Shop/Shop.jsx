import React from "react";
import { Routes, Route } from "react-router-dom";
import './shop.css'

import Categories from "../Home/Categories/CategoriesPreview";
import Category from "../Category/Category";
function Shop({productsData,addToCart,cartCount}) {
    return (
        <div className="shop-container">
            <Routes>
            <Route index element={<Categories 
                    productsData={productsData}
                    cartCount={cartCount}
                    addToCart={addToCart} />}/>
            <Route path=":category" element={<Category 
                productsData={productsData}
                addToCart={addToCart}
            />}/>   
            </Routes>
        </div>
    )
}

export default Shop;
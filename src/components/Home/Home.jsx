import React from 'react';
import { Routes, Route } from "react-router-dom";

import Banner from '../Banner/Banner';
// import Categories from './Categories/CategoriesPreview';
import Categories from './Categories/CategoriesPreview';
import Category from '../Category/Category';
import {Outlet} from 'react-router-dom';
import Shop from '../Shop/Shop';
import SupportService from './support/SupportService';
import Directory from './directory/Directory';
import FeaturedProducts from './featuredProduct/FeaturedProducts';
import NewsLetter from './Newsletter/Newsletter';
import Brand from './brand/brand';

function Home ({productsData, addToCart,cartItems,cartCount}){
    return (
        <div>
            <Outlet />      
                <>
                <Banner 
                    cartItems={cartItems}
                />
                <><SupportService/></>
                <><Directory /></>
                <FeaturedProducts 
                    addToCart={addToCart}
                />
                <NewsLetter />
                <Brand /> 
                </>
         </div>   
    )
}
export default Home;
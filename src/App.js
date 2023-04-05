import { Routes, Route } from 'react-router-dom';
import { CartProvider } from 'use-cart';
// css
import './App.css';

// products data import
import Data from  '../src/components/Home/categories';
import Products from './components/productscategories';

// react hooks 
import { useState, useEffect, useMemo, productsData} from 'react';
// components imports 
import Banner from './components/Banner/Banner';
import Categories from './components/Home/Categories/CategoriesPreview';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/Navigationbar';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import GoShop from './components/goShop/GoShop';
import Details from './components/goShop/productDetails/Details';
import About from './components/About/About';
import Login from './components/Login&register/Login';
import Register from './components/Login&register/Register';

function App() {  
/*------------------------------fetch data ----------------*/ 
  const {productsData} = Data;
  /*states*/
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setcartCount] = useState(0); 
  const [ cartTotal, setCartTotal] = useState(0); 
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(Products);
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedValue, setSelectedValue] = useState("");
  // 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  // 
  const [productRatings, setProductRatings] = useState({});

    /*-------------------------helper functions-------------*/
    /*-----Search products helper functions-----*/
    const filterCategory = (category) =>{
      let result = dataSearch.filter((item)=>{
          return item.category === category;
      })      
      setProducts(result);
  }

  function handleItemClick(item) {
    setFilter(item);
    setIsOpen(false);
    let result = products.filter((item)=>{
        return item.category === category;
    })
    setProducts(result);
  }
    let dataSearch = Products.filter((item)=>{
      return Object.keys(item).some(key=> item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
      });

      function handleChange(e) {
        setCategory(e.target.value);
        setSelectedValue(e.target.value);
          (e.target.value.toLowerCase());
        setIsOpen(true);        
      }
      const addReview = (event) => {
        event.preventDefault();
        const date = new Date().toLocaleDateString();
        const newReview = {
          name,
          email,
          title,
          review,
          rating,
          date
        };
        setReviews([...reviews, newReview]);
        setName('');
        setEmail('');
        setTitle('');
        setReview('');
        setRating(0);
      }; 
      /*Ratings helper function*/
    const handleRatingChange = (productId, newRating) => {
      setProductRatings({ 
        ...productRatings, 
        [productId]: newRating });
        // formReviewRating
        setRating(newRating);
    };
  
      const sortedProducts = Products.sort((a, b) => {
        if (a.category < b.category) {
          return 1;
        }
        if (a.category > b.category) {
          return -1;
        }
        return 0;
      });

      const uniqueCategories = [...new Set(sortedProducts.map(product => product.category))];
    /*----toggle helper function------*/    
    const toggle = () => {
      setIsOpen(!isOpen);
      }
    /*--------Helper function to add items to the cart -----*/ 
    const addToCart = (product) =>{
    // check if product has already been added
     const productExist  = cartItems.find((item) => item.id === product.id);
    //  if it exists, and if not add it to the cart
    if(productExist){
      setCartItems(cartItems.map((cartItem)=>
      (cartItem.id === product.id  ? { ...cartItem, quantity:cartItem.quantity + 1 } : cartItem )));
      }else{
        //return new array with modified cart items / new cat item 
       setCartItems( [...cartItems, { ...product, quantity:1}]); 
      }      
    }
    useEffect(() => {
      const newCartCount  = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity, 0);
    setcartCount(newCartCount)
    }, [cartItems]);
  
    /*----------------------------Helper function to remove items from the cart ------------------*/ 
    const removeFromCart = (productToRemove)=>{
      // chesck if item to remove in cart 
      // find cart item to remove from cart
      const existInCart = cartItems.find((item)=> item.id === productToRemove.id);
      // check if quantity is = 1 if so remove item 
      if(existInCart.quantity === 1 ){
        return cartItems.filter((cartItem)=> cartItem.id !== productToRemove.id)
      }
       //return back cartItems with matching cart item with reduced quantity
      return cartItems.map((cartItem) => 
      cartItem.id === productToRemove.id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 } 
      : cartItem
      );      
    }
    // set the reduced cart items
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeFromCart(productToRemove));
    };
    /*-------------------------/clearing cart---------------*/
    const clearCartItem = (cartItemToClear) =>{
      return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
    }
      //Clear item from cart
    const clearitemFromCart =(cartItemToClear) => {
      setCartItems(clearCartItem(cartItemToClear));
    }  
    /*----------------------------CART TOTAL----------------*/
    //cart total effect
    useEffect(()=>{
      const cartTotal = cartItems.reduce((total, cartItem) => 
      total + cartItem.quantity * cartItem.price, 0);
      setCartTotal(cartTotal);      
    }, [cartItems]);
  /*------------------------------------------------------------*/ 
  /*------------------------------------------------------------*/
    let inventoryDetails={};
    for (let i = 0; i < productsData.length; i++) {
      switch(productsData[i].title) {
        case 'Sport Wear':
          inventoryDetails.SportWear = productsData[i].products;
          break;
        case "Men's Shoes":
          inventoryDetails.MensShoes = productsData[i].products;
          break;
        case "Women's Shoes":
          inventoryDetails.WomensShoes = productsData[i].products;
          break;
        case 'Mens Fashion':
          inventoryDetails.MensFashion = productsData[i].products;
          break;
        case 'Womens Fashion':
          inventoryDetails.WomensFashion = productsData[i].products;
          break;
        default:
          console.log('Invalid title');
      }
    }
    
  /*----------------------routes---function----component------------------------------*/
  return (
    <div className="App">  
    <Routes>
            <Route path='/' element={<NavigationBar
                cartCount={cartCount}
                cartItems={cartItems}
                toggle={toggle}
                isOpen={isOpen}
                handleChange={handleChange}
                selectedValue={selectedValue}
                uniqueCategories={uniqueCategories}
             />}>
              <Route index  element={<Home 
                  productsData={inventoryDetails}
                  cartCount={cartCount}
                  addToCart={addToCart}
                  cartItems={cartItems}
                  toggle={toggle}
                />}>
                </Route>
                <Route path="about" element={<About />}></Route>
                <Route path="/shop/*" 
                    element={<Shop productsData={
                    inventoryDetails}
                    addToCart={addToCart}
                  />}></Route>
                 <Route path="swiftshop" element={<GoShop
                     productsData={inventoryDetails}
                     addToCart={addToCart}
                     products={products}
                     dataSearch={dataSearch}
                     handleChange={handleChange}
                    //  
                     productRatings={productRatings}
                     handleRatingChange={handleRatingChange}
                    //  
                     Products={Products}
                  />}></Route>
                <Route path='/details/:id' element={<Details 
                    addToCart ={addToCart }
                    removeItemFromCart={removeItemFromCart}
                    cartCount={cartCount}
                    cartItems={cartItems}
                    // 
                    name={name}
                    email={email}
                    title={title}
                    review={review}
                    reviews={reviews}  
                    addReview={addReview}
                    // 
                    setName={setName}
                    setEmail={setEmail}
                    setReview={setReview}
                    setReviews={setReviews}
                    setTitle={setTitle}
                    setRating={setRating}
                    // 
                    rating={rating}
                    onRatingChange={handleRatingChange}
                />} />
                <Route path="/contact"></Route>
                <Route path="/customerservice"></Route>
                <Route path="/cart" element={<Cart 
                   cartCount={cartCount}
                   cartItems={cartItems}
                   addToCart={addToCart}
                   removeFromCart={removeItemFromCart }
                   clearitemFromCart={clearitemFromCart}   
                   cartTotal={cartTotal}               
                />}></Route>
             </Route>  
              <Route path='login' element={<Login /> }></Route> 
              <Route path='register' element={<Register /> }></Route>          
    </Routes>     
    
    </div>
  );
 }

export default App;

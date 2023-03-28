import React, {Fragment, useState} from 'react';
import {Link, Outlet, NavLink } from 'react-router-dom'
import './navigationbar.css'
import { faCartShopping, faCircleUser, faPhone, faEnvelope , faBars, faXmark, faSearch, faArrowDown, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*---components--imports---*/
import Search from '../search/Search';
 
/*---Navigation bar-------functional components---*/
function NavigationBar ({cartCount,toggle, isOpen, handleChange, selectedValue, uniqueCategories}) {

    let [mobileMenue, setMobileMenue] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
        <div className='navigation-container'>
             <div className="navigation">   
                <div className="section-top">
                  <div className='sec-top-contact'>
                    <div> 
                        <FontAwesomeIcon icon={faPhone}/> 
                        <p>info@company.com</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>010-020-0340</p>
                    </div>
                  </div>
                  <div className='sec-top-det'>
                    <span>Theme FAQ's</span>
                    <span>Need Help</span>
                    <span>EN</span>
                    <span>USD</span>
                  </div>
                </div>           
                <div className={`custom_menu ${mobileMenue ? 'open' : ''}`} onClick={() => setMobileMenue(false)}>   
                    <div className="logo_section">                    
                            <Link  to='/'>
                            <div className="logo">
                                <p href="index.html">
                                    SwiftCart
                                </p>                 
                            </div>
                            </Link>           
                    </div>  
                    <div className={`cm-overlay ${mobileMenue ? 'open' : ''}`}></div>
                    <div className={`mobile-menu ${mobileMenue ? 'open' : ''}`}>
                     <FontAwesomeIcon icon={faXmark} className="close" style={{padding:'10px', transform:'scale(1.3)'}}/>
                     <div className="logo_section"> 
                            <div className="logo">
                                <p href="index.html">
                                    SwiftCart
                                </p>                 
                            </div>    
                    </div>  
                        <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/swiftshop">Shop </Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>                        
                        </ul>
                    </div>

                    <ul className='nav-list'>
                       <li ><Link to='/' >Home</Link></li><hr/>
                       <li><Link to='/about'>About</Link> </li><hr/>
                       <li><Link to='/swiftshop'>Shop </Link></li><hr/>  
                    </ul>  

                    <div className="item">   
                        <div className='search'>
                            <button
                                className="search-button">
                                    <FontAwesomeIcon icon={faSearch} onClick={toggle} />
                            </button> 
                        </div>            
                                       
                        <div className="user" onClick={()=>setOpen(!open)}>
                        <span>My Account</span> <FontAwesomeIcon icon={faChevronDown} className={open ? 'cart-icon icons chevron-up' : 'cart-icon icons chevron-down'}/>  
                            {open && <div className='log-reg'>
                                <Link to='login'><p>Login</p></Link>
                                <Link to='register'><p>Register</p></Link>
                            </div>}                  
                        </div>
                        <div className='cart'>
                            <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} className="cart-icon icons"/> </Link>
                            <div className='cartCount'><span>{cartCount}</span></div>
                        </div>                              
                    </div>                    
                </div>  
                {isOpen && <div className=''>
                    <Search 
                    className="search-bar"
                    handleChange={handleChange}
                    selectedValue={selectedValue}
                    uniqueCategories={uniqueCategories}
                  />
                </div>}
                <button className='toggle' onClick={()=>setMobileMenue(!mobileMenue)}>
                    {<FontAwesomeIcon icon={faBars} className="open"/>}
                </button>      
            </div>
            
        </div>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;
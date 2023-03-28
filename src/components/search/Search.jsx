import React from 'react';
import { useState, useEffect, useRef} from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*--------css----styles----*/
import './Search.css'
/*---------Search-----function------component*/
function Search (props){
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const outsideRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside (event){
            if(outsideRef.current && !outsideRef.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return() => {
            document.addEventListener('click', handleClickOutside);
        }
    },[outsideRef])

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div className='search-conatiner'>
            <div className="search-section">
              <div className="dropdown-container " ref={outsideRef}>
                  <div className="dropdown-button" onClick={toggle}>
                      {/* <FontAwesomeIcon icon={faBars} className='dropdown-cat-icons'/> */}
                      <button>All Category</button> 
                      <FontAwesomeIcon icon={faChevronDown} className='dropdown-cat-icons'/>
                  </div>
                  {isOpen && (
                  <div  className="dropdown">
                  <span >New</span>
                        <span >Mens</span>
                        <span >Women</span>
                        <span >Jewellery & Watches</span>
                        <span >Bags & Accessories</span>                     
                  </div>
                  )}
              </div>             
              <div className="search-container">
                    <input
                      type="text"
                      className="fam-control"
                      placeholder="Search product"
                      onChange={props.handleChange.bind(this)} 
                      value={props.selectedValue}
                      />
                     <FontAwesomeIcon 
                     icon={faSearch} className="fa-search"/>
              </div>          
            </div>
        </div>
    )
}

export default Search;
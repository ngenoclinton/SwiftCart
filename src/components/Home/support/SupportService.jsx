import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faTruck,faPhone, faBagShopping} from '@fortawesome/free-solid-svg-icons';
/*-------support.css styles---------*/ 
import './support.css'
const SupportService =()=>{
    return(
        <div className='support-container'>
            <div className='sc-item'>
                <FontAwesomeIcon icon={faShieldHalved} className="sc-icon"/>
                <h4>Trusted Shopping</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div><div className='hr'/>
            <div className='sc-item' >
                <FontAwesomeIcon icon={faBagShopping} className="sc-icon"/>
                <h4>Quality Product</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div><div className='hr'/>
            <div className='sc-item'>
                <FontAwesomeIcon icon={faTruck} className="sc-icon"/>
                <h4>Worldwide Delivery</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div><div className='hr'/>
            <div className='sc-item'>
                <FontAwesomeIcon icon={faPhone} className="sc-icon"/>
                <h4>Telephone Support</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div>
        </div>
    )
}

export default SupportService;
import React,{useState} from 'react';

import { Router, Link, Route } from "react-router-dom";
/*-----style.css----*/ 
import './detaildescription.css'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rating from '../ratings/Ratings';
import ReviewForm from './ReviewForm';

const DetailDescription =(props) =>{
    const {addReview, handleChange, name, email,title,review,rating,productId,onRatingChange}=props
    const [activeSection, setActiveSection] = useState(0);
    

     const sections = [
          {
            title: 'Description',
            content: (
              <div className='section-content'>
                <h5>Product description</h5>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum quam ac mi viverra dictum. In efficitur ipsum diam, at dignissim lorem tempor in. Vivamus tempor hendrerit finibus. Nulla tristique viverra nisl, sit amet bibendum ante suscipit non. Praesent in faucibus tellus, sed gravida lacus. Vivamus eu diam eros. Aliquam et sapien eget arcu rhoncus scelerisque. Suspendisse sit amet neque neque. Praesent suscipit et magna eu iaculis. Donec arcu libero, commodo ac est a, malesuada finibus dolor. Aenean in ex eu velit semper fermentum. In leo dui, aliquet sit amet eleifend sit amet, varius in turpis. Maecenas fermentum ut ligula at consectetur. Nullam et tortor leo.</p>
              </div>
            )
          },
          {
            title: 'Specification',
            content: (
              <div className='section-content'>
                <h5>Product specification</h5>
                <div className='specification'>
                <p><FontAwesomeIcon icon={faArrowRightLong}/> Specification Content</p>
                <p><FontAwesomeIcon icon={faArrowRightLong}/> Specification Content</p>
                <p><FontAwesomeIcon icon={faArrowRightLong}/> Specification Content</p>
                <p><FontAwesomeIcon icon={faArrowRightLong}/> Specification Content</p> 
                <p><FontAwesomeIcon icon={faArrowRightLong}/> Specification Content</p>
                </div>
              </div>
            )
          },
          {
            title: 'Reviews (1)',
            content: (
              <div className='section-content'>    
                <h5>Give your Review:</h5>            
                <div className=''>
                   <div className='order-form'>                   
                        <ReviewForm 
                          name={name}
                          email={email}
                          title={title}
                          review={review}
                          handleChange={handleChange}
                          addReview={addReview}
                          // 
                          rating={rating}
                          onRatingChange={ onRatingChange}
                          productId={productId}
                        />
                    </div>
                </div>
              </div>
            )
          }
        ];
        const handleSectionClick = (index) => {
          setActiveSection(index);
        };
      
     return (       
    <>
     <section className='desc-details'>
      {sections.map((section, index) => (
        <div
          key={index}
          className=""        
          onClick={() => handleSectionClick(index)}
        >        
        <h4 className={`header ${activeSection === index ? 'active' : 'notActive'}`}>{section.title}</h4>  
        <div className={`${activeSection === index ? 'section' : 'hidden'}`}>        
         {activeSection === index && section.content}
         </div>
        </div>
      ))}
    </section>

    </>      
)
}
export default DetailDescription;
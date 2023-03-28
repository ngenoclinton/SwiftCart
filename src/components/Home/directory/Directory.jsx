import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Data from "../categories";
// styles css
import './directory.css'


const {productsData} = Data;
const productsCategories = [];
      productsCategories.push(productsData);


function Directory(productsData) {
    function getStyleForCategory(index) {
        switch (index) {
          case 0:
            return {
              gridColumn: 1, 
              gridRow: '1/10',
              minHeight:'200px',
              backgroundImage:'url("https://cdn.pixabay.com/photo/2016/11/29/03/30/adult-1867073__340.jpg")',
              backgroundRepeat:' no-repeat',
              height:'400px',
              backgroundPosition:' center center',
              backgroundSize: 'cover',
              position:'relative'

              }
          case 1:
            return { 
              gridColumn: 2, 
              gridRow: '1/5',
              backgroundImage:'url("https://cdn.pixabay.com/photo/2017/08/07/23/28/still-2609141__340.jpg")',
              backgroundRepeat:' no-repeat',
              backgroundPosition:' center',
              backgroundSize: 'cover',
              width: '100%',
              position:'relative'

            };
          case 2:
            return { gridColumn: 2, 
              gridRow: '5/9', 
              background:'burlywood',
              backgroundImage:'url("https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbW1lbnMlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")',
              backgroundRepeat:' no-repeat',
              backgroundPosition:' center center',
              backgroundSize: 'cover',
              width: '100%',
              height:'100%',
              position:'relative'

            }
          case 3:
            return { 
              gridColumn: 3, 
              gridRow: '6/10', 
            background:'burlywood',
            backgroundImage:'url("https://images.unsplash.com/photo-1679412330029-66dbd3365fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")',
            backgroundRepeat:' no-repeat',
            backgroundPosition:' center center',
            backgroundSize: 'cover',
            width: '100%',
            position:'relative'

          };
          case 4:
            return { 
              gridColumn: 3, 
              gridRow:'1/6', 
              backgroundImage:'url("https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW5zJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")',
              backgroundRepeat:' no-repeat', 
              backgroundPosition:' center center center',
              backgroundSize: 'cover',
              verticalAlign: 'middle',
              position:'relative'
          };
          default:
            return {};
        }
      }  
      
      const navigate = useNavigate();
      const onNavigateHandler =(route) => {
        return  navigate(route);
      }
    return(
        <div>
            <div className="directory-container">
            
            {productsCategories.map((categories)=>{
                return(
                    <div className="d-category-wrapper">
                    {categories.map((category, index)=>{ 
                       return(                         
                          <div className={`category-${index+1} category`}
                            style={getStyleForCategory(index)}
                            onClick={() => onNavigateHandler(category.route)}
                           > 
                            <div className="dir-overlay">
                               <h4>{category.title}</h4>
                               <p>Shop Now</p>                  
                            </div>                          
                          </div>
                         
                      )
                    })}
                   </div>                   
                )
            })}
            </div>
        </div>
        
    )
}

export default Directory; 


                //     <DirectoryCategory 
                //     categories={categories}
                // />


// {categories.map((category, index)=>{
//     {console.log(category.route)}
//     return (  
//          <div>
//          <DirectoryCategory key= {index}                         
//             title={category.title}
//             route={category.route}
//          />
//             <h2>{category.title}</h2>
//             <Link className="" to={"/shop"}><p>Shop Now</p></Link>                                 
//          </div>
    
//      )
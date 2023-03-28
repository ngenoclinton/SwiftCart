import React, { Fragment, useState, useEffect } from 'react';
/*--style css*/ 
import './countdown.css';


/*-----------countdown function component--------------*/ 
function CountDown ({targetDate}){
        /*----------start of states------------*/
        const [timeLeft, setTimeLeft] = useState({days: 0, hours: 2, minutes: 0, seconds: 0});
        const [progress, setProgress] = useState(0);
        const[visitors, setVisitors] =useState(0);
        const [leftProducts, setLeftProducts] = useState(10)
        /*-----------------end of states----------*/ 

        useEffect(() => {
            const targetTime = new Date().getTime() + (2 * 60 * 60 * 1000); // 2 hours from now
            const totalTime = 2 * 60 * 60; // 2 hours in seconds
            const timer = setInterval(() => {
              const difference = targetTime - new Date().getTime(); 
              const seconds = Math.floor((difference / 1000) % 60);
              const minutes = Math.floor((difference / 1000 / 60) % 60);
              const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
              const timeLeft = { days: 0, hours: Math.max(0, hours), minutes: Math.max(0, minutes), seconds: Math.max(0, seconds) };
              const elapsed = totalTime - Math.floor(difference / 1000);
              const progress = (elapsed / totalTime) * 100;
              setTimeLeft(timeLeft);
              setProgress(progress);
              if (elapsed >= totalTime) {
                clearInterval(timer);
              }
            }, 1000);
            return () => clearInterval(timer);
          }, []);
          /*-----*----Visitors generator useEffect -----*/ 
          useEffect(()=>{
            let time = 1000 * 60 *60;
            const interval = setInterval (()=>{
                let randomNumber= Math.floor(Math.random()* 10) + 1;
                setLeftProducts(randomNumber);
            }, time)
            return ()=>clearInterval();
            },[])
        /*-----*----Visitors generator useEffect -----*/ 
        useEffect(()=>{
                const interval = setInterval (()=>{
                    let randomVisitors= Math.floor(Math.random()* 15) + 1;
                    setVisitors(randomVisitors);
                }, 5000)
                return ()=>clearInterval();
        },[])

        const progressBarStyle = {
            backgroundColor: `hsl(${(100 - progress) * 1.2}, 75%, 35%)`,
            height:'10px',
            borderRadius:'10px',
            transition:'background-color 1s ease-in-out',       
          };

    return (
        <Fragment >
            <section className='countdown-container'>
               <section className='timer'>
                <section className='top-sec'>
                    <p>Hurry! only <span style={{color:"red"}}>{leftProducts} </span>left in stock!</p>
                    <div className='visitors-container'>Real time <div className='visitors'>{visitors}</div> visitors right now.</div>
                    <div className='time'></div>
                    {/* <span> Time left:</span> */}
                </section>
                <div>
                    <div className="countdown-timer__progress-bar">
                    <div className="countdown-timer__progress-bar--background" />
                    <div className="countdown-timer__progress-bar--foreground "style={progressBarStyle}/>
                    </div>
                </div>
                <div className='clock'>
                    <section>
                        <p>0{timeLeft.days} </p>
                        <small>days</small>
                    </section>
                    <span>: </span>
                    <section>
                        <p>0{timeLeft.hours} </p>
                        <small>hours</small>
                    </section>
                    <span>: </span>
                    <section>
                        <p>{timeLeft.minutes} </p>
                        <small>minutes</small>
                    </section>
                    <span>: </span>
                    <section>
                        <p>{timeLeft.seconds} </p>
                        <small>seconds</small>
                    </section>
                </div>
               </section>
               
            </section>
        </Fragment>
    )
}
export default CountDown; 
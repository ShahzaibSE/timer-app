import React, {useState} from 'react'
// Animation utils.
import {AnimationWrapper} from "react-hover-animation"
// Assets.
import "./Timer.css"

 // Ring CSS config.,
 const COLOR_CODES = {
    info: {
      color: "green"
    }
};

const FULL_DASH_ARRAY = 283;
const TIME_LIMIT = 20;  
// =============== Timer Component ============= //
const Timer = () => {
    // let [timeLeft, setTimeLeft] = useState(60)
    let [isOn, setIsOn] = useState(false)
    let [seconds, setSeconds] = useState(0.0)
    let [intervalID, setIntervalID] = useState(0)
    //
    // CSS colors for ring.
    let remainingPathColor = COLOR_CODES.info.color;
    //
    // Format time.
    const formatTime = (time:any) => {
        // The largest round integer less than or equal to the result of time divided being by 60.
        const minutes = Math.floor(time / 60);
        
        // Seconds are the remainder of the time divided by 60 (modulus operator)
        // setSeconds(time % 60);
        let seconds = time % 60;
        let seconds_formated:any = seconds
        
        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds_formated < 10) {
            seconds_formated = `0${seconds}`;
        }

        // The output in MM:SS format
        return `${minutes}:${seconds_formated}`;
    }
    //
    // Circle decreaser.
    const setCircleDashArray = () => {
        const circleDasharray = `${(
                    seconds * FULL_DASH_ARRAY
                    ).toFixed(0)} 283`;
        //
        let base_timer_path_remaining_element: any|null = document.getElementById("base-timer-path-remaining");
        base_timer_path_remaining_element.setAttribute("strokeDasharray", circleDasharray);
      }
    // setCircleDashArray()  
    //
    // Time features.
    const startTimer = () => {
        console.log("Start timer")
        if (isOn === true) {
            console.log("Can't start timer twice.")
            return
        }
        let startinterval:any  = setInterval(()=>{
            if (seconds === 0 ){
                setSeconds(++seconds)
            }
        },1000)
        setIntervalID(startinterval)
    }
    //
    let stopTimer = () => {
        if(isOn === true){
            setIsOn(false)
            clearInterval(intervalID)
            setSeconds(0.0)
        }
    }
    //
    let resetTimer = () => {
        stopTimer()
        setSeconds(0)
    }
    //
    return (
        <div className="base-timer">
            <div>
            <svg className="base-timer__svg base_timer_circle_internal" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
                    <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                    <path
                        id="base-timer-path-remaining"
                        strokeDasharray="283"
                        className={`base-timer__path-remaining ${remainingPathColor}`}
                        d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                        "
                    ></path>
                </g>
                </svg>
                    <span id="base-timer-label" className="base-timer__label" style={{fontWeight:"bold"}}>
                            <AnimationWrapper config={{
                                transform:{initial:'scale(1)',onHover:'scale(1.5)'},
                                opacity: {initial:'1',onHover:'1'}
                                }}>
                            {formatTime(seconds)}
                        </AnimationWrapper>
                    </span>
            </div>
        </div>
    )
}

export default Timer

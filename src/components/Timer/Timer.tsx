import React, {useState} from 'react'
// Material.
import Button from "@material-ui/core/Button"
// Assets.
import "./Timer.css"
import { interval } from 'rxjs'

const Timer = () => {
    // let [timeLeft, setTimeLeft] = useState(60)
    let [isOn, setIsOn] = useState(false)
    let [seconds, setSeconds] = useState(60.0)
    let [intervalID, setIntervalID] = useState(0)
    // Format time.
    const formatTime = (time:any) => {
        // The largest round integer less than or equal to the result of time divided being by 60.
        const minutes = Math.floor(time / 60);
        
        // Seconds are the remainder of the time divided by 60 (modulus operator)
        setSeconds(time % 60);
        let seconds_formated:any = seconds
        
        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds_formated < 10) {
            seconds_formated = `0${seconds}`;
        }

        // The output in MM:SS format
        return `${minutes}:${seconds_formated}`;
    }
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
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
                <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            </g>
            </svg>
            <span id="base-timer-label" className="base-timer__label">
                {formatTime(seconds)}
            </span>
        </div>
    )
}

export default Timer

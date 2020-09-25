import React from 'react'
// Material.
import Button from "@material-ui/core/Button"
// Assets.
import "./Timer.css"

const Timer = () => {
    const formatTime = (time:any) => {
        // The largest round integer less than or equal to the result of time divided being by 60.
        const minutes = Math.floor(time / 60);
        
        // Seconds are the remainder of the time divided by 60 (modulus operator)
        let seconds:any = time % 60;
        
        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        // The output in MM:SS format
        return `${minutes}:${seconds}`;
    }
    //
    return (
        <div className="base-timer">
            <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g className="base-timer__circle">
                <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                </g>
            </svg>
            <span>
                {/* <!-- Remaining time label --> */}
            </span>
        </div>
    )
}

export default Timer

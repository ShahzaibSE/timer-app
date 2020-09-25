import React from 'react'
// Material.
import Button from "@material-ui/core/Button"
// Assets.
import "./Timer.css"

const Timer = () => {
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

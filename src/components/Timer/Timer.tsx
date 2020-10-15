import React, {useState, FC} from 'react'
import Grid from "@material-ui/core/Grid"
// Animation utils.
import {AnimationWrapper} from "react-hover-animation"
// Assets.
import "./Timer.css"
import {images} from "./../TimerButton/TimerButton.style"
// Peer component.
import TimerButton from "./../TimerButton/TimerButton"

 // Ring CSS config.,
 const COLOR_CODES = {
    info: {
      color: "green"
    }
};

const FULL_DASH_ARRAY = 283;
// =============== Timer Component ============= //
const Timer: FC = () => {
    // let [timeLeft, setTimeLeft] = useState(60)
    let [isOn, setIsOn] = useState(false)
    // let [seconds, setSeconds] = useState(59)
    // let [minutes, setMinutes] = useState(25)
    let [timerIntervalID, setTimerIntervalID] = useState(0)
    let [timer, setTimer] = useState({minutes:25, seconds:0, isOn:false})
    let seconds = timer.seconds
    let minutes = timer.minutes
    let timerStatus = timer.isOn
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
                    timer.seconds * FULL_DASH_ARRAY
                    ).toFixed(0)} 283`;
        //
        let base_timer_path_remaining_element: any|null = document.getElementById("base-timer-path-remaining");
        base_timer_path_remaining_element.setAttribute("strokeDasharray", circleDasharray);
      }
    // setCircleDashArray()  
    //
    const myTimer = () => {
        if (seconds > 0) {
            seconds = seconds - 1 
            timerStatus = true
            console.log("Seconds updated:",seconds)
        }
        if (seconds === 0) {
            timerStatus = true
            if (minutes === 0) {
                clearInterval(timerIntervalID);
            } else {
                minutes--
                seconds = 59
            }
            console.log("Updated minutes:",minutes)
            console.log("Updated seconds:", seconds)
            console.log("Timer State")
            console.log(timer)
        }
       setTimer({minutes:minutes, seconds:seconds, isOn: timerStatus})
    }
    // Time features.
    const startTimer = () => {
        let startTimerInterval:any = setInterval(myTimer, 1000)
        setTimerIntervalID(startTimerInterval)
    }
    
    let stopTimer = () => {
        timerStatus = false
        clearInterval(timerIntervalID)
        setTimer({minutes:timer.minutes, seconds:timer.seconds, isOn:timerStatus})
        console.log("Timer State")
        console.log(timer)
    }
    //
    let resetTimer = () => {
        minutes = 25
        seconds = 0
        timerStatus = true
        clearInterval(timerIntervalID)
        setTimer({minutes:minutes, seconds:seconds, isOn:timerStatus})
    }

    const renderTimerButton = (image:any) => {
        if (image.title === "Reset") {
            let timer_button: any = <Grid item sm={4} md={4} lg={4} key={image.url}> 
                                        <TimerButton key={image.url} buttonTitle={image.title} 
                                        buttonImage={image.url} buttonAction={resetTimer} 
                                        buttonWidth={image.width}/>
                                    </Grid>
            return timer_button
        }else if(image.title === "Stop"){
            let timer_button: any = <Grid item sm={4} md={4} lg={4} key={image.url}> 
                                        <TimerButton key={image.url} buttonTitle={image.title} 
                                        buttonImage={image.url} buttonAction={stopTimer} 
                                        buttonWidth={image.width}/>
                                    </Grid>
            return timer_button
        } else {
            let timer_button: any = <Grid item sm={4} md={4} lg={4} key={image.url}> 
                                        <TimerButton key={image.url} buttonTitle={image.title} 
                                        buttonImage={image.url} buttonAction={startTimer} 
                                        buttonWidth={image.width}/>
                                    </Grid>
            return timer_button
        }
    }

    // function test(){
    //     console.log("Test function for unit testing called.")
    // }

    // test()

    return (
        <div>
           <Grid container>
            <Grid item sm={12} md={12} lg={12}>    
                <Grid container alignItems="center"
                    justify="center" direction="column" spacing={0} style={{ paddingTop: '12vh' }}>   

                    <Grid item sm={12} md={12} lg={12}>     
                    <div className="base-timer">
                        <svg className="base-timer__svg base_timer_circle_internal" viewBox="0 0 100 100" 
                                xmlns="http://www.w3.org/2000/svg">
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
                                        {/* {formatTime(seconds)} */}
                                        {timer.minutes}:{timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
                                    </AnimationWrapper>
                                </span>
                        </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={12} lg={12}>
                  <div>  
                   <Grid container alignItems="center" justify="center" style={{paddingTop:'7vh'}}>
                         
                        {images.map((image)=>(
                            renderTimerButton(image)   
                        ))}
                        
                    </Grid> 
                   </div> 
                 </Grid>
            </Grid>    
        </div>
    )
}

export default Timer

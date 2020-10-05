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
        setIsOn(true)
        let startinterval:any  = setInterval(()=>{
            console.log("Timer running.")
            if (seconds === 0 ){
                setSeconds(++seconds)
            }
        },1000)
        setIntervalID(startinterval)
        setIsOn(true)
    }
    //
    let stopTimer = () => {
        if(isOn === true){
            setIsOn(false)
            clearInterval(intervalID)
            setSeconds(0.0)
            console.log("Stop timer")
        }
    }
    //
    let resetTimer = () => {
        stopTimer()
        setSeconds(0)
    }

    const renderTimeButton = (image:any) => {
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
                                        {formatTime(seconds)}
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
                            renderTimeButton(image)
                            // <Grid item sm={4} md={4} lg={4} key={image.url}> 
                            //     <TimerButton key={image.url} buttonTitle={image.title} buttonImage={image.url} buttonAction={()=>{console.log("Button clicked")}} 
                            //     buttonWidth={image.width}/>
                            // </Grid>    
                            ))}
                        
                    </Grid> 
                   </div> 
                 </Grid>
            </Grid>    
        </div>
    )
}

export default Timer

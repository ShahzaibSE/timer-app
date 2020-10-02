import React, {FC} from 'react'
import PropTypes from "prop-types"
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
// Animation utils.
import {AnimationWrapper} from "react-hover-animation"
// Assets.
import {timerButtonStyles, images} from "./TimerButton.style"

type TimerButtonProps = {
    buttonTitle: string
    buttonAction: (e:React.MouseEvent<HTMLButtonElement>) => void
    buttonImage: string,
    buttonWidth: string
}

const TimerButton = ({buttonTitle, buttonImage, buttonWidth, buttonAction}: TimerButtonProps) => {
    const classes = timerButtonStyles()
    console.log(images[0].url)
    return (
        <AnimationWrapper config={{transform:{initial:'scale(1)',onHover:'scale(1.2)'},
                                    opacity: {initial:'1',onHover:'1'}}}>
        <div className={classes.root}>
                <ButtonBase
                focusRipple
                key={buttonTitle}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: buttonWidth
                }}
                >   
                <span
                    className={classes.imageSrc}
                    style={{
                    backgroundImage: `url('${buttonImage}')`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                    >
                    {buttonTitle}
                    <span className={classes.imageMarked} />
                    </Typography>
                </span>
                </ButtonBase>
        </div>
        </AnimationWrapper>
    )
}

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonTitle: PropTypes.string.isRequired,
    buttonImage: PropTypes.string.isRequired,
}

export default TimerButton

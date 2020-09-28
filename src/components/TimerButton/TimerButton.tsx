import React, {FC} from 'react'
import PropTypes from "prop-types"
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
// Assets.
import {timerButtonStyles, images} from "./TimerButton.style"

const TimerButton: FC = () => {
    const classes = timerButtonStyles()
    console.log(images[0].url)
    return (
        <div className={classes.root}>
            {images.map((image) => (
                <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: image.width,
                }}
                >
                <span
                    className={classes.imageSrc}
                    style={{
                    backgroundImage: `url('${image.url}')`,
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
                    {image.title}
                    <span className={classes.imageMarked} />
                    </Typography>
                </span>
                </ButtonBase>
            ))}
        </div>
    )
}

TimerButton.propTypes = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
}

export default TimerButton

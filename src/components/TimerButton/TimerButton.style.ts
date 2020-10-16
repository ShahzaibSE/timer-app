import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import start_button_background from "./../../static/images/start-button-background.jpg"
import stop_time_background from './../../static/images/stop-time-background.jpg'
import reset_time_background from './../../static/images/reset-button-background.jpg'

export const images = [
  {
    // url: require("./../../static/images/start-button-background.jpg"),
    url: start_button_background,
    title: 'Start',
    width: '40%',
  },
  {
    // url: require('./../../static/images/stop-time-background.jpg'),
    url: stop_time_background,
    title: 'Stop',
    width: '40%',
  },
  {
    // url: require('./../../static/images/reset-button-background.jpg'),
    url: reset_time_background,
    title: 'Reset',
    width: '40%',
  },
];

export const timerButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      justifyContent:"center"
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
      borderRadius:100
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
      borderRadius:100
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

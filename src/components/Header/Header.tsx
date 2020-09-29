import React from 'react'
import {Grid} from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {HelpOutlined} from "@material-ui/icons";
//Assets.
import {headerStyles} from "./Header.style"

const Header = () => {
    const classes = headerStyles()
    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}>
                <div>
                    <AppBar position="fixed" className={classes.app_bar_container}>
                        <Toolbar style={{margin:"auto"}}> 
                            <Typography variant="h5" className={classes.title}>
                                Tick Tick
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header

import React from 'react'
// Material
import Grid from "@material-ui/core/Grid"
// Components.
import Timer from "./../Timer/Timer"
import Header from "./../Header/Header"
// Assets.
import "./Grid.css"

const GridComponent = () => {
    return (
        <div>
          {/* <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '70vh' }}> */}
          <Grid container>
             <Grid item sm={12} md={12} lg={12}>
               <Header />
             </Grid>
             <Grid item sm={12} md={12} lg={12}> 
                <Timer />
             </Grid> 
          </Grid>
        </div>
    )
}

export default GridComponent
import React from 'react'
// Material
import Grid from "@material-ui/core/Grid"
// Components.
import Timer from "./../Timer/Timer"

const GridComponent = () => {
    return (
        <div>
          <Grid container>
             <Grid item sm={12} md={12} lg={12}> 
                <Timer />
             </Grid> 
          </Grid>
        </div>
    )
}

export default GridComponent
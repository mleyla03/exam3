

import * as React from 'react';


import Style from "./index.module.css"
import Grid from '@mui/material/Grid';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
const Assetsing = () => {
  return (
    <>  
       <div className={Style.middle}>
        <h1>Our Unique Features that can impress you</h1>
        <p>Who are in extremely love with eco friendly system.</p>
    </div>
    <div className={Style.feature} >
     
       <Grid container spacing={2} style={{display:"flex", justifyContent:"space-araund",margin:"0px auto"}} columns={12}>
        <Grid className={Style.rights} item lg={4} md={6} sm={12} xs={12}>
        <Card style={{width:"300px",padding:"10px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 ,width:"70%",display:"flex", flexDirection:"column",textAlign:"justify" ,padding:"10px"}} color="text.secondary" gutterBottom>
        <a href="#" style={{textDecoration:"none", color:"black"}}>
<span></span>
<h4>Expert Technicians</h4>

</a>
<p>
Usage of the Internet is becoming more common due to rapid advancement of technology and power.
</p>
        </Typography>
    

     
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
        </Grid>
        <Grid className={Style.rights} item lg={4} md={6} sm={12} xs={12}>
      <Grid className={Style.rights} item lg={4} md={6} sm={12} xs={12}>
        <Card style={{width:"300px",padding:"30px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <a href="#"  style={{textDecoration:"none",color:"black"}}>
<span ></span>
<h4>Expert Technicians</h4>
</a>
<p>
Usage of the Internet is becoming more common due to rapid advancement of technology and power.
</p>
        </Typography>
    
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
        </Grid>
        </Grid>
        <Grid className={Style.rights} item lg={4} md={6} sm={12} xs={12}>
        <Card style={{width:"300px",padding:"30px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <a href="#"  style={{textDecoration:"none",color:"black"}}>
<span ></span>
<h4>Professional Service</h4>
</a>
<p>
Usage of the Internet is becoming more common due to rapid advancement of technology and power.
</p>
        </Typography>
    
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid className={Style.rights} item lg={4} md={6} sm={12} xs={12}>
        <Card style={{width:"300px",padding:"30px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <a href="#"  style={{textDecoration:"none",color:"black"}}>
<span ></span>
<h4>Great Support</h4>
</a>
<p>
Usage of the Internet is becoming more common due to rapid advancement of technology and power.
</p>
        </Typography>
    
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid className={Style.rights} item lg={4} md={6} sm={12} xs={12}>
        <Card style={{width:"300px",padding:"30px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <a href="#"  style={{textDecoration:"none",color:"black"}}>
<span ></span>
<h4>Technical Skills</h4>
</a>
<p>
Usage of the Internet is becoming more common due to rapid advancement of technology and power.
</p>
        </Typography>
    
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
        </Grid>
        <Grid className={Style.rights} item lg={4} md={6} sm={12} xs={12}>
        <Card style={{width:"300px",padding:"30px"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <a href="#"  style={{textDecoration:"none",color:"black"}}>
<span ></span>
<h4>Highly Recomended</h4>
</a>
<p>
Usage of the Internet is becoming more common due to rapid advancement of technology and power.
</p>
        </Typography>
    
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    
    </div>
 
      
 
    </>
  )
}

export default Assetsing
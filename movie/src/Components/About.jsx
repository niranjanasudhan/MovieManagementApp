import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import Background from "./../img/bck.jpg"
const head={
  marginBottom:"30px"
}
const cardStl={
  marginTop:"50px"
}
const About = () => {
  return (
    <div>
      <Grid container spacing={2} style={{backgroundImage: `url(${Background})`,minHeight:"700px",backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'}}>
    
    <Grid item xs={2} md={2}>
      {/* <Item>xs=8</Item> */}
    </Grid>
    <Grid item xs={8} md={8} style={cardStl}>
      {/* <Item>xs=4</Item> */}
      <Card >
        <CardHeader/>
         
     
        <CardContent> 
      <Typography variant="h4" style={head} >
        ABOUT US
      </Typography>
      <Typography  style={{textAlign:"left",fontSize:"18px",fontWeight:"400"}}>Media disruption has upended the way marketers and media companies connect with audiences to drive growth. To make decisions with confidence, the world’s leading businesses need an independent partner for understanding consumer behavior across platforms.

</Typography>
<Typography  style={{textAlign:"left",marginTop:"20px",fontSize:"18px",fontWeight:"400"}}>As a pioneering audience measurement company, Comscore was founded with a mission to solve the most complex challenges in the media ecosystem. Today, that challenge is accurately measuring audiences in an increasingly cross-platform world.</Typography>
</CardContent></Card>
    </Grid>

    
  </Grid>
    </div>
  )
}

export default About
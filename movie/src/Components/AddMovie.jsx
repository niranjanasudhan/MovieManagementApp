import { Button, Card, CardContent, CardHeader, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Background from "./../img/bck.jpg"
import { useNavigate } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const head={
    marginBottom:"30px"
  }
  const cardStl={
    marginTop:"50px"
  }
const AddMovie = (props) => {
  var navigate= useNavigate();
    var[inp,setInp]=useState(props.data);
    console.log(props.data);
    console.log(props.method);
    const inputHandler = (e)=>{
      const {name,value}=e.target;
      setInp((inp)=>({...inp,[name]:value}));
      console.log(inp)
    
    }
    const readHandler=()=>{
      console.log("clicked");
      if(props.method=="post")
      {
      axios.post("http://localhost:3008/addMovie",inp)
      .then((response)=>{
        alert("Data Added");
        navigate('/');
      })
      .catch(err=>console.log(err))
    }
    if(props.method=="put")
    {
      axios.put("http://localhost:3008/edit/"+inp._id,inp)
      .then((response)=>{
        alert("Data Updated");
        window.location.reload(false);
      })
      .catch(err=>console.log(err))
    }
    }
  return (
    <div>
         <Grid container spacing={2} style={{backgroundImage: `url(${Background})`,minHeight:"1000px",backgroundPosition: 'center',
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
      <Typography style={head} variant="h4" >
        ADD MOVIE
      </Typography>
      <Grid item xs={12} md={12}>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Movie Name"
          variant="outlined"
          name="movieName"
          value={inp.movieName}
          onChange={inputHandler}
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Actor"
          variant="outlined"
          name="actor"
          value={inp.actor}
          onChange={inputHandler}
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Actress"
          variant="outlined"
          name="actress"
          value={inp.actress}
          onChange={inputHandler}
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Director"
          variant="outlined"
          name="director"
          value={inp.director}
          onChange={inputHandler}
        />
      </Item>
    </Grid>


    <Grid item xs={12} md={12}>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Released Year"
          variant="outlined"
          name="releasedYear"
          value={inp.releasedYear}
          onChange={inputHandler}
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Camera"
          variant="outlined"
          name="camera"
          value={inp.camera}
          onChange={inputHandler}
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Producer"
          variant="outlined"
          name="producer"
          value={inp.producer}
          onChange={inputHandler}
        />
      </Item>
      <Item>
        <TextField
          style={{ width: "90%" }}
          id="outlined-basic"
          label="Language"
          variant="outlined"
          name="language"
          value={inp.language}
          onChange={inputHandler}
        />
      </Item>
      <Item>
        <Button
          variant="contained"
     
          onClick={readHandler}
        >
          SUBMIT
        </Button>
      </Item>
    </Grid>
    </CardContent></Card>
    </Grid>
    <Grid item md={2} xs={2}>
      {/* <Item>xs=4</Item> */}
    </Grid>
   
    
    
    
  </Grid>;
    </div>
  )
}

export default AddMovie
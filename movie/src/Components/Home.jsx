import { Button, Card, CardContent, CardHeader, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Background from "./../img/bck.jpg"
import axios from 'axios'
import AddMovie from './AddMovie';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
const cardStl={
  marginTop:"50px"
}
const head={
  marginBottom:"30px"
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Home = () => {
  var[movies,setMovies]=useState([]);
  var[orgmovies,setOrgMovies]=useState([]);
  var[update,setUpdate]=useState(false);
  var[singleValue,setSingleValue]=useState([]);
  const [search, setSearch] = React.useState('');
 useEffect(()=>{
    axios.get("http://localhost:3008/viewMovie")
    .then((response)=>{
      setMovies(response.data);
      setOrgMovies(response.data);
      console.log(response.data)
      console.log(movies)
    })
  },[])
  const handleSearch = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value);
    var query=event.target.value;
    // movies.filter(person => person.movieName.include('a'));
    var movies = [...orgmovies];
    var updatedList = [...movies];
    updatedList = updatedList.filter((item) => {
      // return item.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1;
      return item.movieName.toLowerCase().includes(query);
    });
    // Trigger render with updated values
    setMovies(updatedList);
  };

  // const data = {
  //   nodes: movies.filter((item) =>
  //     item.name.includes(search)
  //   ),
  // };
  var deleteValues=(id)=>{
    console.log(id);
    axios.delete("http://localhost:3008/deleteMovie/"+id)
    .then((response)=>{
      alert("deleted");
      window.location.reload(false);
    })
    .catch(err=>console.log(err))
  }
  var updateValues=(value)=>{
    console.log("update Clicked")
    setUpdate(true);
    setSingleValue(value);


  }

    // const [data,setData]=useState([
    //     {
    //         movieName:"Abc",actor:"Mohanlal",actress:"Shobana",director:"Kamal",releasedYear:"1990",camera:"Anc",producer:"prt",language:"Malayalam"
    //     },
    //     {
    //         movieName:"Kalam",actor:"Mamooty",actress:"Parvathi",director:"Sathyan",releasedYear:"1990",camera:"Anc",producer:"prt",language:"Malayalam"
    //     }
    // ])
    var finalJSX=<div>



    <Grid container spacing={2} style={{backgroundImage: `url(${Background})`,minHeight:"1000px",backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'}}>


<Grid item xs={1} md={1}></Grid>
<Grid item xs={10} md={10} style={cardStl}>



      <Card >
        <CardHeader/>
         
     
        <CardContent>
        <Typography variant='h3' style={head}>MOVIE LIST</Typography>
        <div style={{textAlign:"left"}}>
{/* <input id="search" type="text" onChange={handleSearch} /> */}
        <TextField
        id="input-with-icon-textfield"
        label="Search Movie Name"
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        style={{marginBottom:"25px",marginLeft:"80px",borderBottom:"1px solid black"}}
      />
</div>
        

        <TableContainer>
<Table>
<TableHead>
    <TableRow>
        <TableCell>
        Movie Name
        </TableCell>
        <TableCell>
        Actor
        </TableCell>
        <TableCell>
        Actress
        </TableCell>
        <TableCell>
        Director
        </TableCell>
        <TableCell>
        Releaced Year
        </TableCell>
        <TableCell>
        Camera
        </TableCell>
        <TableCell>
        Producer
        </TableCell>
        <TableCell>
        Language
        </TableCell>
        <TableCell>
        
        </TableCell>
     
        </TableRow>

</TableHead>
<TableBody>
{movies.map((value,index)=>{
            return(

        <TableRow key={index}>
            <TableCell >{value.movieName}</TableCell>
            <TableCell >{value.actor}</TableCell>
            <TableCell >{value.actress}</TableCell>
            <TableCell >{value.director}</TableCell>
            <TableCell >{value.releasedYear}</TableCell>
            <TableCell >{value.camera}</TableCell>
            <TableCell >{value.producer}</TableCell>
            <TableCell >{value.language}</TableCell>
            <TableCell >
            {/* <Button
      variant="contained"  onClick={()=>updateValues(value)}
    >
      EDIT
    </Button> */}
    <Button variant="outlined" color="success"  startIcon={<EditIcon />} style={{marginRight:"15px"}} onClick={()=>updateValues(value)}>
    Edit
</Button>
    <Button variant="outlined" color="error" startIcon={<DeleteIcon />}  onClick={()=>deleteValues(value._id)}>
  Delete
</Button>
    {/* <Button
      variant="contained" onClick={()=>deleteValues(value._id)}
 
     
    >
      DELETE
    </Button> */}
            </TableCell>
       
        </TableRow>
)
})}
</TableBody>
</Table>
</TableContainer>
        </CardContent>
      </Card>
   
</Grid>
<Grid item xs={1} md={1}></Grid>
</Grid>
</div>

if(update) finalJSX = <AddMovie data={singleValue} method='put'/>
  return finalJSX;
}

export default Home
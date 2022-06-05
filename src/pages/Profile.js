import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/NavBar'

function Profile(props) {
const url=`http://localhost:5000/customer/${props.id}`;
const [userData, setUserData]= useState(null);
console.log(url);

useEffect( ()=>{
  try{
     axios.get(url).then((response)=>{
      setUserData(response.data);
      console.log(response.data);
      
    })
  }
  catch(error)
  {
    console.log(error);
  }

},[url])

async function updateUser(){
  try{
    console.log(userData);
    await axios.put(url,userData)
    .then((response)=>{
      setUserData(response.data);
    })
  }
  catch(error)
  {
    console.log(error);
  }

}
//console.log(userData);
  return (
    <div>
      <NavBar/>
       <Grid container spacing={2}>
           <Grid item xs={4}>
           <TextField
            type="text"
            label="Name"
            fullWidth
            value={userData? userData.name: ""}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          ></TextField>
           </Grid>
           <Grid item xs={4}>
           <TextField
            type="text"
            label="Profile Image"
            fullWidth
            value={userData? userData.profileImg: ""}
            onChange={(e) => setUserData({ ...userData, profileImg: e.target.value })}
          ></TextField>
           </Grid>
       </Grid>
       <Grid container spacing={2}>
           <Grid item xs={4}>
           <TextField
            type="text"
            label="Location"
            fullWidth
            value={userData? userData.location: ""}
            onChange={(e) => setUserData({ ...userData, location: e.target.value })}
          ></TextField>
           </Grid>
           {/* <Grid item xs={4}>
           <TextField
            type="text"
            label="Username"
            fullWidth
            value={userData ? userData.credential.username : ""}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
          ></TextField>
           </Grid> */}
       </Grid>
       <Grid container spacing={2}>
           {/* <Grid item xs={4}>
           <TextField
            type="text"
            label="Password"
            fullWidth
            value={userData?userData.credential.password : ""}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          ></TextField>
           </Grid> */}
           {props.userType ==='serviceProvider' ? (
           <Grid item xs={4}>
           <TextField
            type="text"
            label="Service Type"
            fullWidth
            value={userData? userData.service: ""}
            onChange={(e) => setUserData({ ...userData, service: e.target.value })}
          ></TextField>
           </Grid>):(<></>)}
       </Grid>
       <Button onClick={updateUser}>Save </Button>
    </div>
  )
}

export default Profile
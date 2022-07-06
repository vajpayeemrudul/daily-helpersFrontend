import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid,Paper, Avatar,Link } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Grid from "@mui/material";

export default function NavBar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  // const [address,setAdress]= useState("");
  // let temp=window.location.href;
  // temp=temp.split("/");
  // setAdress(temp[temp.length-1]);
  // console.log(address);
  const avatarStyle={backgroundColor:'#4287f5'}
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{cursor: "pointer"}}variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{window.location='/'}}>
              DailyHelpers
            </Typography>
            {localStorage.dailyHelper ? (
              <Grid style={{display:"flex"}}>
                <Button onClick={()=>{window.location="/profile"}}><Avatar style={avatarStyle}><AccountCircleIcon/></Avatar></Button>    
                <Button variant="outlined" style={{backgroundColor:"#fff",margin:"7px 0 0 10px",height:"40px"}} onClick={()=>{
                alert("Are you sure to Logout !");
                localStorage.removeItem('dailyHelper');
                window.location='/';
              }}>Logout</Button>
              </Grid>

            ) : (
              <Button variant="outlined" style={{backgroundColor:"#fff"}} onClick={()=>{
                localStorage.removeItem('dailyHelper');
                window.location='/login';
              }}>Login</Button>
                // address==="login" && ()
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

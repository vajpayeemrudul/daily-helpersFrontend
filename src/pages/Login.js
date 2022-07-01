import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import { Grid,Paper, Avatar, Typography,Link } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { RepeatOneSharp } from "@mui/icons-material";
//tabChange,setUserData
function Login(props) {
  const [entry, setEntry] = useState(true);
  const [details, setdetails] = useState({
    username: "",
    password: "",
  });

  async function Login() {
    
    // alert(JSON.stringify(details));
    try{
      const response = await axios.post("http://localhost:5000/", details);
      console.log(response.data.id);
      if(response.data.message === "Ok")
      {
        console.log(response.data);
        localStorage.setItem('dailyHelper',JSON.stringify(response.data));
        console.log(localStorage.dailyHelper);
        // props.setUserData(prevState=>{
        //   return{...prevState, id:response.data.id, type: response.data.type}
        // })
          // props.setUserData({
          //   id:response.data.id,
          //   type:response.data.position
          // })
          
          window.location="/";       
      }
    }
    catch(error)
    {
         console.log(error);
    }  
  }

  function handleChange(event) {
    const  name = event.target.name;
    const value = event.target.value;
    // console.log(name,value);
    setdetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleEntry() {
    window.location.href = "../create";
  }

  const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
  const avatarStyle={backgroundColor:'#4287f5'}
  const btnstyle={margin:'8px 0'}

  return (
    <>
    {/* <NavBar/> */}
    <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' name="username" placeholder='Enter username' value={details.fullname} onChange={handleChange} fullWidth required/>
                <TextField label='Password' name='password' placeholder='Enter password' type='password' value={details.password} onChange={handleChange} fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={Login} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>props.tabChange("event",1)} >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
    </>

    

    // <div>
    //   <NavBar />
    //   <div className="login">
    //     <Card
    //       sx={{ maxWidth: 500 }}
    //       style={{
    //         backgroundColor: "rgb(214, 210, 210)",
    //         height: "30vh",
    //         width: "70vw",
    //         borderRadius: "7px",
    //         position: "absolute",
    //         top: "200px",
    //         right: "650px",
    //       }}
    //     >
    //       <Box
    //         component="form"
    //         sx={{
    //           "& .MuiTextField-root": { m: 1, width: "25ch" },
    //         }}
    //         noValidate
    //         autoComplete="off"
    //       >
    //         <div>
    //           {entry ? (
    //             <TextField
    //               required
    //               id="username"
    //               name="username"
    //               value={details.fullname}
    //               label="Username"
    //               onChange={handleChange}
    //             />
    //           ) : (
    //             <h1>Login below</h1>
    //           )}
    //           <TextField
    //             required
    //             id="passowrd"
    //             name="password"
    //             label="Password"
    //             type="password"
    //             value={details.password}
    //             onChange={handleChange}
    //           />
    //           <div className="login-buttons">
    //             <div className="login">
    //               <Button
    //                 type="submit"
    //                 variant="contained"
    //                 color="primary"
    //                 onClick={sendData}
    //               >
    //                 Login In
    //               </Button>
    //             </div>
    //             <div className="create-account">
    //               <p>Are You are a New User?</p>
    //               <Button
    //                 type="submit"
    //                 variant="contained"
    //                 color="primary"
    //                 onClick={handleEntry}
    //               >
    //                 Create Account
    //               </Button>
    //             </div>
    //           </div>
    //         </div>
    //       </Box>
    //     </Card>
    //   </div>
    // </div>
  );
}

export default Login;

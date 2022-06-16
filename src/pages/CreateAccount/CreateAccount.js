import React, { useState } from "react";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import {Select,MenuItem,InputLabel} from '@mui/material';
import axios from "axios";

function CreateAccount() {
  const initialState = {
    name: "",
    username: "",
    password: "",
    location: "",
    profileImg: "",
  };

  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#4287f5' }
  const marginTop = { marginTop: 5 }

  const [formData, setFormData] = useState(initialState);
  const [serviceProviderData, setData] = useState({ service: '', charge: '' });
  const [usertype, setuserType] = useState("customer");

  async function sendData() {
    let temp = "http://localhost:5000/";
    try{
      await axios.post(temp + 'customer', formData)
      .then(async data => {
        if(usertype === 'serviceProvider') {
          console.log(serviceProviderData);
          await axios.post(temp + 'serviceProvider', {
            service: serviceProviderData.service, 
            charge: serviceProviderData.charge, 
            id: data.data.id
          })
          .then(data => console.log("data Saved !!", data));
        }
      });
    }
    catch(error) {
      console.log(error);
    }
    setFormData(initialState);
  }

  return (
    <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <PersonAddIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography  variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                    <TextField fullWidth label='Username' value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})} placeholder="Enter your email" />
                    <TextField fullWidth label='location' value={formData.location} onChange={(e)=>setFormData({...formData,location:e.target.value})} placeholder="Enter your location" />
                    <TextField fullWidth label='Password' type="password" placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' type="password" placeholder="Confirm your password"/>
                    <FormControl fullWidth><InputLabel>Type</InputLabel>
                    <Select value={usertype} onChange={(e) => setuserType(e.target.value)}>
                           <MenuItem value="admin">Admin</MenuItem>
                           <MenuItem value="customer">Customer</MenuItem>
                           <MenuItem value="serviceProvider">Service Provider</MenuItem>
                    </Select>
                    </FormControl>
                    {usertype ==="serviceProvider" ?(
                    <>
                    <TextField type="text" label="Service" fullWidth value={serviceProviderData.service} onChange={(e) =>setData({ ...serviceProviderData, service: e.target.value })}></TextField>
                    <TextField type="number" label="Base Charge" fullWidth value={serviceProviderData.charge} onChange={(e) => setData({ ...serviceProviderData, charge: e.target.value })} ></TextField>
                    </>):(<></>)}
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' onClick={sendData}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    // <div className="create-account">
    //   <Grid container spacing={2}>
    //     <Grid item xs={4}>
    //       <TextField
    //         type="text"
    //         label="Name"
    //         fullWidth
    //         value={formData.name}
    //         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    //       ></TextField>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <TextField
    //         type="text"
    //         label="Username"
    //         fullWidth
    //         value={formData.username}
    //         onChange={(e) =>
    //           setFormData({ ...formData, username: e.target.value })
    //         }
    //       ></TextField>
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={2}>
    //     <Grid item xs={4}>
    //       <TextField
    //         type="password"
    //         label="Password"
    //         fullWidth
    //         value={formData.password}
    //         onChange={(e) =>
    //           setFormData({ ...formData, password: e.target.value })
    //         }
    //       ></TextField>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <TextField
    //         type="text"
    //         label="location"
    //         fullWidth
    //         value={formData.location}
    //         onChange={(e) =>
    //           setFormData({ ...formData, location: e.target.value })
    //         }
    //       ></TextField>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={4}>
    //     <FormControl fullWidth>
    //       <InputLabel>Type</InputLabel>
    //       <Select
    //         value={usertype}
    //         onChange={(e) => setuserType(e.target.value)}
    //       >
    //         <MenuItem value="admin">Admin</MenuItem>
    //         <MenuItem value="customer">Customer</MenuItem>
    //         <MenuItem value="serviceProvider">Service Provider</MenuItem>
    //       </Select>
    //     </FormControl>
    //   </Grid>
    //   {usertype === "serviceProvider" ? (
    //     <div>
    //       <Grid container spacing={2}>
    //         <Grid item xs={4}>
    //           <TextField
    //             type="text"
    //             label="Service"
    //             fullWidth
    //             value={serviceProviderData.service}
    //             onChange={(e) =>
    //               setData({ ...serviceProviderData, service: e.target.value })
    //             }
    //           ></TextField>
    //         </Grid>
    //         <Grid item xs={4}>
    //           <TextField
    //             type="number"
    //             label="Base Charge"
    //             fullWidth
    //             value={serviceProviderData.charge}
    //             onChange={(e) =>
    //               setData({ ...serviceProviderData, charge: e.target.value })
    //             }
    //           ></TextField>
    //         </Grid>
    //       </Grid>
    //     </div>
    //   ) : (
    //     <></>
    //   )}
    //   <Button
    //     type="submit"
    //     variant="outlined"
    //     color="primary"
    //     onClick={sendData}
    //   >
    //     Create Account
    //   </Button>
    // </div>
  );
}

export default CreateAccount;
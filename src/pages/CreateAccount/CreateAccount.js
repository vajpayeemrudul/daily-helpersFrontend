import React, { useState } from "react";
import FileBase64 from 'react-file-base64';
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

  const initialState ={
    name: "",
    username: "",
    email: "",
    location: "",
    password: "",
    confirmpassword: "",
    service: "",
    charge: "",
    profileImg:""
  }

  const [formData, setFormData] = useState(initialState);
  const [usertype, setuserType] = useState("customer");
  const [img,setImg] = useState("");

  // const [serviceProviderData, setData] = useState({ service: '', charge: '' });

  const getBase64 =  () => {
    // console.log("base664 avoid")
    let file = document.getElementById("image").files[0];
        let reader = new FileReader();
        reader.onloadend = async function () {
          setFormData((prev)=>({...prev,profileImg:reader.result}));
        // setFormData((prev)=>{
        //      return{
        //      name: prev.name,
        //      username: prev.username,
        //      email: prev.email,
        //      location: prev.location,
        //      password: prev.password,
        //      confirmpassword: prev.confirmpassword,
        //      service: prev.service,
        //      charge: prev.charge,
        //      profileImg: reader.result
        //     }
        // });
        setImg(reader.result);
        await wait();
        // console.log(reader.result);
        console.log(img);
       };
    reader.readAsDataURL(file);
  }
  const wait = () => new Promise(resolve => setTimeout(resolve, 2000));


  async function sendData(event){
    
    event.preventDefault();
    await getBase64();
    
    console.log(formData);
    let temp = "https://daily-helpers.herokuapp.com/";
    try{
     const data= await axios.post(temp + 'customer', formData)
     console.log(data);
    }
    catch(error) {
      console.log(error);
    }
    setFormData(initialState);
    window.location="/login"
  }

  // function getBase64(event){
  //   console.log(event);
  //   let reader = new FileReader();
  //   reader.onloadend = function () {
  //     setFormData({...formData,profileImg: reader.result});
  // };
  // reader.readAsDataURL(event.target.files[0]);
  // }


  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: '#4287f5' }
  const marginTop = { marginTop: 5 }

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
                    <TextField fullWidth label='Email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder="Enter your email" />
                    <TextField fullWidth label='Location' value={formData.location} onChange={(e)=>setFormData({...formData,location:e.target.value})} placeholder="Enter your location" />
                    <TextField fullWidth label='Password' type="password" value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}  placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' type="password" value={formData.confirmpassword} onChange={(e)=>setFormData({...formData,confirmpassword:e.target.value})}  placeholder="Confirm your password"/>
                    <FormControl fullWidth><InputLabel>Type</InputLabel>
                    <Select value={usertype} onChange={(e) => setuserType(e.target.value)}>
                           <MenuItem value="admin">Admin</MenuItem>
                           <MenuItem value="customer">Customer</MenuItem>
                           <MenuItem value="serviceProvider">Service Provider</MenuItem>
                    </Select>
                    </FormControl>
                    {usertype ==="serviceProvider" ?(
                    <>
                    <TextField type="text" label="Service" fullWidth value={formData.service} onChange={(e) =>setFormData({ ...formData, service: e.target.value })}></TextField>
                    <TextField type="number" label="Base Charge" fullWidth value={formData.charge} onChange={(e) => setFormData({ ...formData, charge: e.target.value })} ></TextField>
                    </>):(<></>)}
                    <span>Enter Profile Image</span>
                    <input id="image" type="file"/>
                     
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type="submit" variant='contained' color='primary' onClick={sendData}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
  );
}

export default CreateAccount;
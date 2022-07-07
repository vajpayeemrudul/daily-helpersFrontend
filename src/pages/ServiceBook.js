import { Grid,Card,TextField } from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { ConstructionOutlined, Label, LineAxisOutlined } from '@mui/icons-material';
import axios from "axios";
import { BASE_URL } from '../Server';

export default function ServiceBook() {
  if(!localStorage.dailyHelper)
  {
    window.location='/login';
  }
  const data=JSON.parse(localStorage.dailyHelper);
  // console.log(data);
  // const[days,setDays]= useState(0);
  // const [charge,setCharge] = useState(0);
  

  //  console.log(data);

   async function handleConfirm()
   {
    alert("Are you sure to confirm booking");
    // console.log('confirmed booking')
    let temp=BASE_URL+"customer/";
    
    try{
      // console.log(temp+data.customerData._id+"/"+data.service.customerId);
      console.log(data.service.customerId);
       const postData = await axios.get(temp+data.customerData._id+"/"+data.service.customerId);
       console.log(data);
       if(postData.data.message === "Booked")
       {
         console.log(postData.data);
          data.customerData.currentService.push({service:postData.data.bookedServiceId, date: postData.data.date});
          delete data.service;
          localStorage.setItem('dailyHelper',JSON.stringify(data));
          window.location="/";
       }
      
      //  if(postData.me)
    }
    catch(error)
    {
      console.log(error);
    }
   }

  return (
    <div className='serviceBook'>
      <NavBar/>
      <Grid key={data.service._id} spacing={1} style={{  display:"flex", justifyContent:"center", alignItems:"center", height:"90vh" }}>
               <Card sx={{ maxWidth: 535 }}>
              {/* <div> */}
                <CardMedia
                  component="img"
                  height="240"
                  image={data.service.profileImg}
                  alt="serviceImg"
                />
              {/* </div>
              <div> */}
                <CardContent>
                  <Grid item xs={12} md={6} style={{display:"flex" ,padding:"0 10px 10px 0" }}>
                  <TextField id="filled-read-only-input" label="Service" defaultValue={data.service.service} InputProps={{readOnly: true,}} variant="filled"/>
                  </Grid>
                  <Grid  style={{display:"flex"  }}>
                    <Grid item xs={12} md={6} sm={12} style={{display:"flex" ,padding:"0 10px 10px 0" }}>
                       <TextField id="filled-read-only-input" label="Name" defaultValue={data.service.name} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                    <Grid item sm={6} style={{display:"flex" ,padding:"0 0 10px 0" }}>
                        <TextField id="filled-read-only-input" label="Current Location" defaultValue={data.service.location} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                  </Grid>
                  <Grid style={{display:"flex"  }}>
                  <Grid item sm={6} style={{display:"flex" ,padding:"0 10px 10px 0" }}>
                    <TextField id="filled-read-only-input" label="Availiability" defaultValue={data.service.status} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                    
                    <Grid item sm={6} style={{display:"flex" ,padding:"0 0 10px 0" }}>
                        <TextField id="filled-read-only-input" label="Service Charge per day" defaultValue={data.service.charge} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                  </Grid>
                  {/* <Grid style={{display:"flex"  }}>
                  <Grid item sm={6} style={{display:"flex" ,padding:"0 10px 10px 0" }}>
                    <TextField id="outlined-number" label="Number of days" type="number" defaultValue={0} InputLabelProps={{ shrink: true, }}  onChange={(e)=>{
                      setDays(e.target.value);
                      setCharge(data.service.charge * e.target.value)
                      }}/>
                    </Grid>
                    <Grid item sm={6} style={{display:"flex" ,padding:"0 0 10px 0" }}>
                        <TextField id="filled-read-only-input" label="Total Charge" value={charge} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                  </Grid> */}
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleConfirm}>
                      Confirm Booking
                  </Button>
                </CardActions>
              {/* </div> */}
            </Card>
          </Grid> 
    </div> 
  )
}

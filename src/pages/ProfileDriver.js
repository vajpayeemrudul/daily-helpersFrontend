import { Grid,Card,TextField } from '@mui/material'
import React, { useState,useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import Profile from './Profile';

export default function ProfileDriver() {
    if (!localStorage.dailyHelper) {
        window.location = "/login";
      }
    let data = JSON.parse(localStorage.dailyHelper);
    data=data.customerData;
    // console.log(data);
    
    const [arr, setArr] = useState([]);

    const url = 'https://daily-helpers.herokuapp.com/serviceProvider';

    useEffect(()=>{
        getAllServices();
    },[]);

    const getAllServices = async ()=>{
        try{
            // console.log(data);
            let result= await axios.post(url,{data: data.currentService});
            setArr(result.data);
            // console.log(result);
        }
        catch(error)
        {
            console.log(error);
        }  
    }
    console.log(data);
    

  return (
    <div className="Profile">
                <NavBar/>
                <Grid key={data._id} spacing={2} style={{  display:"flex", justifyContent:"center", margin:"30px 0" }}>
                <Card sx={{ maxWidth: 485 }}>
                 <CardMedia
                  component="img"
                  height="240"
                  image={data.profileImg}
                  alt="serviceImg"
                />

                <CardContent>
                  <Grid  style={{display:"flex"  }}>
                    <Grid item xs={12} md={6} sm={12} style={{display:"flex" ,padding:"0 10px 10px 0" }}>
                       <TextField id="filled-read-only-input" label="Name" defaultValue={data.name} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                    <Grid item sm={6} style={{display:"flex" ,padding:"0 0 10px 0" }}>
                        <TextField id="filled-read-only-input" label="Current Location" defaultValue={data.location} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                  </Grid>
                  <Grid  style={{display:"flex"  }}>
                    <Grid item xs={12} md={6} sm={12} style={{display:"flex" ,padding:"0 10px 10px 0" }}>
                       <TextField id="filled-read-only-input" label="Name" defaultValue={data.email} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                    <Grid item sm={6} style={{display:"flex" ,padding:"0 0 10px 0" }}>
                        <TextField id="filled-read-only-input" label="Current Location" defaultValue={data.credential.username} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                  </Grid>
                  <Grid  style={{display:"flex"  }}>
                    <Grid item xs={12} md={6} sm={12} style={{display:"flex" ,padding:"0 10px 10px 0" }}>
                       <TextField id="filled-read-only-input" label="Charge" defaultValue={data.charge} InputProps={{readOnly: true,}} variant="filled"/>
                    </Grid>
                    
                  </Grid>
                  <TableContainer>
                    <Table sx={{minWidth:450}} aria-label="Current Bookings">
                         <TableHead>
                          <TableRow>
                            <TableCell>Service</TableCell>
                            <TableCell align="right">Helper Name</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">End</TableCell>
                          </TableRow>
                         </TableHead>
                         <TableBody>
                         {arr.map((ele,index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                <TableCell component="th" scope="row"> {ele.name} </TableCell>
                                <TableCell align="right">{ele.service}</TableCell>
                                <TableCell align="right">{ele.date.toLocaleString().slice(0,10)}</TableCell>
                                <TableCell align="right"><Button onClick={async ()=>{
                                  // console.log(data._id);
                                  console.log("click button")
                                      let result = await axios.post("https://daily-helpers.herokuapp.com/customer/"+data._id,{index: index});
                                      console.log(result);
                                      if(result.data.message === "Done !!")
                                      {
                                        
                                        let res = JSON.parse(localStorage.dailyHelper);
                                        console.log(res)
                                        res.customerData.currentService.splice(index,1);
                                        res.customerData.charge=result.data.charge;
                                        data=res.customerData;
                                        localStorage.dailyHelper=JSON.stringify(res);
                                        console.log(data);
                                        setArr(prev=>{
                                          let temp=[];
                                          for(let i=0;i<prev.length;i++)
                                          {
                                            if(i!==index)
                                            {
                                              temp.push(prev[i]);
                                            }

                                          }
                                          console.log(temp);
                                          return temp;
                                        })
                                        console.log(arr);
                                        window.location="/profile"
                                      }
                                }}>End Service</Button></TableCell>
                            </TableRow>
                        ))}
                         </TableBody>
                    </Table>
                  </TableContainer>
                  
                </CardContent>
                <CardActions>
                </CardActions>

            </Card>
           </Grid>
    </div>
  )
}

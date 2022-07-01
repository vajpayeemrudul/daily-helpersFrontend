import { Grid,Card } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function ServiceBook() {
  const data=JSON.parse(localStorage.dailyHelper);
  console.log(localStorage);
  return (
    <div className='serviceBook'>
      <NavBar/>
      <Grid key={data.service._id} spacing={2} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
               <Card sx={{ maxWidth: 945 }}>
              <div>
                <CardMedia
                  component="img"
                  height="140"
                  image={data.service.profileImg}
                  alt="serviceImg"
                />
              </div>
              <div>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {data.service.service}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.service.name + "," + data.service.location}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {"Charge: " + data.service.charge}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {"Helper Avaliability: " + data.service.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                      Book Now 
                  </Button>
                </CardActions>
              </div>
            </Card>
          </Grid> 
    </div> 
  )
}

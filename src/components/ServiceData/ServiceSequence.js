import React from "react";
import Card from "@mui/material/Card";
// import Grid from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

export default function ServiceSequence(props) {
  const displayServices = (props) => {
    const { services } = props;
    // console.log(JSON.parse(services));
    // console.log(services)
    if (services.length > 0) {
      return services.map((service, index) => {
        // console.log(service);
        return (
          // <div className="service" key={service._id}>
          <Grid key={service._id} item xs={12} sm={4} md={3}  container spacing={0} style={{margin:"16px 4%"}} >
               <Card style={{padding:"20px 25px"}}>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.profileImg}
                  alt="serviceImg"
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {service.service}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Name: {service.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Location: {service.location}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Charge: {service.charge}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Helper Avaliability:{service.status}
                  </Typography>
                </CardContent>
                <CardActions>
                 
                  <Button size="small" onClick={() => { window.href = "/bookings";}}>
                    <NavLink style={{ textDecoration: "none", color: "blue" }} to="/ratings">
                      Rate
                    </NavLink>
                  </Button>
                  
                  <Button size="small" onClick={()=>{
                      // localStorage.setItem('serviceProvider',JSON.stringify(service));
                      if(service.status==="busy")
                      {
                          alert("The Helper is Already Booked");
                      } 
                      else if(localStorage.dailyHelper)
                       {
                        let temp=JSON.parse(localStorage.dailyHelper);
                        localStorage.setItem('dailyHelper',JSON.stringify({...temp,service}));
                        window.location="/booking";
                       }
                       else
                       {
                        alert("Login to Book a Helper")
                       }
                       
                    }}>Book Now
                  </Button>
                </CardActions>
 
            </Card>
          </Grid> 
         
        );
      });
    } else {
      return <h3>Loading...</h3>;
    }
  };

  return <>{displayServices(props)}</>;
}

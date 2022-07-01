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
    if (services.length > 0) {
      return services.map((service, index) => {
        // console.log(service);
        return (
          // <div className="service" key={service._id}>
          <Grid key={service._id} item xs={12} sm={6} md={4} direction="row" container spacing={2} justifyContent="center" alignItems="center">
               <Card sx={{ maxWidth: 645 }}>
              <div>
                <CardMedia
                  component="img"
                  height="140"
                  image={service.profileImg}
                  alt="serviceImg"
                />
              </div>
              <div>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {service.service}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.name + "," + service.location}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {"Charge: " + service.charge}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {"Helper Avaliability: " + service.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      window.href = "/bookings";
                    }}
                  >
                    <NavLink
                      style={{ textDecoration: "none", color: "blue" }}
                      to="/ratings"
                    >
                      Rate
                    </NavLink>
                  </Button>
                  <Button size="small" onClick={()=>{
                      // localStorage.setItem('serviceProvider',JSON.stringify(service));
                       let temp=JSON.parse(localStorage.dailyHelper);
                      localStorage.setItem('dailyHelper',JSON.stringify({...temp,service}));
                      window.location="/booking";
                    }}>Book Now
                    {/* <NavLink style={{ textDecoration: "none", color: "blue" }} to="/booking" >
                      
                    </NavLink> */}
                  </Button>
                </CardActions>
              </div>
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

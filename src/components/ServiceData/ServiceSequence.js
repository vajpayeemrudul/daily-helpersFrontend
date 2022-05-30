import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ServiceSequence(props) {
  const displayServices = (props) => {
    const { services } = props;
    if (services.length > 0) {
      return services.map((service, index) => {
        console.log(service);
        return (
          <div className='service' key={service._id}>
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
                  <Typography gutterBottom variant="h5" component="div">
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
                  <Button size="small">Rate</Button>
                  <Button size="small">Book Now</Button>
                </CardActions>
              </div>
            </Card>
          </div>
        );
      });
    } else {
      return <h3>Loading...</h3>;
    }
  };

  return <>{displayServices(props)}</>;
}

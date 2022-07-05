import { Grid, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const getRow = (data) => {

  return <TableCell>Service</TableCell>
}

function Profile(props) {
  
  let data = JSON.parse(localStorage.dailyHelper);

  // console.log(data.customerData);
  data = data.customerData;

  return (
    <div className="profile">
      <NavBar />
      <Grid
        key={data._id}
        spacing={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Card sx={{ maxWidth: 485 }}>
          <CardMedia component="img"
            height="240"
            image={data.profileImg}
            alt="serviceImg"
          />

          <CardContent>
            <Grid style={{ display: "flex" }}>
              <Grid
                item
                xs={12}
                md={6}
                sm={12}
                style={{ display: "flex", padding: "0 10px 10px 0" }}
              >
                <TextField
                  id="filled-read-only-input"
                  label="Name"
                  defaultValue={data.name}
                  InputProps={{ readOnly: true }}
                  variant="filled"
                />
              </Grid>
              <Grid
                item
                sm={6}
                style={{ display: "flex", padding: "0 0 10px 0" }}
              >
                <TextField
                  id="filled-read-only-input"
                  label="Current Location"
                  defaultValue={data.location}
                  InputProps={{ readOnly: true }}
                  variant="filled"
                />
              </Grid>
            </Grid>
            <Grid style={{ display: "flex" }}>
              <Grid
                item
                xs={12}
                md={6}
                sm={12}
                style={{ display: "flex", padding: "0 10px 10px 0" }}
              >
                <TextField
                  id="filled-read-only-input"
                  label="Name"
                  defaultValue={data.email}
                  InputProps={{ readOnly: true }}
                  variant="filled"
                />
              </Grid>
              <Grid item sm={6} style={{ display: "flex", padding: "0 0 10px 0" }} >
                <TextField id="filled-read-only-input" label="Current Location" defaultValue={data.credential.username} InputProps={{ readOnly: true }} variant="filled"
                />
              </Grid>
            </Grid>
            <TableContainer>
              <Table sx={{ minWidth: 450 }} aria-label="Current Bookings">
                <TableHead>
                  <TableRow>
                    <TableCell>Service</TableCell>
                    <TableCell align="right">Helper Name</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">End</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.currentService.map(row=>getRow(row))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Profile;

   

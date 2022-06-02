import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";

function CreateAccount() {
  const initialState = {
    name: "",
    username: "",
    password: "",
    location: "",
    profileImg: "",
    service: "",
    charge: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [usertype, setuserType] = useState();

  async function sendData() {
    let accountData = new FormData();

    accountData.append("name",formData.name);
    accountData.append("username",formData.username);
    accountData.append("password",formData.password);
    accountData.append("location",formData.location);
    accountData.append("profileImg",formData.profileImg);
    accountData.append("service",formData.service);
    accountData.append("charge",formData.charge);
    let temp="";
    if(usertype==="admin")
      temp="https://localhost:5000/admin";
    else if(usertype==="admin")
      temp="https://localhost:5000/customer";
    else
      temp="https://localhost:5000/serviceProvider";

    try{
         const response = await axios({
           method: "post",
           url: temp,
           data: accountData,
           headers:{"Content-Type": "multipart/form-data"}
         });
    }
    catch(error)
    {
      console.log(error);
    }
    setFormData(initialState);
  }

  return (
    <div className="create-account">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            type="text"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            label="Username"
            fullWidth
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          ></TextField>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          ></TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="text"
            label="location"
            fullWidth
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          ></TextField>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={usertype}
            onChange={(e) => setuserType(e.target.value)}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="customer">Customer</MenuItem>
            <MenuItem value="serviceprovider">ServiceProvider</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {usertype === "serviceprovider" ? (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Service"
                fullWidth
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="Base Charge"
                fullWidth
                value={formData.charge}
                onChange={(e) =>
                  setFormData({ ...formData, charge: e.target.value })
                }
              ></TextField>
            </Grid>
          </Grid>
        </div>
      ) : (
        <></>
      )}
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        onClick={sendData}
      >
        Create Account
      </Button>
    </div>
  );
}

export default CreateAccount;

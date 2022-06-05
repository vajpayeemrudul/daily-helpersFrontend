import React, { useState } from "react";
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
  };

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
            <MenuItem value="serviceProvider">Service Provider</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {usertype === "serviceProvider" ? (
        <div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                type="text"
                label="Service"
                fullWidth
                value={serviceProviderData.service}
                onChange={(e) =>
                  setData({ ...serviceProviderData, service: e.target.value })
                }
              ></TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="number"
                label="Base Charge"
                fullWidth
                value={serviceProviderData.charge}
                onChange={(e) =>
                  setData({ ...serviceProviderData, charge: e.target.value })
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
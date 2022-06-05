import React, { useState } from 'react';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import styled from "styled-components";

function Login() {

const [entry, setEntry] = useState(true);
const [details, setdetails] = useState({
    username: "",
    password: "",
  });

  async function sendData() {
    // alert(JSON.stringify(details));
    // const response = await axios
    //   .post("http://localhost:5000/login", details)
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setdetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleEntry() {
    window.href="../create";
  }

    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {entry ? (
            <TextField
              required
              id="username"
              name="username"
              value={details.fullname}
              label="Username"
              onChange={handleChange}
            />
          ) : (
            <h1>Login below</h1>
          )}

          <TextField
            required
            id="passowrd"
            name="password"
            label="Password"
            type="password"
            value={details.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={sendData}
          >
            Login In
          </Button>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={handleEntry}
          >
            Create Account
          </Button>
        </div>
      </Box>
    </Card>
  );
}

export default Login;
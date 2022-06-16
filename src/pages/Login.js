import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";

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
    window.location.href = "../create";
  }

  return (
    <div>
      <NavBar />
      <div className="login">
        <Card
          sx={{ maxWidth: 500 }}
          style={{
            backgroundColor: "rgb(214, 210, 210)",
            height: "30vh",
            width: "70vw",
            borderRadius: "7px",
            position: "absolute",
            top: "200px",
            right: "650px",
          }}
        >
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
              <div className="login-buttons">
                <div className="login">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={sendData}
                  >
                    Login In
                  </Button>
                </div>
                <div className="create-account">
                  <p>Are You are a New User?</p>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleEntry}
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default Login;

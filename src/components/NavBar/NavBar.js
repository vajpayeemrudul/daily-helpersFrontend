import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DailyHelpers
            </Typography>
            {user ? (
              <Button>{user.name}</Button>
            ) : (
              <div>
                <Button color="white">Register</Button>
                <Button color="white">Login</Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

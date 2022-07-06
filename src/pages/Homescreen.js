import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import {
  TextField,
  Typography,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { CatchingPokemon } from "@mui/icons-material";
import ServiceData from "../components/ServiceData/ServiceData";

const styles = (theme) => ({
  multilineColor: {
    color: "red",
  },
});

function Homescreen(props) {
  let data = {
    message:{},
    customerData:{},
    serviceProviderData:{}
  };
  // console.log(JSON.parse(localStorage.dailyHelper));
  if (localStorage.dailyHelper) {
    data = JSON.parse(localStorage.dailyHelper);
  }
  // console.log(JSON.parse(localStorage.dailyHelper));

  // return (<h1>Done</h1>);
  // console.log(data);

  const [search, setsearch] = useState("");
  const [services, setservices] = useState([]);
  const [error, seterror] = useState(false);
  const [tempservices, settempservices] = useState([]);

  function handleSearch() {
    alert(search);
    setsearch(search);
  }

  return (
    <div className="homescreen">
      <NavBar />
      <Grid container spacing={0} direction="row" justifyContent={"flex-start"} >
      <TextField id="search" name="searchtag" label="Search Service" type="text" style={{backgroundColor:"#fff",borderRadius:"8px", margin:"16px 0 0 4%"}} 
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSearch} style={{maxHeight:"54px", margin:"16px 0 0 1%"}}>
            Search
          </Button>
        <Grid xs={3} md={4}  direction="row" container spacing={2} justifyContent="center" alignItems="center">
          
        </Grid>
        <Grid item xs={12} md={12} direction="row" container spacing={2}>
          <ServiceData search={search} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Homescreen;

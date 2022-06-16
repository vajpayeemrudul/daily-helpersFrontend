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

const styles = theme => ({
  multilineColor:{
      color:'red'
  }
});

function Homescreen(props) {
  if(props.userData.id === "")
  {
    window.location="/login";
  }

  const [loading, setloading] = useState(false);
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
      <div className="search-section">
        <TextField
          id="search"
          name="searchtag"
          label="Search Service"
          type="text"
          backgroundColor="rgb(214, 210, 210)"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="display-section">
        <ServiceData search={search} />
      </div>
    </div>
  );
}

export default Homescreen;

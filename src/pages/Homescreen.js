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

  

  function handleSearch()
  {
      alert(search);
      setsearch(search);
  }

  return (
    <div>
      <NavBar />
      <TextField
        id="search"
        name="searchtag"
        label="Search Service"
        type="text"
        variant="standard"
        value={search}
        onChange={e=>setsearch(e.target.value)}
      />
      <Button variant="outlined"
            color="primary"
            onClick={handleSearch}>
          Search
      </Button>
      <ServiceData search={search}/>
    </div>
  );
}

export default Homescreen;

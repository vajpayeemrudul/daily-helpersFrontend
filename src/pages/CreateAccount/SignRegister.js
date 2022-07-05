import React,{useState} from 'react'
import { Paper, Tab, Tabs,Box,Typography } from '@mui/material'
// import TabelPanel from '../../components/TablePanel/TabelPanel';
import Login from '../Login';
import CreateAccount from './CreateAccount';
import NavBar from '../../components/NavBar/NavBar';

function SignRegister(props) {
  console.log(window.location.href);
    const [value,setValue]= useState(0);
    const tabChange = (event, newValue) => {
        setValue(newValue);
      };


      function TabelPanel(props) {
        const { children, value, index, ...other } = props;
        return (
            <div
              role="tabpanel"
              hidden={value !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              {...other}
            >
              {value === index && (
                <Box>
                  <Typography>{children}</Typography>
                </Box>
              )}
            </div>
          );
    }

    const paperStyle={width:340,margin:"20px auto"}

  return (
    <>
    <NavBar/>
        <Paper style={paperStyle} elevation={20}>
       <Tabs value={value} indicatorColor="primary" onChange={tabChange} aria-label="login-register tab">
             <Tab label="Sign In"/>
             <Tab label="Sign Up"/>
       </Tabs>
       <TabelPanel value={value} index={0}>
           <Login tabChange={tabChange} setUserData={props.setUserData} userData={props.userData}/>
       </TabelPanel>
       <TabelPanel value={value} index={1}>
           <CreateAccount/>
       </TabelPanel>
    </Paper>
    </>

  )
}

export default SignRegister
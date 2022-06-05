import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ServiceData from './components/ServiceData/ServiceData';
import Admin from "./pages/Admin";
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Homescreen from "./pages/Homescreen";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ServiceBook from "./pages/ServiceBook";

export default function App() {

  const [userData,setUserData]= useState({id:"",type:""}); 
  return (  
    // <Profile id="629c79bdd1726dce31d55b68" userType="customer"/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen userData={userData}/>}/>
        <Route path="/booking" element={<ServiceBook />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create" element={<CreateAccount/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
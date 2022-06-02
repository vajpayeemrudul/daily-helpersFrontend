import React from 'react';
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
  return (  
    <CreateAccount/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Homescreen/>}/>
    //     <Route path="/booking" element={<ServiceBook />}/>
    //     <Route path="/profile" element={<Profile/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
}
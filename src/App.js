import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ServiceData from './components/ServiceData/ServiceData';
import Admin from "./pages/Admin";
import Homescreen from "./pages/Homescreen";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ServiceBook from "./pages/ServiceBook";

export default function App() {
  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen/>}>
          <Route index element={<Homescreen/>} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="booking" element={<ServiceBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
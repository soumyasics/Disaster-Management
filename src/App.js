import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Common/Home/Home";
import SignUp from "./Components/User/SignUp";
import Login from "./Components/User/Login";
import AdminLogin from "./Components/Admin/AdminLogin";
import Navbar from "./Components/Common/NavBar/Navbar";
import VolunteersSignup from "./Components/Volunteere/VolunteersSignup";
import Footer from "./Components/Common/Footer/Footer";
import FooterSecond from "./Components/Common/Footer/FooterSecond";
import VolunteersLogin from "./Components/Volunteere/VolunteersLogin";
import RescueTeamReg from "./Components/RescueTeam/RescueTeamReg";
import RescueTeamLogin from "./Components/RescueTeam/RescueTeamLogin";
import ForgotPassword from "./Components/Common/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/Common/ForgotPassword/ResetPassword";
import LandingPage from "./Components/Common/LandingPage/LandingPage";
import AdminSidebar from "./Components/Admin/AdminSidebar";
import AdminMain from "./Components/Admin/AdminMain";

function App() {
  return (
    <BrowserRouter basename="/web_guard">
      <div>
        <Routes>
          {/* Admin */}

          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/Adminmain" element={<AdminMain />} />

 

          {/* User */}

          <Route path="/" element={<LandingPage />} />
          <Route path="/user_signup" element={<SignUp />} />
          <Route path="/user_login" element={[<Login />]} />

          {/* Volunteers */}

          <Route path="/volunteers_signup" element={<VolunteersSignup />} />
          <Route path="/volunteers_login" element={<VolunteersLogin />} />

          {/* Common */}
          <Route path="/user_footer" element={[<Footer/>,<FooterSecond/>]} />
          <Route path="/user_navbar" element={<Navbar/>} />
          <Route path="/forgot-passsword" element={<ForgotPassword/>}/>


          {/* RescueTeam */}
          <Route path="/rescueperson_signup" element={<RescueTeamReg />} />
          <Route path="/rescueperson_login" element={<RescueTeamLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

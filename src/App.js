import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/User/Home/Home";
import SignUp from "./Components/User/Login&SignUp/SignUp";
import Login from "./Components/User/Login&SignUp/Login";
import FgPassword from "./Components/User/Login&SignUp/FgPassword";
import VolunteersSignup from "./Components/Volunteere/Signup&Login/VolunteersSignup";
import VolunteersLogin from "./Components/Volunteere/Signup&Login/VolunteersLogin";
import VolunteersFgPass from "./Components/Volunteere/Signup&Login/VolunteersFgPass";
import AdminLogin from "./Components/Admin/AdminLogin";
import RescueTeamReg from "./Components/RescueTeam/Signup&Login/RescueTeamReg";
import RescueTeamLogin from "./Components/RescueTeam/Signup&Login/RescueTeamLogin";
import RescueTeamFgPass from "./Components/RescueTeam/Signup&Login/RescueTeamFgPass";
import Footer from "./Components/User/Footer/Footer";
import Navbar from "./Components/User/Navbar/Navbar";
import ForgotPassword from "./Components/Common/ForgotPassword";
import ResetPassword from "./Components/Common/ResetPassword";

function App() {
  return (
    <BrowserRouter basename="/WebQuard">
      <div>
        <Routes>
          {/* Admin */}

          <Route path="/Admin" element={<AdminLogin />} />

          {/* User */}

          <Route path="/" element={<Home />} />
          <Route path="/user_signup" element={<SignUp />} />
          <Route path="/user_login" element={[<Login />]} />
          <Route path="/user_resetpassword" element={<FgPassword />} />

          {/* Volunteers */}

          <Route path="/volunteers_signup" element={<VolunteersSignup />} />
          <Route path="/volunteers_login" element={<VolunteersLogin />} />
          <Route
            path="/volunteers_resetpassword"
            element={<VolunteersFgPass />}
          />

          {/* Common */}
          <Route path="/user_footer" element={<Footer/>} />
          <Route path="/user_navbar" element={<Navbar/>} />
          <Route path="/forgot-passsword" element={<ForgotPassword/>}/>
          <Route path="/reset-passsword" element={<ResetPassword/>}/>




          {/* RescueTeam */}
          <Route path="/rescueperson_signup" element={<RescueTeamReg />} />
          <Route path="/rescueperson_login" element={<RescueTeamLogin />} />
          <Route
            path="/rescueperson_resetpassword"
            element={<RescueTeamFgPass />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

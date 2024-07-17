import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
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
import LandingPage from "./Components/Common/LandingPage/LandingPage";
import AdminMain from "./Components/Admin/AdminMain";
import Adminnav from "./Components/Common/NavBar/Adminnav";
import Viewalerts from "./Components/Admin/AdminDashboard/Viewalerts";
import ResetPassword from "./Components/Common/ForgotPassword/ResetPassword";
import Addalerts from "./Components/User/Alerts/Addalerts";
import UserNavbar from "./Components/User/Navbar/UserNavbar";
import Userhome from "./Components/User/Userhome";
import Userprofile from "./Components/User/Profile/Userprofile";
import Acptrjtreq from "./Components/Admin/Requests/Acptrjtreq";
import Rescuehome from "./Components/RescueTeam/Rescuehome";
import RescueNav from "./Components/RescueTeam/RescueNav";
import Viewemrgalert from "./Components/RescueTeam/Alerts/Viewemrgalert";
import Volnavbar from "./Components/Volunteere/Navbar/Volnavbar";
import Volviewemgalert from "./Components/Volunteere/Alerts/Volviewemgalert";
import Userviewallalert from "./Components/User/Alerts/Userviewallalert";
import Rescuestatus from "./Components/User/Alerts/Rescuestatus";
import VolViewprofile from "./Components/Volunteere/Profile/VolViewprofile";
import Rescueprofile from "./Components/RescueTeam/Profile/Rescueprofile";
import Updatealert from "./Components/Volunteere/Alerts/Updatealert/Updatealert";
import UpdateViewalert from "./Components/Volunteere/Alerts/Updatealert/UpdateViewalert";
import PrivacyPolicyView from "./Components/Common/PrivacyPolicy/PrivacyPolicyView";
import PrivacyPolicyUpdate from "./Components/Common/PrivacyPolicy/PrivacyPolicyUpdate";
import AdminViewComplaints from "./Components/Admin/Complaints/AdminViewComplaints";
import RescueStatus from "./Components/Admin/Rescue/RescueStatus";


function App() {
  return (
    <BrowserRouter basename="/web_guard">
      <div>
        <Routes>
          {/* Admin */}

          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/volunteer-req" element={[<Adminnav/>,<AdminMain data="volunteer-req"/>]} />
          <Route path="/admin-dash" element={[<Adminnav/>,<AdminMain data="admin-dash"/>]} />
          <Route path="/admin-rescuereq" element={[<Adminnav/>,<AdminMain data="admin-rescuereq"/>]} />
          <Route path="/admin-viewallusers" element={[<Adminnav/>,<AdminMain data="admin-viewallusers"/>]} />
          <Route path="/admin-viewallrescue" element={[<Adminnav/>,<AdminMain data="admin-viewallrescue"/>]} />
          <Route path="/admin-viewallvolunteer" element={[<Adminnav/>,<AdminMain data="admin-viewallvolunteer"/>]} />

          <Route path="/admin-viewalerts" element={[<Adminnav/>,<Viewalerts />]} />
          <Route path="/reset-password/:id" element={[<Adminnav/>,<ResetPassword />]} />
          <Route path="/admin-acptrjtreq" element={[<Acptrjtreq />]} />


          <Route path="/compalints-view" element={[<AdminViewComplaints />]} />
          <Route path="/rescue-status" element={[<RescueStatus />]} />
          

 

          {/* User */}

          <Route path="/" element={<LandingPage />} />
          <Route path="/user_signup" element={<SignUp />} />
          <Route path="/user_login" element={[<Login />]} />
          <Route path="/user_addalerts" element={[<UserNavbar/>,<Addalerts/>]}/>
          <Route path="/user-home" element={<Userhome/>}/>
          <Route path="/user-viewalert" element={[<UserNavbar/>,<Userviewallalert/>]}/>
          <Route path="/user-viewreqstatus" element={[<UserNavbar/>,<Rescuestatus/>]}/>
          

          {/* Volunteers */}

          <Route path="/volunteers_signup" element={<VolunteersSignup />} />
          <Route path="/volunteers_login" element={<VolunteersLogin />} />
          <Route path="/volunteers_home" element={[<Volnavbar/>,<Rescuehome />]} />
          <Route path="/volunteers_emergencyalert" element={[<Volnavbar/>,<Volviewemgalert />]} />
          <Route path="/volunteers_editalert" element={<Updatealert />} />
          <Route path="/volunteers_editviewalert" element={<UpdateViewalert />} />


          {/* Common */}
          <Route path="/user_footer" element={[<Footer/>,<FooterSecond/>]} />
          <Route path="/user_navbar" element={<Navbar/>} />
          <Route path="/forgot-passsword" element={<ForgotPassword/>}/>
          <Route path="/Privacy-Policy" element={<PrivacyPolicyView/>}/>
          <Route path="/Privacy-Policy" element={<PrivacyPolicyView/>}/>
          <Route path="/Privacy-PolicyUpdate" element={<PrivacyPolicyUpdate/>}/>


          {/* RescueTeam */}
          <Route path="/rescueperson_signup" element={<RescueTeamReg />} />
          <Route path="/rescueperson_login" element={<RescueTeamLogin />} />
          <Route path="/rescueperson_home" element={[<RescueNav/>,<Rescuehome />]} />
          <Route path="/rescuemergencyalerts" element={[<RescueNav/>,<Viewemrgalert />]} />
    

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

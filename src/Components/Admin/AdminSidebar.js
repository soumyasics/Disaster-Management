import React, { useEffect, useState } from 'react'
import './AdminSidebar.css'
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsPersonExclamation } from "react-icons/bs";
import { MdOutlineTask } from "react-icons/md";
import { AiOutlineAlert } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { VscRequestChanges } from "react-icons/vsc";
import { Link, useNavigate } from 'react-router-dom';

function AdminSidebar() {
    const [dropdownVisibleUsers, setDropdownVisibleUsers] = useState(false);
    const [dropdownVisibleRequests, setDropdownVisibleRequests] = useState(false);

    const toggleDropdownUsers = () => {
        setDropdownVisibleUsers(!dropdownVisibleUsers);
    };

    const toggleDropdownRequests = () => {
        setDropdownVisibleRequests(!dropdownVisibleRequests);
    };
const navigate=useNavigate()
const volreq=(()=>{
    navigate("/volunteer-req")
})
const rescuereq=(()=>{
    navigate("/admin-rescuereq")
})

const admindash=(()=>{
    navigate("/admin-dash")
})

const adminid=localStorage.getItem("adminid")
console.log(adminid);

useEffect(()=>{
    if(adminid===null){
        navigate("/Admin")
    }
},[])
const[del,setDel]=useState(null)
const confirmLogout = () => {
    localStorage.removeItem("adminid");
    setDel(null);
    navigate("/Admin");
  };
  
    return (
        <div className='admin_sidebar_main container-fluid'>
            <div>
                <button className="dashboard-button" onClick={admindash}>
                    <span className="icon"> <RiDashboardLine className='admin_dash_icon'/></span>
                    <span className="text admin_dash_text">Dash Board</span>
                </button>
            </div>
            <div className='admin_sidebar_button container'>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button" onClick={toggleDropdownUsers}>
                        <span className="icon"> <CgProfile className='admin_sub_icon'/></span>
                        <span className="text admin_sub_text">Manage Users</span>
                    </button>
                    {dropdownVisibleUsers && (
                        <div className="dropdown_menu sidebar_dash_drop">
                           <Link to="/admin-viewallusers" style={{textDecoration:"none",color:"white"}}><button className="dropdown_item dashboard_sub_button1 hov">Users</button></Link> <br/>
                           <Link to="/admin-viewallrescue" style={{textDecoration:"none",color:"white"}}><button className="dropdown_item dashboard_sub_button1 hov">Rescue Team</button></Link><br/>
                           <Link to="/admin-viewallvolunteer" style={{textDecoration:"none",color:"white"}}><button className="dropdown_item dashboard_sub_button1 hov">Volunteers</button></Link> <br/>
                        </div>
                    )}
                </div>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button">
                        <span className="icon"> <BsPersonExclamation className='admin_sub_icon'/></span>
                        <span className="text admin_sub_text">Complaints</span>
                    </button>
                </div>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button" onClick={toggleDropdownRequests}>
                        <span className="icon"> <VscRequestChanges className='admin_sub_icon'/></span>
                        <span className="text admin_sub_text">Requests</span>
                    </button>
                    {dropdownVisibleRequests && (
                        <div className="dropdown_menu sidebar_dash_drop">
                            <button className="dropdown_item dashboard_sub_button1 hov" onClick={volreq}>Volunteer Requests</button><br/>
                            {/* <button className="dropdown_item dashboard_sub_button1 hov" onClick={rescuereq}>Rescue Team Requests</button><br/> */}
                            {/* <button className="dropdown_item dashboard_sub_button1 hov">Rejected Requests</button><br/> */}
                        </div>
                    )}
                </div>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button">
                        <span className="icon"> <MdOutlineTask className='admin_sub_icon'/></span>
                        <span className="text admin_sub_text">Tasks</span>
                    </button>
                </div>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button">
                        <span className="icon"> <AiOutlineAlert className='admin_sub_icon'/></span>
                       <Link to="/admin-viewalerts" style={{textDecoration:"none",color:"white"}}><span className="text admin_sub_text">Emergency Alerts</span></Link> 
                    </button>
                </div>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button">
                        <span className="icon"> <MdOutlinePrivacyTip className='admin_sub_icon'/></span>
                        <span className="text admin_sub_text">Privacy Policy</span>
                    </button>
                </div>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button">
                        <span className="icon"> <MdOutlineBarChart className='admin_sub_icon'/></span>
                        <span className="text admin_sub_text">Reports</span>
                    </button>
                </div>
                <div className='admin_dash_div'>
                    <button className="dashboard_sub_button" onClick={confirmLogout}>
                        <span className="icon"> <LuLogOut className='admin_sub_icon'/></span>
                        <span className="text admin_sub_text">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar;

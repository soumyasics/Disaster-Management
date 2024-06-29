import React, { useState } from 'react'
import './AdminSidebar.css'
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsPersonExclamation } from "react-icons/bs";
import { MdOutlineTask } from "react-icons/md";
import { AiOutlineAlert } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';

function AdminSidebar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

  return (
    <div className='admin_sidebar_main container-fluid'>
        <div>
            <button className="dashboard-button">
                <span className="icon"> <RiDashboardLine className='admin_dash_icon'/></span>
                <span className="text admin_dash_text">Dash Board</span>
            </button>
        </div>
        <div className='admin_sidebar_button container'>
            <div className='admin_dash_div'>
            <button className="dashboard_sub_button" onClick={toggleDropdown}>
                <span className="icon"> <CgProfile className='admin_sub_icon'/></span>
                <span className="text admin_sub_text">Manage Users</span>
            </button>
            {dropdownVisible && (
                <div className="dropdown_menu sidebar_dash_drop">
                    <button className="dropdown_item dashboard_sub_button1 hov">Users</button><br/>
                    <button className="dropdown_item dashboard_sub_button1 hov">Rescue Team</button><br/>
                    <button className="dropdown_item dashboard_sub_button1 hov">Volunteers</button><br/>
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
                <button className="dashboard_sub_button">
                    <span className="icon"> <LuLogOut className='admin_sub_icon'/></span>
                    <span className="text admin_sub_text">Logout</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar
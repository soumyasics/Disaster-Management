import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminLogin from './AdminLogin'
import Volunteerreq from './Requests/Volunteerreq'
import AdminDash from './AdminDashboard/AdminDash'
import Rescuereq from './Requests/Rescuereq'
import AllUsers from './Modules/AllUsers'
import Allrescueteam from './Modules/Allrescueteam'
import Allvolunteers from './Modules/Allvolunteers'
import AdminViewComplaints from './Complaints/AdminViewComplaints'

function AdminMain({data}) {
  return (
    <div className='row'>
        <div  className='col-md-3 col-sm-5' >
            <AdminSidebar/>
        </div>
        <div  className='col-md-9 col-sm-7'>
        {/* <div className="shopsmain-content"> */}
        {
            data==="volunteer-req"?(<Volunteerreq/>):
            data==="admin-dash"?(<AdminDash/>):
            data==="admin-rescuereq"?(<Rescuereq/>):
            data==="admin-viewallusers"?(<AllUsers/>):
            data==="admin-viewallrescue"?(<Allrescueteam/>):
           data==="admin-viewallvolunteer"?(<Allvolunteers/>):
           data==="admin-viewallusercomplaints"?(<AdminViewComplaints/>):

      
            <AdminLogin/>
        }

        </div>
    </div>
  )
}

export default AdminMain
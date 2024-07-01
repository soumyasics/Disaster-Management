import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminLogin from './AdminLogin'
import Volunteerreq from './Requests/Volunteerreq'
import AdminDash from './AdminDashboard/AdminDash'
import Rescuereq from './Requests/Rescuereq'

function AdminMain({data}) {
  return (
    <div className='row'>
        <div  className='col-md-3 col-sm-5'>
            <AdminSidebar/>
        </div>
        <div  className='col-md-9 col-sm-7'>
        {/* <div className="shopsmain-content"> */}
        {
            data==="volunteer-req"?(<Volunteerreq/>):
            data==="admin-dash"?(<AdminDash/>):
            data==="admin-rescuereq"?(<Rescuereq/>):
           
            <AdminLogin/>
        }

        </div>
    </div>
  )
}

export default AdminMain
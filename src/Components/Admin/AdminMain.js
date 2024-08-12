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
import Viewalerts from './AdminDashboard/Viewalerts'
import ViewApprovedAlerts from './ViewApprovedAlerts/ViewApprovedAlerts'
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy'
import ViewPrivacyPolicy from './PrivacyPolicy/ViewPrivacyPolicy'
import EditPrivacyPolicy from './PrivacyPolicy/EditPrivacyPolicy'
import AdminViewCompletedAlerts from './AdminViewCompletedAlerts'

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
           data==="admin-viewalerts"?(<Viewalerts/>):
           data==="admin-viewapprovedalerts"?(<ViewApprovedAlerts/>):
           data==="admin-privacypolicy"?(<PrivacyPolicy/>):
           data==="admin-view-privacypolicy"?(<ViewPrivacyPolicy/>):
           data==="admin-edit-privacypolicy"?(<EditPrivacyPolicy/>):
           data==="admin-viewcompletedalerts"?(<AdminViewCompletedAlerts/>):

      
            <AdminLogin/>
        }

        </div>
    </div>
  )
}

export default AdminMain
import React from 'react'
import AdminSidebar from './AdminSidebar'

function AdminMain() {
  return (
    <div className='row'>
        <div  className='col-md-3 col-sm-5'>
            <AdminSidebar/>
        </div>
        <div  className='col-md-9 col-sm-7'>

        </div>
    </div>
  )
}

export default AdminMain
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Constants/Baseurl'
import Lottie from "lottie-react";
import imglottiedata from "../../../Assets/lottiedata2.json";


function Allvolunteers() {
    const [data,setData]=useState([])
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        fetchAllRescueMembers();
    }, []);

    const fetchAllRescueMembers = () => {
        axiosInstance.post(`viewallvolunteers`)
            .then((res) => {
                console.log(res);
                setData(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        if (value.trim() === '') {
            fetchAllRescueMembers();
        } else {
            axiosInstance.post(`searchvolunteerByName/${value}`)
                .then((res) => {
                    console.log(res);
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.response.data.message)
                });
        }
    };


    const deletefn=((id)=>{
        axiosInstance.post(`deactivatevolenteerById/${id}`)
        .then((result)=>{
            console.log(result);
            if(result.data.status===200){
                alert("Deleted Successfully")
                // toast.success("User deleted successfully")
                setData(data.filter(user => user._id !== id));
            }
            else{
                // toast.err("Cannot delete at this moment")
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    })


  return (
    <div className='container'>
    <div className='container all-users-container'>
      <div className='allusers-search'>
        <div className="searchnav-adminhomemain">
          <div className="search-containeradminnav">
            <i className="ri-search-line"></i>
            <input
              type="text"
              className="search-inputadminnav"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearch}

            />
          </div>
        </div>
      </div>


    </div>
    <div className='allusers-mainboxhead'>
        <p className='allusers-mainboxppp'>All Voluneers</p>
        <div className='adminviewallpatient-scrollmain'>
        <div className='row'>
            <div className='col-1 allusers-headc'>
                <p style={{textAlign:"center"}}>No.</p>
            </div>
            <div className='col-2 allusers-headc'>
                <p>UserName</p>
            </div>
            <div className='col-2 allusers-headc'>
                <p>Phone Number</p>
            </div>
            <div className='col-3 allusers-headc'>
                <p>Email</p>
            </div>
            <div className='col-3 allusers-headc'>
                <p>Address</p>
            </div>
            <div className='col-1 allusers-headc'>
                
            </div>

            {data && data.length ? (
                data.map((a,index) => {
                  return (
                    <>

            <div className='col-1 allusers-data'>
                <p style={{textAlign:"center"}}>{index+1}</p>
            </div>
            <div className='col-2 allusers-data'>
                <p>{a?.name}</p>
            </div>
            <div className='col-2 allusers-data'>
                <p>{a?.phone}</p>
            </div>
            <div className='col-3 allusers-data'>
                <p>{a?.email}</p>
            </div>
            <div className='col-2 allusers-data'>
                <p>{a?.address}</p>
            </div>
            <div className='col-2 allusers-data'>
                <button type='submit' onClick={() => deletefn(a._id)}>Remove</button>
            </div>
            </>
            );
        })
        ) : (
<div className="counsellornodatareq-lottie">
  <Lottie animationData={imglottiedata} />
</div>
        )}
        </div>
        </div>
        </div>

    </div>
  )
}

export default Allvolunteers
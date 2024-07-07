import React, { useEffect, useState } from "react";
import "./Admindash.css";
import img from "../../../Assets/cloud.png"
import axiosInstance from "../../Constants/Baseurl";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

function AdminDash() {
  const [weather, setWeather] = useState(null);
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [users,setUsers]=useState([])
  const [alerts,setAlerts]=useState([])
  const [pendingalert,setpendingalerts]=useState([])
  const [approvedalert,setapprovedalert]=useState([])


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
         " https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"    
        // " api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2f1d16b236a763b9268ec43f95ed1a5a"
      );       
        setWeather(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    };

    fetchWeather();
    const updateDateTime = () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
      const formattedTime = date.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit', hour12: true }); // Format: HH:MM am/pm
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update time every minute

    return () => clearInterval(intervalId);

  }, []);

  useEffect(()=>{
    axiosInstance.post(`viewallusers`)
    .then((result)=>{
      // console.log(result);
      setUsers(result.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    axiosInstance.post(`viewallalerts`)
    .then((result)=>{
      // console.log(result);
      setAlerts(result.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    axiosInstance.post(`viewemergencyforadmin`)
    .then((result)=>{
      // console.log(result);
      setpendingalerts(result.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
    axiosInstance.post(`viewapprovedalert`)
    .then((result)=>{
      // console.log(result);
      setapprovedalert(result.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])

//chart Functionality

const volunteerData = (volunteerStats) => ({
  labels: ["Volunteers - Registered", "Volunteers - Approved", "Volunteers - Rejected"],
  datasets: [
    {
      data: [volunteerStats.registered, volunteerStats.approved, volunteerStats.rejected],
      backgroundColor: ["#008080", "#ff7f50", "#000000"],
      borderWidth: 1,
    }
  ]
});

const rescueMemberData = (rescueMemberStats) => ({
  labels: ["Rescue Members - Registered", "Rescue Members - Approved", "Rescue Members - Rejected"],
  datasets: [
    {
      data: [rescueMemberStats.registered, rescueMemberStats.approved, rescueMemberStats.rejected],
      backgroundColor: ["#b0c4de", "#ffdab9", "#90ee90"],
      borderWidth: 1,
    }
  ]
});

const options = {
  animation: {
    duration: 0 // Disable animations
  },
  plugins: {
    legend: {
      display: true,
      position: "right"
    }
  }
};

      // const volunteerRegistered = await axiosInstance.post('viewallvolunteers');
      // const volunteerApproved = await axiosInstance.post('adminviewvolreq');
      // const volunteerRejected = await axiosInstance.post('adminviewvolreq');


      // const rescueMemberRegistered = await axiosInstance.post('viewallresquemembers');
      // const rescueMemberApproved = await axiosInstance.post('viewallrescuereq');
      // const rescueMemberRejected = await axiosInstance.post('viewallrescuereq');


      const [volunteerStats, setVolunteerStats] = useState({ registered: 0, approved: 0, rejected: 0 });
      const [rescueMemberStats, setRescueMemberStats] = useState({ registered: 0, approved: 0, rejected: 0 });
      
      useEffect(() => {
        const fetchStats = async () => {
          try {
            const volunteerRegistered = await axiosInstance.post('viewallvolunteers');
            const volunteerApproved = await axiosInstance.post('adminviewvolreq');
            const volunteerRejected = await axiosInstance.post('adminviewvolreq');
      
            setVolunteerStats({
              registered: volunteerRegistered.data.data.length,
              approved: volunteerApproved.data.data.length,
              rejected: volunteerRejected.data.data.length,
            });
      
            const rescueMemberRegistered = await axiosInstance.post('viewallresquemembers');
            const rescueMemberApproved = await axiosInstance.post('viewallrescuereq');
            const rescueMemberRejected = await axiosInstance.post('viewallrescuereq');
      
            setRescueMemberStats({
              registered: rescueMemberRegistered.data.data.length,
              approved: rescueMemberApproved.data.data.length,
              rejected: rescueMemberRejected.data.data.length,
            });
          } catch (error) {
            console.error("Error fetching the stats", error);
          }
        };
      
        fetchStats();
      }, []);
      

  return (
    <div className="container">
    <div className="row">
      <div className="col-6 sm-3 lg-6">
        <div className="row">
          <div className="col-6 sm-2">
            <div className="admin-dash1stbox">
              <h5>User Registered</h5>
              <p>{users?.length}</p>
            </div>
          </div>
          <div className="col-6 sm-2">
            <div className="admin-dash1stbox">
              <h5>Alerts Recieved</h5>
              <p>{alerts?.length}</p>
            </div>
          </div>
          <div className="col-6 sm-2">
            <div className="admin-dash1stbox">
              <h5>Alerts Pending</h5>
              <p>{pendingalert?.length}</p>
            </div>
          </div>
          <div className="col-6 sm-2">
            <div className="admin-dash1stbox">
              <h5>Alerts Approved</h5>
              <p>{approvedalert?.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="admin-dash-boxright">
          <div className="row">
            <div className="col-6 admin-dash-image">
              <img src={img} alt="cloud" />
            </div>
            <div className="col-6 admin-dash-degree">
              {weather ? <p>{weather?.current?.temperature_2m}°C</p> : <p>Loading...</p>}
            </div>
            <div className="col-6 admin-dash-date">
              <p>{currentDate}</p>
            </div>
            <div className="col-6 admin-dash-date">
              <p>{currentTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-6">
        <Pie data={volunteerData(volunteerStats)} options={options} />
      </div>
      <div className="col-6">
        <Pie data={rescueMemberData(rescueMemberStats)} options={options} />
      </div>
    </div>
  </div>
   );
}

export default AdminDash;

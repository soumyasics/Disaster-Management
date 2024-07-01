import axios from "axios"

const axiosInstance = axios.create({

    //server api
    // baseURL: 'http://hybrid.srishticampus.in:4029/web_guard_api', 

    // baseURL: '', 
  
  //local api 
  
    baseURL: 'http://localhost:4029/web_guard_api', 
  
    headers: {
      'Content-Type': 'application/json',
    },

     url :"http://localhost:4029",
    //  url:  "http://hybrid.srishticampus.in:4029/"
    
  });
   
  export default axiosInstance
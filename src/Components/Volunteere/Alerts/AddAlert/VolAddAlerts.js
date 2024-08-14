import React, { useRef, useState } from 'react'
import './VolAddAlerts.css'
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-router-dom";
import axiosInstance from '../../../Constants/Baseurl';


function VolAddAlerts() {

  const volid = localStorage.getItem("volunteerId")
  console.log(volid);
  
  const fileInputRef = useRef(null);
  const [data, setData] = useState({
    
    title: "",
    // date: '',
    discription: "",
    caterory: "",
    district: "Thiruvananthapuram",
    needs: "",
    securitylevel: "",
    image: "",
    volid: volid,
  });
  const [errors, setErrors] = useState({
    title: "",
    // date: '',
    discription: "",
    caterory: "",
    district: "",
    needs: "",
    securitylevel: "",
    image: "",
  });

  console.log(data);
  // const handleIconClick = () => {
  //   fileInputRef.current.click();
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (event) => {
    setData({ ...data, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    let newErrors = {};

    if (!data.title.trim()) {
      newErrors.title = "Alert Title is required";
      formIsValid = false;
    }

    // if (!data.date.trim()) {
    //   newErrors.date = 'Date & Time is required';
    //   formIsValid = false;
    // }

    if (!data.discription.trim()) {
      newErrors.discription = "Description is required";
      formIsValid = false;
    }

    if (!data.caterory.trim()) {
      newErrors.caterory = "Category is required";
      formIsValid = false;
    }

    if (!data.district.trim()) {
      newErrors.district = "Alert District is required";
      formIsValid = false;
    }

    if (!data.needs.trim()) {
      newErrors.needs = "Immediate Needs is required";
      formIsValid = false;
    }

    if (!data.securitylevel.trim()) {
      newErrors.securitylevel = "Security Level is required";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      const formData = new FormData();
      formData.append("title", data.title);
      // formData.append('date', data.date);
      formData.append("discription", data.discription);
      formData.append("caterory", data.caterory);
      formData.append("district", data.district);
      formData.append("needs", data.needs);
      formData.append("securitylevel", data.securitylevel);
      formData.append("image", data.image);
      formData.append("volid",data.volid);

      axiosInstance
        .post("/volregisteremergency", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Response:", response.data);
          if(response.data.status==200){
            alert("Alert added successfully!");

          }
          else{
            alert("Something Went Wrong")
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to add alert. Please try again.");
        });
    }
  };
  return (
    <>
        <div className="container addalert_main_div">
      <form onSubmit={handleSubmit}>
        <div className="addalert_box">
          <div className="row addalert_row">
            <div className="col-1">
            <Link to="/user-home" style={{textDecoration:"none",color:"green"}}>

              <TbArrowBackUp className="add_alert_icon" /></Link>
            </div>
            <div className="col-5">
              <div className="addalert_title_div">
                <p>Alert Title</p>
                <input
                  type="text"
                  className={`form-control addalert-input-type-change ${
                    errors.title ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Alert Title"
                  name="title"
                  value={data.title}
                  onChange={handleInputChange}
                />
                {errors.title && (
                  <div className="invalid-feedback">{errors.title}</div>
                )}
              </div>
            </div>
            <div className="col-5">
              <div className="addalert_title_div"></div>
            </div>
          </div>

          <div className="row addalert_row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="addalert_title_div">
                <p>Description</p>
                <input
                  type="text"
                  className={`form-control addalert-input-type-change ${
                    errors.description ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Alert Description"
                  name="discription"
                  value={data.discription}
                  onChange={handleInputChange}
                />
                {errors.discription && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>
            </div>
          </div>

          <div className="row addalert_row">
            <div className="col-1"></div>
            <div className="col-5">
              <div className="addalert_title_div">
                <p>Category</p>
                <input
                  type="text"
                  className={`form-control addalert-input-type-change ${
                    errors.caterory ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Alert Category"
                  name="caterory"
                  value={data.caterory}
                  onChange={handleInputChange}
                />
                {errors.caterory && (
                  <div className="invalid-feedback">{errors.caterory}</div>
                )}
              </div>
            </div>
            <div className="col-5">
              <div className="addalert_title_div">
                <p>Alert Location</p>
                <select
                  type="text"
                  className={`form-control addalert-input-type-change ${
                    errors.district ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Alert Location"
                  name="district"
                  value={data.district}
                  onChange={handleInputChange}
                >
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
            <option value="Kollam">Kollam</option>
            <option value="Pathanamthitta">Pathanamthitta</option>
            <option value="Alappuzha">Alappuzha</option>
            <option value="Kottayam">Kottayam</option>
            <option value="Idukki">Idukki</option>
            <option value="Ernakulam">Ernakulam</option>
            <option value="Thrissur">Thrissur</option>
            <option value="Palakkad">Palakkad</option>
            <option value="Malappuram">Malappuram</option>
            <option value="Kozhikode">Kozhikode</option>
            <option value="Wayanad">Wayanad</option>
            <option value="Kannur">Kannur</option>
            <option value="Kasargod">Kasargod</option>
            </select>
                {errors.location && (
                  <div className="invalid-feedback">{errors.district}</div>
                )}
              </div>
            </div>
          </div>

          <div className="row addalert_row">
            <div className="col-1"></div>
            <div className="col-5">
              <div className="addalert_title_div">
                <p>Immediate Needs</p>
                <input
                  type="text"
                  className={`form-control addalert-input-type-change ${
                    errors.needs ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Immediate Needs"
                  name="needs"
                  value={data.needs}
                  onChange={handleInputChange}
                />
                {errors.needs && (
                  <div className="invalid-feedback">{errors.needs}</div>
                )}
              </div>
            </div>
            <div className="col-5">
              <div className="addalert_title_div">
                <p>Security Level</p>
                <input
                  type="text"
                  className={`form-control addalert-input-type-change ${
                    errors.securitylevel ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Security Level"
                  name="securitylevel"
                  value={data.securitylevel}
                  onChange={handleInputChange}
                />
                {errors.securitylevel && (
                  <div className="invalid-feedback">{errors.securitylevel}</div>
                )}
              </div>
            </div>
          </div>

          <div className="row addalert_row">
            <div className="col-1"></div>
            <div className="col-5">
              <div className="addalert_photo_div">
                <p>Add Photos</p>
                {/* <div className="upload_icon" onClick={handleIconClick}>
                  <FaImage className="addalert_image_icon" />
                </div> */}
                <input
                  type="file"
                  // ref={fileInputRef}
                  // className="addalert_image_style"
                  // accept="image/*"
                  // name="image"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <div className="row addalert_button_div">
            <div className="col-12">
              <button
                className="btn btn-primary btn-style-change"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default VolAddAlerts
import React from "react";
import "./Weatherforecast.css";
import img from "../../../Assets/cloud2.png"

function Weatherforecats() {
  return (
    <div className="forecast-container">
      <div className="weather-forecast-search">
        <div className="input-container9">
          <i className="ri-search-line"></i>
          <input
            type="text"
            placeholder="Search"
            // value={searchCity}
            // onChange={(e) => setSearchCity(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </div>
      <div className="forecast-main">
        <div className="forecast-mainbox">
            <h6>Weather Forecasting</h6>
            <div className="forecast-cloudimg">
            <img src={img} alt="images" width="150px" height="100px"/>
            </div>
          <div className="container">
            <div className="row weather-maininsiderow">
              <div className="col-2.5 forecats-box1"></div>
              <div className="col-2.5 forecats-box1"></div>{" "}
              <div className="col-2.5 forecats-box1"></div>{" "}
              <div className="col-2.5 forecats-box1"></div>{" "}
              <div className="col-2.5 forecats-box1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherforecats;

import React, { useState, useEffect } from 'react';
import './Weatherforecast.css';
import img from '../../../Assets/cloud2.png';
import axios from 'axios';

function Weatherforecats() {
  const [city, setCity] = useState('trivandrum');
  const [units, setUnits] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit, 'standard' for Kelvin
  const [forecast, setForecast] = useState([]);
  const [cityInfo, setCityInfo] = useState({});

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=0c8ad3128f981928e8934de5e0264b44`;
        let res = await axios.get(forecastUrl);
        let jsonData = res.data;
        
        let dailyForecast = [];
        
        // Extracting daily forecast data
        for (let i = 0; i < jsonData.list.length; i++) {
          let date = new Date(jsonData.list[i].dt_txt);
          if (date.getHours() === 12) { // Choosing data for noon (12:00)
            dailyForecast.push(jsonData.list[i]);
          }
          if (dailyForecast.length === 7) {
            break;
          }
        }
        
        setForecast(dailyForecast);
        setCityInfo({
          name: jsonData.city.name,
          sunrise: jsonData.city.sunrise,
          sunset: jsonData.city.sunset
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchForecast();
  }, [city, units]); // Re-run effect when city or units change

  const handleSearch = () => {
    // Fetch the forecast for the new city
    setCity(city);
  };

  const formatTime = (timestamp) => {
    let date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="forecast-container">
      <div className="weather-forecast-search">
        <div className="input-container9">
          <i className="ri-search-line"></i>
          <input
            type="text"
            placeholder="Search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSearch}>Search</button>
      </div>
      <div className="forecast-main">
        <div className="forecast-mainbox">
          <h6>Weather Forecasting {cityInfo.name}</h6>
          <div className="forecast-cloudimg">
            {/* <img src={img} alt="images" width="150px" height="100px" /> */}
            <div className="city-info">
            <p>Sunrise: {formatTime(cityInfo.sunrise)}</p>
            <p>Sunset: {formatTime(cityInfo.sunset)}</p>
          </div>

          </div>
          <div className="container">
            <div className="row weather-maininsiderow">
              {forecast.map((forecastItem, index) => {
                let weatherIcon = forecastItem.weather[0].icon;
                let iconLink = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
                let day = new Date(forecastItem.dt_txt).toLocaleString('en-us', { weekday: 'short' });

                return (
                  <div key={index} className="col-2.5 forecats-box1">
                    <h3>{day}</h3>
                    <img src={iconLink} alt="Weather Icon" />
                    <p>{forecastItem.weather[0].description}</p>
                    <p>Temp: {forecastItem.main.temp}°</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weatherforecats;

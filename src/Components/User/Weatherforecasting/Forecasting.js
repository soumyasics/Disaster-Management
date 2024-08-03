import React, { useEffect, useState } from 'react';
import "./Forecastinf.css";
import axiosInstance from '../../Constants/Baseurl';

function Forecasting() {
    const [city, setCity] = useState('trivandrum');
    const [searchCity, setSearchCity] = useState('trivandrum');
    const [data, setData] = useState({});

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    const fetchWeather = (cityName) => {
        axiosInstance.post(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0c8ad3128f981928e8934de5e0264b44&units=metric`)
            .then((res) => {
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSearchClick = () => {
        setCity(searchCity);
    };

    return (
        <div className='weather-forecastbody'>
            <div className='weather-forecast-search'>
                <div className='input-container9'>
                    <i className="ri-search-line"></i>
                    <input 
                        type='text' 
                        placeholder='Search' 
                        value={searchCity} 
                        onChange={(e) => setSearchCity(e.target.value)}
                    />
                </div>
                <button type='submit' onClick={handleSearchClick}>Search</button>
            </div>

            <div className='weather-forecastboxmains'>
                <div className='weather-forecastboxmain'>
                    <h6>Weather Data</h6>
                    <h5 className='ri-map-pin-2-fill'>{data?.name}</h5>
                    <h4 className='ri-moon-cloudy-line'>{data?.main?.temp}<sup>o</sup>C</h4>
                    <div className='container'>
                        <div className='row weather-maininsiderow'>
                            <div className='col-3 weather-maininsidebox1'>
                                <h2 className='ri-temp-hot-line'>Temperature Details</h2>
                                <h4 className='ri-moon-cloudy-line'>{data?.main?.temp}<sup>o</sup>C</h4>
                                <p>Feels Like: {data?.main?.feels_like}<sup>o</sup><span className='ri-mist-line'/></p>
                                <p>Ground Level: {data?.main?.grnd_level ? `${data.main.grnd_level} hPa` : 'N/A'}</p>
                                <p>Humidity: {data?.main?.humidity}<sup>%</sup></p>
                                <p>Max Temperature: {data?.main?.temp_max}<sup>o</sup><span className='ri-temp-cold-line'/></p>
                                <p>Min Temperature: {data?.main?.temp_min}<sup>o</sup><span className='ri-temp-cold-line'/></p>
                            </div>
                            <div className='col-3 weather-maininsidebox1'>
                                <h2 className='ri-cloud-windy-line'>Wind Details</h2>
                                <p>Speed: {data?.wind?.speed} m/s</p>
                                <p>Direction: {data?.wind?.deg}°</p>
                            </div>
                            <div className='col-3 weather-maininsidebox1'>
                                <h2 className='ri-sun-foggy-line'>Sunrise & Sunset</h2>
                                <p>Sunrise: {new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}</p>
                                <p>Sunset: {new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}</p>
                            </div>
                            <div className='col-3 weather-maininsidebox1'>
                                <h2 className='ri-heavy-showers-line'>Weather Details</h2>
                                <p>{data?.weather && data.weather[0]?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forecasting;

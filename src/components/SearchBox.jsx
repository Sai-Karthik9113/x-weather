import React, { useState } from "react";
import './SearchBox.css';
import { config } from "../App";
import axios from 'axios';
import Cards from "./Cards";

const SearchBox = () => {
    const [citySelected, setCitySelected] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCityChange = (e) => {
        setCitySelected(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!citySelected) {
            alert("Please enter a city to search");
        } else {
            setLoading(true);
            try {
                const response = await axios.get(`${config.endpoint}`, {
                    params: {
                        key: "eeef7b2c44594f1f923175520243010",
                        q: citySelected
                    },
                })
                setWeatherInfo(response.data.current);
                setLoading(false);
            } catch (error) {
                console.error("Error: ", error);
                alert('Failed to fetch weather data');
                setLoading(false);
                setWeatherInfo(null);
            }
        }
    }
    
    return (
        <div className="container">
            <div className="search-box">
                <input type="text" value={citySelected} onChange={handleCityChange} placeholder="Enter city name" />
                <button onClick={handleSubmit}>
                    Search
                </button>
            </div>
            <div className="weather-display">
                {loading && <p style={{ textAlign: 'center' }}>Loading data...</p>}
                {(!loading && weatherInfo) && (
                    <div className="weather-cards">
                        <Cards title='Temperature' data={`${weatherInfo.temp_c}°C`} />
                        <Cards title='Humidity' data={`${weatherInfo.humidity}%`} />
                        <Cards title='Condition' data={`${weatherInfo.condition.text}`} />
                        <Cards title='Wind Speed' data={`${weatherInfo.wind_kph} kph`} />
                    </div>
                )}
            </div>
        </div>
    )
};

export default SearchBox;
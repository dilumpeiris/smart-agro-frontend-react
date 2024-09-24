import './TemperatureCard.css';


import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";


function TemperatureCard() {

    const [weatherData, setWeatherData] = useState({ temp: "Loading...", condition: "..." });

    useEffect(() => {
        const weatherRef = ref(database, "weatherData");
        onValue(weatherRef, (snapshot) => {
            console.log("Hello");
            const data = snapshot.val();
            if (data) {
                setWeatherData(data);
            }
        });
    }, []);



    return (
        <div className="widget-container">
            <div className="weather-icon">
                <span role="img" aria-label="storm">
                    ⛈️
                </span>
            </div>
            <div className="temp">
                <div className='temp-value'>
                    <h1>{weatherData.temp}</h1>
                    <span><sup>&deg;C</sup></span>
                </div>
                <p>Average Temperature</p>
            </div>
            <div className="location">
                <p>Gathered from 2 sensors</p>
                <p>Next Hour : 29&deg;C</p>
            </div>
        </div>
    );
}

export default TemperatureCard;

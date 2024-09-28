import './TemperatureCard.css';


import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";


function TemperatureCard({ icon, value, sup_sign, desc, number_of_sensors, next_value }) {

    const [weatherData, setWeatherData] = useState({ temp: "...", condition: "..." });

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
                    {icon}
                </span>
            </div>
            <div className="temp">
                <div className='temp-value'>
                    <h1>{value}</h1>
                    <span><sup>{sup_sign}</sup></span>
                </div>
                <p>{desc}</p>
            </div>
            <div className="location">
                <p>Gathered from {number_of_sensors} sensors</p>
                <p>Next Hour : {next_value}{sup_sign}</p>
            </div>
        </div>
    );
}

export default TemperatureCard;

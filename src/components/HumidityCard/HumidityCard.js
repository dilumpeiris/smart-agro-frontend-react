import './HumidityCard.css';
import { FaTachometerAlt, FaSeedling, FaBell, FaNewspaper } from 'react-icons/fa';


function HumidityCard() {
    return (
        <div className="widget-container">
            <div className="weather-icon">
                <span role="img" aria-label="humidity">
                    💧
                </span>
            </div>
            <div className="temp">
                <div className='temp-value'>
                    <h1>70</h1>
                    <span><sub>%</sub></span>
                </div>
                <p>Average Humidity</p>
            </div>
            <div className="location">
                <p>Gathered from 2 sensors</p>
                <p>Next Hour : 81%</p>
            </div>
        </div>
    );
}

export default HumidityCard;

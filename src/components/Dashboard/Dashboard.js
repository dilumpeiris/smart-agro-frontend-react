import './Dashboard.css';
import TemperatureCard from '../TemperatureCard/TemperatureCard'
import HumidityCard from '../HumidityCard/HumidityCard'

function Dashboard() {
    return (
        <div id='dashboard' className='component'>
            <div className="grid-container">
                <div className="grid-item"><TemperatureCard icon={"⛈️"} value={30} sup_sign={"°C"} desc={"Average Temperature"} number_of_sensors={2} next_value={31} /></div>
                <div className="grid-item wide"><HumidityCard /></div>
                <div className="grid-item"><TemperatureCard icon={"☔"} value={80} sup_sign={"%"} desc={"Average Humidity"} number_of_sensors={2} next_value={81} /></div>
                <div className="grid-item"><TemperatureCard icon={"🌱"} value={60} sup_sign={"%"} desc={"Average Soil Moisture Level"} number_of_sensors={2} next_value={81} /></div>
                <div className="grid-item"><TemperatureCard icon={"☀️"} value={90} sup_sign={"%"} desc={"Average System Health : Perfect!"} number_of_sensors={18} next_value={99} /></div>
            </div>

        </div>
    );
}

export default Dashboard;

import './Dashboard.css';
import TemperatureCard from '../TemperatureCard/TemperatureCard'
import HumidityCard from '../HumidityCard/HumidityCard'

function Dashboard() {
    return (
        <div id='dashboard' className='component'>
            <div className="grid-container">
                <div className="grid-item"><TemperatureCard /></div>
                <div className="grid-item"><TemperatureCard /></div>
                <div className="grid-item"><TemperatureCard /></div>
                <div className="grid-item wide"><HumidityCard /></div>
                <div className="grid-item"><TemperatureCard /></div>
            </div>

        </div>
    );
}

export default Dashboard;

import './HumidityCard.css';
import { FaTachometerAlt, FaSeedling, FaBell, FaNewspaper } from 'react-icons/fa';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';


function HumidityCard() {
    return (
        <div className="widget-container">
            <SimpleLineChart />
        </div>
    );
}

export default HumidityCard;

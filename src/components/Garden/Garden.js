import './Garden.css';
import TemperatureCard from '../TemperatureCard/TemperatureCard'
import HumidityCard from '../HumidityCard/HumidityCard'
import { FaSearch, FaPlus } from 'react-icons/fa';
import GardenItem from '../GardenItem/GardenItem';

function Garden() {
    return (
        <div id='garden' className='component active'>
            <div className='garden-header'>
                <FaSearch className='icon' />
                <FaPlus className='icon' />
            </div>
            <div className='garden-body'>
                <GardenItem image={'image'} quantity={'13'} desc={'Chinese Evergarden'} moisture={'81'} />
                <GardenItem image={'image'} quantity={'26'} desc={'Monstera'} moisture={'73'} />
                <GardenItem image={'image'} quantity={'100'} desc={'The Great Red Dragon'} moisture={'88'} />
            </div>
        </div>
    );
}

export default Garden;

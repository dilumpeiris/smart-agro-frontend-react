import './GardenItem.css';
import { FaTachometerAlt, FaSeedling, FaBell, FaNewspaper } from 'react-icons/fa';


function GardenItem({ image, quantity, desc, moisture }) {
    return (
        <div className='garden-item'>
            <div className='garden-item-image'>Image</div>
            <div className='garden-item-quantity'>x{quantity}</div>
            <div className='garden-item-desc'>
                <div>{desc}</div>
            </div>
            <div className='garden-item-moisture'>{moisture}%</div>
        </div>
    );
}

export default GardenItem;

import './Sidebar.css';
import { FaTachometerAlt, FaSeedling, FaBell, FaNewspaper, FaBook, FaCog } from 'react-icons/fa';


function Sidebar({ logo }) {

    const loadComponent = (componentId) => {
        var components = document.querySelectorAll('.component');
        components.forEach(function (component) {
            component.classList.remove('active');
            console.log(component.id);
        });
        // Show the selected component
        var activeComponent = document.getElementById(componentId);
        activeComponent.classList.add('active');
        console.log(componentId);
    };
    return (
        <div className="Sidebar">
            <div className="Sidebar-header">
                <img src={logo} className="Sidebar-logo" alt="logo" />
                <h3>SmartAgro</h3>
            </div>
            <div className="menu">
                <div className="menu-item" onClick={() => loadComponent('dashboard')}>
                    <FaTachometerAlt className='menu-item-icon' />
                    <div className="menu-item-label"><h5>Dashboard</h5></div>
                </div>
                <div className="menu-item" onClick={() => loadComponent('garden')}>
                    <FaSeedling className='menu-item-icon' />
                    <div className="menu-item-label"><h5>Garden</h5></div>
                </div>
                <div className="menu-item">
                    <FaBell className='menu-item-icon' />
                    <div className="menu-item-label"><h5>Notifications</h5></div>
                </div>
                <div className="menu-item">
                    <FaNewspaper className='menu-item-icon' />
                    <div className="menu-item-label"><h5>News</h5></div>
                </div>
                <div className="menu-item">
                    <FaBook className='menu-item-icon' />
                    <div className="menu-item-label"><h5>Library</h5></div>
                </div>
                <div className="menu-item">
                    <FaCog className='menu-item-icon' />
                    <div className="menu-item-label"><h5>Settings</h5></div>
                </div>

            </div>
            <div className="sidebar-footer">
                <h4>hello</h4>
            </div>
            <script src="script.js"></script>
        </div>
    );
}

export default Sidebar;

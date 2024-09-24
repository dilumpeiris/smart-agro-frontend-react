import logo from './logo.svg';
import './App.css';
import './components/Sidebar/Sidebar'
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Garden from './components/Garden/Garden';

function App() {
  return (
    <div className="App">
      <Sidebar logo={logo} />
      <div className='page-left'>
        <Dashboard id="dashboard" className='component active' />
        <Garden id="garden" className='component' />
      </div>
    </div>
  );
}

export default App;

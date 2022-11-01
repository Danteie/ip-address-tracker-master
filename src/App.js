import './App.css';
import arrow from '../src/Assetes/icon-arrow.svg'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>IP Address Tracker</h1>
        <div>
          <input type='text'/>
          <button className='top-button'><img src={arrow}/></button>
        </div>
        
      </div>

    <div className='data'>
      <div>
        <div>IP ADDRESS</div>
        <div>192.212.174.101</div>
      </div>
      <div>
        <div>LOCATION</div>
        <div>192.212.174.101</div> 
      </div>
      <div>
        <div>TIMEZONES</div>
        <div>192.212.174.101</div>
      </div>
      <div>
        <div>ISP</div>
        <div>192.212.174.101</div>
       </div>
    </div>
      
      <div>MAP</div>
    </div>
  );
}

export default App;

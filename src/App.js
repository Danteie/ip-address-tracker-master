import './App.css';
import arrow from '../src/Assetes/icon-arrow.svg'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';

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
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  );
}

export default App;

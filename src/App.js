import './App.css';
import arrow from '../src/Assetes/icon-arrow.svg'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [ip, setIp] = useState();
  const [location, setLocation] = useState();
  const [timeZone, setTimeZone] = useState();
  const [isp, setIsp] = useState();

  function textEdit(event){
    console.log(event);
  }

 function ipAddres(){
  fetch('https://geo.ipify.org/api/v2/country?apiKey=at_VVCIM4N5oYRoW5f2BaSi3ZoyczuAj&ipAddress=62.4.34.21')
    .then(response => response.json())
    .then(data => (
      setIp(data.ip),
      setLocation(data.location.region),
      setTimeZone(data.location.timezone),
      setIsp(data.as.name)
      ))
    
 
 }



  return (

    <div className="App">
      <div className='header'>
        <h1>IP Address Tracker</h1>
        <div>
          <input type='text' onChange={textEdit} placeholder='Search for any IP address or domain'/>
          <button className='top-button' onClick={ipAddres}><img src={arrow}/></button>
        </div>


        <div className='data'>
        <div className='vertical'>
          <div>IP ADDRESS</div>
          <h2>{ip}</h2>
        </div>
        <></>
        <div className='vertical'>
          <div>LOCATION</div>
          <h2>{location}</h2> 
        </div>
        <div className='vertical'>
          <div>TIMEZONES</div>
          <h2>{timeZone}</h2>
        </div>
        <div className='last'>
          <div>ISP</div>
          <h2>{isp}</h2>
        </div>
      </div>
      </div>



      <div className='maps'>
        
   
        <MapContainer center={[51.505, -0.09]} zoom={13} >
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
    </div>
  );
}

export default App;

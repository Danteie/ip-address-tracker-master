import './App.css';
import arrow from '../src/Assetes/icon-arrow.svg'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [ip, setIp] = useState();

  function textEdit(event){
    console.log(event);
  }

  useEffect(() => {

  
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => setIp(data))
  

  console.log(ip);

  }, [ip]);



  return (

    <div className="App">
      <div className='header'>
        <h1>IP Address Tracker</h1>
        <div>
          <input type='text' onChange={textEdit} placeholder='Search for any IP address or domain'/>
          <button className='top-button'><img src={arrow}/></button>
        </div>


        <div className='data'>
        <div className='vertical'>
          <div>IP ADDRESS</div>
          <div></div>
        </div>
        <></>
        <div className='vertical'>
          <div>LOCATION</div>
          <div>192.212.174.101</div> 
        </div>
        <div className='vertical'>
          <div>TIMEZONES</div>
          <div>192.212.174.101</div>
        </div>
        <div className='last'>
          <div>ISP</div>
          <div>192.212.174.101</div>
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

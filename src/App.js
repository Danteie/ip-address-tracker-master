import './App.css';
import arrow from '../src/Assetes/icon-arrow.svg'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [ip, setIp] = useState();
  const [location, setLocation] = useState();
  const [locationGeo, setLocationGeo] = useState("37.38605,-122.08385");
  const [timeZone, setTimeZone] = useState();
  const [isp, setIsp] = useState();
  const [ipSearch, setIpSearch] = useState("8.8.8.8");

  function textEdit(event){
    setIpSearch(ipSearch => ipSearch = event.target.value)
   
  }

 function ipAddres(){
  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_VVCIM4N5oYRoW5f2BaSi3ZoyczuAj&ipAddress=${ipSearch}`)
    .then(response => response.json())
    .then(data => (
      setIp(data.ip),
      setLocation(data.location.region),
      setLocationGeo(data.location.lat + ',' + data.location.lng),
      setTimeZone(data.location.timezone),
      setIsp(data.as.name),
      console.log(data)
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
        
   
        <MapContainer center={[37.38605,-122.08385]} zoom={15} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[37.38605,-122.08385]}/>
             
      
          </MapContainer>
      </div>
    </div>
  );
}

export default App;

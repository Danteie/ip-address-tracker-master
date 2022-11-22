import './App.css';
import arrow from '../src/Assetes/icon-arrow.svg'
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import React, { useState, useEffect } from 'react';
import { icon } from "leaflet";
import L from 'leaflet';
import marker from '../src/Assetes/icon-location.svg'



function App() {

  const [ip, setIp] = useState('8.8.8.8');
  const [location, setLocation] = useState('Brooklyn,NY');
  const [locationGeoLat, setLocationGeoLat] = useState(50);
  const [locationGeoLng, setLocationGeoLng] = useState(34);
  const [timeZone, setTimeZone] = useState("UTC -05:00");
  const [isp, setIsp] = useState('SpaceX');
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
      setLocationGeoLat(data.location.lat),
      setLocationGeoLng(data.location.lng),
      setTimeZone("UTC " + data.location.timezone),
      setIsp(data.as.name)
      ))
 }


 const iconPerson = new L.Icon({
  iconUrl: marker
});

function Map(){
    return(
      <MapContainer center={[locationGeoLat,locationGeoLng]} zoom={13}> 
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker  position={[locationGeoLat,locationGeoLng]} icon={iconPerson}/>
          </MapContainer>
    )
    }
    


  return (

    <div className="App">
      <div className='header'>
        <h1>IP Address Tracker</h1>
        <div className='inputDiv'>
          <input type='text' onChange={textEdit} placeholder='Search for any IP address or domain'/>
          <button className='top-button' onClick={ipAddres}><img src={arrow}/></button>
        </div>


        <div className='data'>
          
        <div className='vertical'>
          <h3>IP ADDRESS</h3>
          <h2>{ip}</h2>
        </div>

        <div className='vertical'>
          <h3>LOCATION</h3>
          <h2>{location}</h2> 
        </div>

        <div className='vertical'>
          <h3>TIMEZONES</h3>
          <h2>{timeZone}</h2>
        </div>

        <div className='last'>
          <h3>ISP</h3>
          <h2>{isp}</h2>
        </div>

      </div>
      </div>
      <div className='maps'>
        <Map/>
      </div>
    </div>
  );
}

export default App;

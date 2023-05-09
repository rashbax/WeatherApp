import React, { useState } from 'react'
import '../ResponsiveApp/RStyle.css'
import RBody from './Uix/RBody'
import Rsearch from './Uix/Rsearch'
import axios from 'axios'
import { useEffect } from 'react'
import LIne from './Uix/LIne'
import Bottom from './Uix/Bottom'

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "10c9febc354435ffc3d32e3a73e7e009";

export default function RMain() {


  const [childState, setChildState] = useState('Samarkand')
  const [weather, setWeather] = useState({})
  

  const weatherApi = async (childState) => {
      const {data} = await axios.get(URL,{
          params:{
              q: childState,
              units: 'metric',
              APPID: API_Key
          }
      })

      return data
  }

  const search = async (e) => {
        
    const data = await weatherApi(childState);
    setWeather(data);

}



useEffect(()=> {
search()
},[])

  function handleChildStateChange(newState){
    setChildState(newState)
  }

  return (
    <>
    <div className='header'>
        <h3 className="header__title">Weather App</h3>
        <Rsearch onStateChange={handleChildStateChange} onStateClick={search}/>
    </div>
    {weather.main ? (
      <>
      <RBody value={weather}/>
    <LIne/>
    <Bottom value={weather}/>
      </>
    ) : <h1 className='loading'>Loading...</h1>}
    
    </>
  )
}

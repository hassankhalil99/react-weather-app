import { useState } from 'react';
import './App.css';
import { WEATHER_URL,WEATHER_API_KEY } from './api';
import CityWeather from './components/city-weather/city-weather.component';
import Search from './components/search/search.component';
import Forecast from './components/forecast/forecast.component';


function App() {
  const [currentWeather,setCurrentWeather] = useState(null);
  const [forecast,setForecast]=useState(null);

  const handleOnSearchChange = async (data)=>{
    console.log(data)
    const [lat,lon] = data.value.split(" ")
    const callWeather = await fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const WeatherData=await callWeather.json()
    //console.log(WeatherData)
    const  forecastFetch = await fetch(
      `${WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastData= await forecastFetch.json()  
    //console.log(forecastData)
    setCurrentWeather({city:data.label,...WeatherData});
    setForecast({city:data.label,...forecastData});
    console.log(currentWeather,forecast)
    

    /*const WEATHER_API = async()=>{

      try{
        
        const WEATHER_API_CALL = await fetch(`${WEATHER_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
        const respone = await WEATHER_API_CALL.json()
        console.log(respone)
      }
      catch(err){
        console.log(err)
      }
*/
    }
   
     
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />    
      {currentWeather && <CityWeather data = {currentWeather}  />  }
      {forecast && <Forecast  data={forecast}/> }
    </div>
  );
}

export default App;

import "./city-weather.css";

const CityWeather = ({data}) => {
   const iconSrc = `icons/${data.weather[0].icon}.png`
  
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-status">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src ={iconSrc} />
      </div>
      <div className="bottom">
        
          <p className="temperature">{Math.round(data.main['temp'])}°</p>
          <div className="details">
            <div className="info">
              <span className="label">Details</span>
            </div>
            <div className="info">
              <span className="label">Feels like </span>
              <span className="value">{Math.round(data.main['feels_like']) }°</span>
            </div>
            <div className="info">
              <span className="label">wind </span>
              <span className="value">{Math.round( data.wind['deg'])}°</span>
            </div>
            <div className="info">
              <span className="label">humidity </span>
              <span className="value">{data.main['humidity']}%</span>
            </div>
            <div className="info">
              <span className="label">pressure </span>
              <span className="value"> {data.main['pressure']} hPa</span>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CityWeather;

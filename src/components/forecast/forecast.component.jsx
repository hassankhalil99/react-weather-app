import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "./forecast.css";
const Forecast = ({ data }) => {
  const Days = [
    "Monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getWeekDay = new Date().getDay();
  const forecastDay = Days.slice(getWeekDay, Days.length).concat(
    Days.slice(0, getWeekDay)
  );
  return (
    <>
      <Accordion allowZeroExpanded>
        <label>Daily</label>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-weather">
                  <img
                    alt="weather-icon"
                    className="small-icon"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDay[idx]}</label>
                  <label className="day"></label>
                  <label className="forecast-description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°/
                    {Math.round(item.main.temp_max)}{" "}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid-daily-details">
                <div className="grid-item-detail">
                  <label>Pressure</label>
                  <label className="pressure">{item.main.pressure}</label>
                </div>
                <div className="grid-item-detail">
                  <label>Humidity</label>
                  <label className="humidity">{item.main.humidity}%</label>
                </div>
                <div className="grid-item-detail">
                  <label>Clouds</label>
                  <label className="clouds">{item.clouds.all}</label>
                </div>
                <div className="grid-item-detail">
                  <label>Wind speed</label>
                  <label className="wind-speed">{item.wind.speed} m/s</label>
                </div>
                <div className="grid-item-detail">
                  <label>Sea level</label>
                  <label className="sea-level">{item.main.sea_level} m</label>
                </div>
                <div className="grid-item-detail">
                  <label>Feels like</label>
                  <label className="feels-like">
                    {Math.round(item.main.feels_like)}°
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;

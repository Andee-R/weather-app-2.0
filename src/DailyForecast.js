import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="DailyForecast">
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon
        code={props.data.condition.icon_url}
        alt={props.data.condition.description}
        size={32}
      />
      <span className="Forecast-temp-max">{maxTemperature()}°</span>{" "}
      <span className="Forecast-temp-min">{minTemperature()}°</span>
    </div>
  );
}

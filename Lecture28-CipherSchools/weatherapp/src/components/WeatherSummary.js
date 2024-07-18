import React from 'react'
import { converToFahrenheit ,getWeatherTypeFromCode} from '../utils/WeatherUtil';

const WeatherSummary = ({currentWeather:{temperature,weatherCode},isCelsius}) => {
  
  const fahrenheitTemp=(converToFahrenheit(temperature));
  return (
    <div >
        <h1>{isCelsius? `${temperature} °C`:`${fahrenheitTemp} °F`} | {` ${getWeatherTypeFromCode(weatherCode)}`}</h1>
    </div>
  )
}

export default WeatherSummary;
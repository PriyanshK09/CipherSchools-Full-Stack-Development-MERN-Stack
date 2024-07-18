import React from 'react'
import { converToFahrenheit, getWeatherTypeFromCode } from '../utils/WeatherUtil';

const dateFormatter=new Intl.DateTimeFormat("en-IN",{month:"short",day:"numeric",year:"2-digit",})



const WeatherRow = ({weather:{temperature,maxTemp,minTemp,weatherCode,date},isCelsius}) => {

  const dateformat=(date)=>dateFormatter.format(date);

  return (
        <tr>
            <td>{`${dateformat(date)}`}</td>
            {isCelsius?<td>H: {`${maxTemp} °C`} | L: {`${minTemp} °C`}</td>:<td>H: {`${converToFahrenheit(maxTemp)} °F`} | L: {`${converToFahrenheit(minTemp)} °F`}</td>}
            <td>
            {` ${getWeatherTypeFromCode(weatherCode)}`}
            </td>
        </tr>

  )
}

export default WeatherRow;
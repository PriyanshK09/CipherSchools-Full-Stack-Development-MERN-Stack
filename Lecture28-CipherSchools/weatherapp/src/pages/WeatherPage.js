import React, { useEffect, useState } from 'react'
import WeatherSummary from '../components/WeatherSummary';
import WeatherRow from '../components/WeatherRow';
import getWeather from '../api/WeatherApi';

const fetchCodinates =  (callback) =>{
    navigator.geolocation.getCurrentPosition(
        ({coords:{latitude,longitude}})=>{
            callback(latitude,longitude)
        },(error)=>console.log(error)
    );
}



const WeatherPage = () => {
    const [todayWeather,setTodayWeather] =useState({});
    const [weekWeather,setWeekWeather] =useState([]);
    const [isCelsius,setIsCelsius]  =useState(false);
    const isDay=todayWeather.isDay?true:false;
    useEffect(()=>{
        fetchCodinates(async (latitude,longitude)=>{
            const weatherInfo=await getWeather({latitude:latitude,longitude:longitude});
            console.log(weatherInfo);
            convertToStateVariable(weatherInfo);
        })
    },[])   

    const convertToStateVariable=(tempWeekWeather)=>{
        try{
            let fetchedWeatherInfo=[];
            for(let i=0;i<tempWeekWeather.daily.time.length;i++){
                fetchedWeatherInfo.push({
                    date:new Date(tempWeekWeather.daily.time[i]),
                    maxTemp:tempWeekWeather.daily.temperature_2m_max[i],
                    minTemp:tempWeekWeather.daily.temperature_2m_min[i],
                    weatherCode:tempWeekWeather.daily.weathercode[i],
                })
            }
            setWeekWeather(fetchedWeatherInfo);

            let currentWeather=tempWeekWeather.current_weather;
            currentWeather.time=new Date(currentWeather.time);
            currentWeather.isDay=currentWeather.is_day==1?true:false;
            delete currentWeather.is_day;
            currentWeather.weatherCode=currentWeather.weathercode;
            delete currentWeather.weathercode;
            setTodayWeather(currentWeather);
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className={isDay?"app":"app dark"}>
        <h1 >Weather App</h1>
        <button className="ui icon button" style={{float: 'right'}} 
        onClick={()=>setIsCelsius(!isCelsius)}
        >
        {isCelsius?"°F":"°C"} 
        </button>
        <div>
            <WeatherSummary currentWeather={todayWeather} isCelsius={isCelsius}/>
            <table className={isDay?"ui very basic table":"ui very basic table dark"}>
                <thead className="table-custom" >
                    <tr >
                        <th style={{color: 'pink',fontSize: "25px"}}>Date</th>
                        <th style={{color: 'pink',fontSize: "25px"}}>Temperature</th>
                        <th style={{color: 'pink',fontSize: "25px"}}>Type</th>
                    </tr>
                </thead>
                <tbody className="table-custom">
                    {
                        weekWeather.map((weather)=>
                            <WeatherRow weather={weather} isCelsius={isCelsius} key={weather.date}/>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default WeatherPage;
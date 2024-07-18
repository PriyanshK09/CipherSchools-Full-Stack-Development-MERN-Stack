import axios from 'axios'
const WEATHER_API_URL="https://api.open-meteo.com/v1/forecast"

const convertDate=(date)=>{
    const year=date.getFullYear();
    const month=date.getMonth()+1<=9?`0${date.getMonth()+1}`:date.getMonth()+1;
    const day=date.getDate()<=9?`0${date.getDate()}`:date.getDate();

    return `${year}-${month}-${day}`;
}

const getWeather=async ({latitude,longitude})=>{
    const currentDate=new Date();
    const startDate=new Date(currentDate.setDate(currentDate.getDate()+1));
    const  {data:weatherInfo}=await axios.get(WEATHER_API_URL,{
        params:{
            latitude,
            longitude,
            current_weather:true,
            timezone:'IST',
            daily:["temperature_2m_max","temperature_2m_min","weathercode"],
            start_date:convertDate(startDate),
            end_date:convertDate(new Date(startDate.setDate(startDate.getDate()+7))),
        }
    })
    return weatherInfo;
}

export default getWeather;
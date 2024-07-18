const converToFahrenheit=(CelsiusTemp)=>
    ((CelsiusTemp*9)/5+32).toFixed(1);



const wCode = new Map();
wCode.set(0,"Clear")
wCode.set(1, "Mostly Clear");
wCode.set(2, "Partly Cloudy");
wCode.set(3, "Cloudy");
wCode.set(45, "Fog");
wCode.set(48, "Freezing Fog");
wCode.set(51, "Light Drizzle");
wCode.set(53, "Drizzle");
wCode.set(55, "Heavy Drizzle");
wCode.set(56, "Light Freezing Drizzle");
wCode.set(57, "Freezing Drizzle");
wCode.set(61, "Light Rain");
wCode.set(63, "Rain");
wCode.set(65, "Heavy Rain");
wCode.set(66, "Light Freezing Rain");
wCode.set(67, "Freezing Rain");
wCode.set(71, "Light Snow");
wCode.set(73, "Snow");
wCode.set(75, "Heavy Snow");
wCode.set(77, "Snow Grains");
wCode.set(80, "Light Rain Shower");
wCode.set(81, "Rain Shower");
wCode.set(82, "Heavy Rain Shower");
wCode.set(85, "Snow Shower");
wCode.set(86, "Heavy Snow Shower");
wCode.set(95, "Thunderstorm");
wCode.set(96, "Hailstorm");
wCode.set(99, "Heavy Hailstorm");




const getWeatherType = (code)=>{
    return wCode.get(code);
}

const getWeatherTypeFromCode = (code)=>{
    return wCode.get(code);
}


export { converToFahrenheit, getWeatherTypeFromCode ,getWeatherType}

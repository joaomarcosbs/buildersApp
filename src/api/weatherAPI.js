import React, {useState, useEffect} from "react";

const API_KEY = '7bc78d56620a4aca98d172149220705';

async function getWeatherData(location){
    var weather;
    //var API_KEY = '7bc78d56620a4aca98d172149220705';

    
    try {
        const requestWeather = async () => {
            const req = await fetch('https://api.weatherapi.com/v1/current.json?key=' + API_KEY + '&q=' + location.latitude + ',' + location.longitude + '&aqi=no');
            const data = await req.json();
            
            weather = data;
            console.log(weather);
        }

        requestWeather();
    } catch (error) {
        console.log(error);
    }

    console.log(weather);
    return weather;
    
};



export default getWeatherData;
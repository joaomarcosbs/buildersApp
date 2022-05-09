import React, {useState, useEffect} from "react";
import { View, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import GetLocation from "react-native-get-location";
import getWeatherData from "../../api/weatherAPI";
import styles from "./styles";

const API_KEY = "7bc78d56620a4aca98d172149220705";

const Home = () => {

    const [ weather, setWeather ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ city, setCity ] = useState([]);
    const [ state, setState ] = useState([]);
    const [ country, setCountry ] = useState([]);
    const [ lastUpdated, setLastUpdated ] = useState([]);
    const [ icon, setIcon ] = useState([]);
    const [ conditionText, setConditionText ] = useState([]);
    const [ feelslike, setFeelslike ] = useState([]);
    const [ humidity, setHumidity ] = useState([]);
    const [ rainMili, setRainMili ] = useState([]);
    const [ temp, setTemp ] = useState([]);
    const [ visionDist, setVisionDist ] = useState([]);
    const [ windDirection, setWindDirection ] = useState([]);
    const [ windSpeed, setWindSpeed ] = useState([]);
    //const [ location, setLocation ] = useState([]);
    

    async function refresh(){
        setLoading(true);
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 2000,
        }).then(location => {
            getWeatherData(location);
            setLoading(false);
        });

    };
    
    async function getWeatherData(location){
        
        try {
            const requestWeather = async () => {
                const req = await fetch('https://api.weatherapi.com/v1/current.json?key=' + API_KEY + '&q=' + location.latitude + ',' + location.longitude + '&aqi=no');
                const data = await req.json();
                
                setCity(data.location.name);
                setState(data.location.region);
                setCountry(data.location.country);
                setLastUpdated(data.last_updated);
                //setIcon(data.condition.icon);
                //setConditionText(data.condition.text);
                setFeelslike(data.feelslike_c);
                setHumidity(data.humidity);
                setRainMili(data.precip_mm);
                setTemp(data.temp_c);
                setVisionDist(data.vis_km);
                setWindDirection(data.wind_dir);
                setWindSpeed(data.wind_kph);

            }
    
            requestWeather();
        } catch (error) {
            console.log(error);
        }
            
        return weather;
        
    };
    
    //console.log('----------');

    useEffect(() => {
        refresh();
    }, []);

    return(
        <View style = {styles.container}>

            {loading && 
                <View style = {styles.loadingArea}>
                    <ActivityIndicator size = 'large' />
                    <Text style = {styles.loadingText}>Loading...</Text>
                </View>
            }
            {loading == false &&
                <>
                    <Text style = {styles.text}>{city}</Text>
                    <Text style = {styles.text}>{state}</Text>
                    <Text style = {styles.text}>{country}</Text>

                    <TouchableOpacity onPress={() => refresh()}>
                        <Text style = {styles.text}>REFRESH</Text>
                    </TouchableOpacity>
                </>
            }


            
        </View>
    );
};

export default Home;
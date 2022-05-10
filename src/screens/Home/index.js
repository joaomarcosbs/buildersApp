import React, {useState, useEffect} from "react";
import { View, Text, ActivityIndicator, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import GetLocation from "react-native-get-location";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
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
                setLastUpdated(data.location.localtime);
                setIcon(data.current.condition.icon);
                setConditionText(data.current.condition.text);
                setFeelslike(data.current.feelslike_c);
                setHumidity(data.current.humidity);
                setRainMili(data.current.precip_mm);
                setTemp(data.current.temp_c);
                setVisionDist(data.current.vis_km);
                setWindDirection(data.current.wind_dir);
                setWindSpeed(data.current.wind_kph);
                
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
        <SafeAreaView style = {styles.container}>

            {loading && 
                <View style = {styles.loadingArea}>
                    <ActivityIndicator size = 'large' />
                    <Text style = {styles.loadingText}>Loading...</Text>
                </View>
            }
            {loading == false &&
                <>
                    <View style = {styles.locationContainer}>
                        <Text style = {styles.locationCountry}>{country}</Text>
                        <Text style = {styles.locationState}>{state}</Text>
                        <Text style = {styles.locationCity}>{city}</Text>
                    </View>

                    <View style = {styles.infoTop}>
                        <View style = {styles.tempContainer}>
                            <Text style = {styles.tempNumb}>{Math.round(temp)}°</Text>
                            <Text style = {styles.tempCity}>{conditionText}</Text>
                        </View>
                        <View style = {styles.conditionContainer}>
                            <Image style = {styles.conditionIcon} source = {{uri: 'https:' + icon}}/>
                        </View>
                    </View>

                    <View style = {styles.lastUpdatedContainer}>
                        <Text style = {styles.lastUpdatedText}>Last Updated: {lastUpdated}</Text>
                        <TouchableOpacity onPress={() => refresh()}>
                            <EvilIcons  name = "refresh" size = {30} color = "black"/>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.tilesContainer}>
                        <View style = {styles.tile}>
                            <Text style = {styles.tileText}>{Math.round(feelslike)}°</Text>
                            <Text style = {styles.tileText}>Feels Like</Text>
                        </View>
                        <View style = {styles.tile}>
                            <Text style = {styles.tileText}>{humidity}%</Text>
                            <Text style = {styles.tileText}>Humidity</Text>
                        </View>
                        <View style = {styles.tile}>
                            <Text style = {styles.tileText}>{rainMili}mm</Text>
                            <Text style = {styles.tileText}>Rain Millimiters</Text>
                        </View>
                        <View style = {styles.tile}>
                            <Text style = {styles.tileText}>{visionDist}M</Text>
                            <Text style = {styles.tileText}>View Distance</Text>
                        </View>
                        <View style = {styles.tile}>
                            <Text style = {styles.tileText}>{windSpeed} Km/h</Text>
                            <Text style = {styles.tileText}>Wind Speed</Text>
                        </View>
                        <View style = {styles.tile}>
                            <Text style = {styles.tileText}>{windDirection}</Text>
                            <Text style = {styles.tileText}>Wind Direction</Text>
                        </View>
                    </View>
                    
                </>
            }

        </SafeAreaView>
    );
};

export default Home;
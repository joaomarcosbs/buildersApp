# buildersApp
 

<h3>Weather App made in React Native </h3>

React Native version: 0.68.1

Node.js version: 14.18.1

NPM version: 8.1.0



![Simulator Screen Shot - iPhone 12 - 2022-05-10 at 05 15 37](https://user-images.githubusercontent.com/23336618/167582455-96ea46b9-86f5-47e9-a30a-5cfa445b8716.png)


The API used was Weather API, a free API with a lot of resources: https://www.weatherapi.com/

<h3>App functions:</h3>

Function  | What it does
----------|-------
refresh( ) | updates device location and send to function that connects with Weather API
getWeatherData(location)| receive device location as parameter from refresh( ) function and send a request to Weather API with api key and the location that weather data need to be catched, as soon as the request reaches the api, it returns a JSON file with all the data, this data is setted to the consts used to store the data
useEffect( ) | this hook is used to call refresh( ) function for the first time, this way the receive the information automatically when opens the app

The user interface was styled with the native StyleSheet component from React Native.

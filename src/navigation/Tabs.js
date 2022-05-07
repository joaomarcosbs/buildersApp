import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home';
import Forecast from '../screens/Forecast';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = {"Home"} component = {Home} />
            <Tab.Screen name = {"Forecast"} component = {Forecast} />
        </Tab.Navigator>
    );
};

export default Tabs;
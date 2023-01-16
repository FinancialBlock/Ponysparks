import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Cameras from "../components/Cameras";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={Cameras} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
/*





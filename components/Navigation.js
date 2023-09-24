import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./LoginScreen"; // Import trang đăng nhập từ tệp LoginScreen.js
import HomeScreen from "./HomeScreen"; // Import trang chủ
import RegisterScreen from "./RegisterScreen"; // Import trang đăng ký
import QRCodeScannerScreen from "./QRCodeScannerScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen name="QRCodeScanner" component={QRCodeScannerScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

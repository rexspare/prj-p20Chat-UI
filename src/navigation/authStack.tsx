import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { LandingScreen } from '../screens';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={SCREENS.LANDING} component={LandingScreen} />
            </Stack.Navigator>
    )
}

export default AuthStack

//p20chain erc20
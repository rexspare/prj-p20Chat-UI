import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { LandingScreen, OtpScreen, PhoneScreen, ProfileImageScreen, ProfileNameScreen } from '../screens';

type InitialNavigationStackParamList = {
    [SCREENS.LANDING]: undefined;
    [SCREENS.PHONE]: undefined;
    [SCREENS.OTP]: undefined;
    [SCREENS.PROFILE_NAME]: undefined;
    [SCREENS.PROFILE_IMAGE]: undefined;
};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
        }}>
            <Stack.Screen name={SCREENS.LANDING} component={LandingScreen} />
            <Stack.Screen name={SCREENS.PHONE} component={PhoneScreen} />
            <Stack.Screen name={SCREENS.OTP} component={OtpScreen} />
            <Stack.Screen name={SCREENS.PROFILE_NAME} component={ProfileNameScreen} />
            <Stack.Screen name={SCREENS.PROFILE_IMAGE} component={ProfileImageScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack

//p20chain erc20
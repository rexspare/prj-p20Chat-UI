import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { FaceSetupScreen, LandingScreen, OtpScreen, PhoneScreen, ProfileImageScreen, ProfileNameScreen, SplashScreen } from '../screens';

type InitialNavigationStackParamList = {
    [SCREENS.SPLASH]: undefined;
    [SCREENS.LANDING]: undefined;
    [SCREENS.PHONE]: undefined;
    [SCREENS.OTP]: undefined;
    [SCREENS.PROFILE_NAME]: undefined;
    [SCREENS.PROFILE_IMAGE]: undefined;
    [SCREENS.FACE_SETUP]: undefined;
};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
        }}>
            <Stack.Screen name={SCREENS.SPLASH} component={SplashScreen} />
            <Stack.Screen name={SCREENS.LANDING} component={LandingScreen}
                options={{
                    animation: 'fade'
                }}
            />
            <Stack.Screen name={SCREENS.PHONE} component={PhoneScreen} />
            <Stack.Screen name={SCREENS.OTP} component={OtpScreen} />
            <Stack.Screen name={SCREENS.PROFILE_NAME} component={ProfileNameScreen} />
            <Stack.Screen name={SCREENS.PROFILE_IMAGE} component={ProfileImageScreen} />
            <Stack.Screen name={SCREENS.FACE_SETUP} component={FaceSetupScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack

//p20chain erc20
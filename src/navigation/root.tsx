import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import AuthStack from './authStack';
import AppStack from './appStack';


type InitialNavigationStackParamList = {
    [SCREENS.AUTH]: undefined;
    [SCREENS.APP]: undefined;
};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={SCREENS.AUTH} component={AuthStack} />
                <Stack.Screen name={SCREENS.APP} component={AppStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root
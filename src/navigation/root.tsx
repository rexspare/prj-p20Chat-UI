import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import AuthStack from './authStack';
import AppStack from './appStack';

const Stack = createNativeStackNavigator();
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

//p20chain erc20
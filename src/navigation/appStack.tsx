import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import {

} from '../screens';
import BottomStack from './bottomTab';

export type InitialNavigationStackParamList = {
    [SCREENS.HOME]: undefined;

};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();


const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
        }}>
            <Stack.Screen name={SCREENS.HOME} component={BottomStack} />
        </Stack.Navigator>
    )
}

export default AppStack
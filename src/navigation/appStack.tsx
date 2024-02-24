import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { ChatScreen, EditProfileScreen, NewsDetailScreen, SettingMainScreen } from '../screens';
import BottomStack from './bottomTab';

export type InitialNavigationStackParamList = {
    [SCREENS.HOME]: undefined;
    [SCREENS.CHAT]: undefined;
    [SCREENS.NEWS_DETAIL]: undefined;
    [SCREENS.SETTING]: undefined;
    [SCREENS.EDIT_PROFILE]: undefined;
};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();


const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: 'fade_from_bottom'
        }}>
            <Stack.Screen name={SCREENS.HOME} component={BottomStack} />
            <Stack.Screen name={SCREENS.CHAT} component={ChatScreen} />
            <Stack.Screen name={SCREENS.NEWS_DETAIL} component={NewsDetailScreen} />
            <Stack.Screen name={SCREENS.SETTING} component={SettingMainScreen} />
            <Stack.Screen name={SCREENS.EDIT_PROFILE} component={EditProfileScreen} />
        </Stack.Navigator>
    )
}

export default AppStack
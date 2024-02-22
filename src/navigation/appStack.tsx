import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { ChatScreen, HistorySettingScreen, NewsDetailScreen, SendScreen, TransactionHistoryScreen } from '../screens';
import BottomStack from './bottomTab';

export type InitialNavigationStackParamList = {
    [SCREENS.HOME]: undefined;
    [SCREENS.CHAT]: undefined;
    [SCREENS.NEWS_DETAIL]: undefined;
    [SCREENS.SEND]: undefined;
    [SCREENS.TRANSACTION_HISTORY]: undefined;
    [SCREENS.HISTORY_SETTING]: undefined;
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
            <Stack.Screen name={SCREENS.SEND} component={SendScreen} />
            <Stack.Screen name={SCREENS.TRANSACTION_HISTORY} component={TransactionHistoryScreen} />
            <Stack.Screen name={SCREENS.HISTORY_SETTING} component={HistorySettingScreen} />
        </Stack.Navigator>
    )
}

export default AppStack
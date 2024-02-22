import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { HistorySettingScreen, RecieveScreen, SendScreen, SendSuccessScreen, SendSummaryScreen, TransactionHistoryScreen, WalletScreen } from '../screens';

export type InitialNavigationStackParamList = {
    [SCREENS.WALLET_HOME]: undefined;
    [SCREENS.SEND]: undefined;
    [SCREENS.SEND_SUMMARY]: undefined;
    [SCREENS.SEND_SUCCESS]: undefined;
    [SCREENS.TRANSACTION_HISTORY]: undefined;
    [SCREENS.HISTORY_SETTING]: undefined;
    [SCREENS.HISTORY_SETTING]: undefined;
    [SCREENS.RECIEVE]: undefined;
};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();


export const WalletStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={SCREENS.WALLET_HOME} component={WalletScreen} />
            <Stack.Screen name={SCREENS.SEND} component={SendScreen} />
            <Stack.Screen name={SCREENS.SEND_SUMMARY} component={SendSummaryScreen} />
            <Stack.Screen name={SCREENS.SEND_SUCCESS} component={SendSuccessScreen} />
            <Stack.Screen name={SCREENS.TRANSACTION_HISTORY} component={TransactionHistoryScreen} />
            <Stack.Screen name={SCREENS.HISTORY_SETTING} component={HistorySettingScreen} />
            <Stack.Screen name={SCREENS.RECIEVE} component={RecieveScreen} />
        </Stack.Navigator>
    )
}




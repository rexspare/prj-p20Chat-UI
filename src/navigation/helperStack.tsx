import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import {
    AboutP20Screen,
    AdvancedSettingScreen,
    BridgeScreen,
    ChangePasswordScreen,
    ConfirmPasswordScreen,
    ContactSettingScreen,
    GeneralSettingsScreen,
    HomeScreen,
    NetworkSettingScreen,
    RecieveScreen,
    SecuritSettingScreen,
    SendScreen,
    SendSummaryScreen,
    SettingsScreen,
    SuccessScreen,
    SwapScreen,
    SwapSuccessScreen,
    TokenDetailScreen
} from '../screens';

const Stack = createNativeStackNavigator();


export const WalletStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
            <Stack.Screen name={SCREENS.TOKEN_DETAIL} component={TokenDetailScreen} />
            <Stack.Screen name={SCREENS.RECIEVE} component={RecieveScreen} />
            <Stack.Screen name={SCREENS.SEND} component={SendScreen} />
            <Stack.Screen name={SCREENS.SEND_SUMMARY} component={SendSummaryScreen} />
            <Stack.Screen name={SCREENS.BRIDGE} component={BridgeScreen} />
            <Stack.Screen name={SCREENS.SUCCESS} component={SuccessScreen} />
        </Stack.Navigator>
    )
}

const SStack = createNativeStackNavigator();


export const SettingStack = () => {
    return (
        <SStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <SStack.Screen name={SCREENS.SETTING_HOME} component={SettingsScreen} />
            <SStack.Screen name={SCREENS.GENERAL_SETTINGS} component={GeneralSettingsScreen} />
            <SStack.Screen name={SCREENS.ADVANCED_SETTINGS} component={AdvancedSettingScreen} />
            <SStack.Screen name={SCREENS.SECURITY_SETTINGS} component={SecuritSettingScreen} />
            <SStack.Screen name={SCREENS.CHANGE_PASSWORD} component={ChangePasswordScreen} />
            <SStack.Screen name={SCREENS.ABOUT_P20} component={AboutP20Screen} />
            <SStack.Screen name={SCREENS.NETWORK_SETTING} component={NetworkSettingScreen} />
            <SStack.Screen name={SCREENS.CONTACT_SETTING} component={ContactSettingScreen} />
            <SStack.Screen name={SCREENS.COMFIRM_PASSWORD} component={ConfirmPasswordScreen} />
        </SStack.Navigator>
    )
}

const SwStack = createNativeStackNavigator();


export const SwapStack = () => {
    return (
        <SwStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <SwStack.Screen name={SCREENS.SWAP_HOME} component={SwapScreen} />
            <SwStack.Screen name={SCREENS.SWAP_SUCCESS} component={SwapSuccessScreen} />
        </SwStack.Navigator>
    )
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import {
    ConfirmPhaseScreen,
    CreatePasswordScreen,
    HelpImproveScreen,
    LandingScreen,
    RecoveryPhaseScreen,
    WalletSucessScreen,
    InstallCompleteScreen
} from '../screens';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={SCREENS.LANDING} component={LandingScreen} />
            <Stack.Screen name={SCREENS.HELP_IMPROVE} component={HelpImproveScreen} />
            <Stack.Screen name={SCREENS.CREATE_PASSWORD} component={CreatePasswordScreen} />
            <Stack.Screen name={SCREENS.RECOVERY_PHASE} component={RecoveryPhaseScreen} />
            <Stack.Screen name={SCREENS.CONFIRM_PHRASE} component={ConfirmPhaseScreen} />
            <Stack.Screen name={SCREENS.WALLET_SUCCES} component={WalletSucessScreen} />
            <Stack.Screen name={SCREENS.INSTALL_COMPLETE} component={InstallCompleteScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack

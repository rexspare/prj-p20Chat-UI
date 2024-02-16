import React from 'react';
import { SCREENS } from '../assets/constants';
import {
    HomeScreen,
    InstallCompleteScreen,
    SettingsScreen,
    SwapScreen
} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, SettingIcon, SwapIcon } from '../assets/icons';
import { BodyText, Label } from '../components';
import useAppConfig from '../hooks/AppConfig';
import { View } from 'react-native';
import { COLORS, FONTS, normalize } from '../assets/stylesGuide';
import { SettingStack, SwapStack, WalletStack } from './helperStack';

const Tab = createBottomTabNavigator()

const AppStack = () => {
    const { lang } = useAppConfig()

    const titleStyles = {
        marginVertical: 0,
        fontSize: normalize(10),
        fontFamily: FONTS.MEDIUM
    }

    const getActiveColor = (focused: boolean) => {
        return focused ? COLORS.PRIMARY : COLORS.TAB
    }


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                paddingTop: 5
            }
        }}>
            <Tab.Screen name={SCREENS.WALLET} component={WalletStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon width={20} height={20} fill={getActiveColor(focused)} />

                    ),
                    tabBarLabel: ({ focused }) => <BodyText
                        style={{
                            ...titleStyles,
                            color: getActiveColor(focused)
                        }} >{lang['_44']}</BodyText>,
                }}
            />
            <Tab.Screen name={SCREENS.SWAP} component={SwapStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SwapIcon width={20} height={20} fill={getActiveColor(focused)} />
                    ),
                    tabBarLabel: ({ focused }) => <BodyText
                        style={{
                            ...titleStyles,
                            color: getActiveColor(focused)
                        }} >{lang['_45']}</BodyText>,
                }}
            />
            <Tab.Screen name={SCREENS.SETTINGS} component={SettingStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SettingIcon width={20} height={20} fill={getActiveColor(focused)} />
                    ),
                    tabBarLabel: ({ focused }) => <BodyText
                        style={{
                            ...titleStyles,
                            color: getActiveColor(focused)
                        }} >{lang['_46']}</BodyText>,
                }}
            />
        </Tab.Navigator>
    )
}

export default AppStack

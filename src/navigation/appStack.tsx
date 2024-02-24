import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { BlockedContactScreen, ChatScreen, ChatSettingScreen, DisplaySettingScreen, EditProfileScreen, LanguageSettingScreen, NewsDetailScreen, NotificationSettingScreen, SettingMainScreen, WallpaperSettingScreen } from '../screens';
import BottomStack from './bottomTab';

export type InitialNavigationStackParamList = {
    [SCREENS.HOME]: undefined;
    [SCREENS.CHAT]: undefined;
    [SCREENS.NEWS_DETAIL]: undefined;
    [SCREENS.SETTING]: undefined;
    [SCREENS.EDIT_PROFILE]: undefined;
    [SCREENS.DISPLAY_SETTING]: undefined;
    [SCREENS.DISPLAY_SETTING]: undefined;
    [SCREENS.CHAT_SETTING]: undefined;
    [SCREENS.LANG_SETTING]: undefined;
    [SCREENS.NOTIFICATION_SETTING]: undefined;
    [SCREENS.WALLPAPER_SETTING]: undefined;
    [SCREENS.BLOCKED_CONTACTS]: undefined;
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
            <Stack.Screen name={SCREENS.DISPLAY_SETTING} component={DisplaySettingScreen} />
            <Stack.Screen name={SCREENS.CHAT_SETTING} component={ChatSettingScreen} />
            <Stack.Screen name={SCREENS.WALLPAPER_SETTING} component={WallpaperSettingScreen} />
            <Stack.Screen name={SCREENS.NOTIFICATION_SETTING} component={NotificationSettingScreen} />
            <Stack.Screen name={SCREENS.BLOCKED_CONTACTS} component={BlockedContactScreen} />
            <Stack.Screen name={SCREENS.LANG_SETTING} component={LanguageSettingScreen} />
        </Stack.Navigator>
    )
}

export default AppStack
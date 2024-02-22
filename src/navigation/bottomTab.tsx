import React from 'react';
import { SCREENS } from '../assets/constants';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BodyText, If, Label } from '../components';
import useAppConfig from '../hooks/AppConfig';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, hp, normalize } from '../assets/stylesGuide';
import { hasNotch, isIOS } from '../utils/myUtils';
import { CallScreen, ContactScreen, MessagesScreen, NewsScreen, WalletScreen } from '../screens';
import { TabCall, TabContact, TabMessage, TabNews, TabWallet } from '../assets/icons';
import { WalletStack } from './helperStack';

type InitialNavigationStackParamList = {
    [SCREENS.MESSAGES]: undefined;
    [SCREENS.CALLS]: undefined;
    [SCREENS.WALLET]: undefined;
    [SCREENS.CONTACTS]: undefined;
    [SCREENS.NEWS]: undefined;
};

const Tab = createBottomTabNavigator<InitialNavigationStackParamList>();

const BottomStack = () => {
    const { lang, theme } = useAppConfig()

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}
            tabBar={props => <CustomTabBar {...props} />}
        >
            <Tab.Screen name={SCREENS.MESSAGES} component={MessagesScreen} options={{ title: lang['_23'] }} />
            <Tab.Screen name={SCREENS.CALLS} component={CallScreen} options={{ title: lang['_24'] }} />
            <Tab.Screen name={SCREENS.WALLET} component={WalletStack} options={{ title: lang['_25'] }} />
            <Tab.Screen name={SCREENS.CONTACTS} component={ContactScreen} options={{ title: lang['_26'] }} />
            <Tab.Screen name={SCREENS.NEWS} component={NewsScreen} options={{ title: lang['_27'] }} />
        </Tab.Navigator>
    )
}


const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    const { theme } = useAppConfig()

    const getIcon = (route: string, focused: boolean) => {
        switch (route) {
            case SCREENS.MESSAGES:
                return <TabMessage
                    fill={focused ? COLORS.SECONDARY : theme.TAB_ICON}
                    width={hp(2.25)}
                    height={hp(2.25)}
                />
            case SCREENS.CALLS:
                return <TabCall
                    fill={focused ? COLORS.SECONDARY : theme.TAB_ICON}
                    width={hp(2.25)}
                    height={hp(2.25)}
                />
            case SCREENS.WALLET:
                return <TabWallet
                    fill={focused ? COLORS.SECONDARY : theme.TAB_ICON}
                    width={hp(5.9)}
                    height={hp(5.9)}
                />
            case SCREENS.CONTACTS:
                return <TabContact
                    fill={focused ? COLORS.SECONDARY : theme.TAB_ICON}
                    width={hp(2.25)}
                    height={hp(2.25)}
                />
            case SCREENS.NEWS:
                return <TabNews
                    fill={focused ? COLORS.SECONDARY : theme.TAB_ICON}
                    width={hp(2.25)}
                    height={hp(2.25)}
                />

            default:
                return <TabMessage
                    fill={focused ? COLORS.SECONDARY : theme.TAB_ICON}
                    width={hp(2.25)}
                    height={hp(2.25)}
                />
        }
    }

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: theme.BACKGROUND,
            overflow: 'hidden',
            paddingBottom: (isIOS() && hasNotch()) ? hp(3) : hp(0.5),
            paddingTop: hp(0.5),
            borderTopWidth: 1,
            borderColor: theme.BORDER,
            paddingHorizontal: '3%',
        }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }

                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            backgroundColor: theme.BACKGROUND,
                            paddingVertical: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {getIcon(descriptors[route.key].route.name, isFocused)}

                        <If condition={descriptors[route.key].route.name != SCREENS.WALLET}>
                            <BodyText style={{
                                fontSize: FONT_SIZE._14,
                                fontFamily: FONTS.SEMI_BOLD,
                                color: isFocused ? COLORS.SECONDARY : theme.TAB_ICON,
                                letterSpacing: -0.5,
                                marginTop: hp(0.5),
                            }}>{options.title}</BodyText>
                        </If>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomStack

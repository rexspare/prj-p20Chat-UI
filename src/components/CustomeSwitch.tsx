import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ViewStyle } from 'react-native';
import { COLORS, hp, normalize } from '../assets/stylesGuide';
import { ITHEME } from '../models/config';
import useAppConfig from '../hooks/AppConfig';

interface customeSwicthProps {
    isEnabled: boolean;
    setIsEnabled: Function;
    type2?: boolean;
    style?: ViewStyle;
}

const CustomSwitch: React.FC<customeSwicthProps> = (props) => {
    const { isEnabled = false, setIsEnabled = () => { }, type2 = false, style } = props
    const { theme } = useAppConfig()
    const styles = styles_(theme, isEnabled)

    const switchAnimation = useRef(new Animated.Value(0)).current;

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        Animated.timing(switchAnimation, {
            toValue: isEnabled ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const switchTranslateX = switchAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [hp(0.3), hp(2.3)],
    });

    return (
        <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
            <View style={[styles.switchContainer, style]}>
                <Animated.View
                    style={[
                        styles.switchHandle,
                        { transform: [{ translateX: switchTranslateX }], },
                    ]}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles_ = (theme: ITHEME, isEnabled: boolean) => StyleSheet.create({
    switchContainer: {
        width: hp(5.53),
        height: hp(3.44),
        borderRadius: hp(3.44),
        backgroundColor: isEnabled ? COLORS.SECONDARY : theme.BORDER,
        justifyContent: 'center',
    },
    switchHandle: {
        width: hp(2.92),
        height: hp(2.92),
        borderRadius: hp(2.92),
        backgroundColor: COLORS.WHITE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
});

export default CustomSwitch;

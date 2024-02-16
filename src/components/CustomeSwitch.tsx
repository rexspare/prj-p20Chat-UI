import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ViewStyle } from 'react-native';
import { COLORS, normalize } from '../assets/stylesGuide';

interface customeSwicthProps {
    isEnabled: boolean;
    setIsEnabled: Function;
    type2?: boolean;
    style?: ViewStyle;
}

const CustomSwitch: React.FC<customeSwicthProps> = (props) => {
    const { isEnabled = false, setIsEnabled = () => { }, type2 = false, style } = props
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
        outputRange: [normalize(1), normalize(13)],
    });

    return (
        <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
            <View style={[styles.switchContainer, {
                borderColor: type2 == true ?
                    isEnabled ? COLORS.SECONDARY : COLORS.DISABLED
                    : COLORS.SECONDARY,
            }, style]}>
                <Animated.View
                    style={[
                        styles.switchHandle,
                        {
                            transform: [{ translateX: switchTranslateX }],
                            backgroundColor: type2 == true ?
                                isEnabled ? COLORS.SECONDARY : COLORS.DISABLED
                                : COLORS.SECONDARY,
                        },
                    ]}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        width: normalize(27),
        height: normalize(14),
        borderRadius: 20,
        backgroundColor: COLORS.BACKGROUND,
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: COLORS.SECONDARY,
        marginRight: 10
    },
    switchHandle: {
        width: normalize(9.5),
        height: normalize(9.5),
        borderRadius: 10,
        backgroundColor: COLORS.SECONDARY,
    },
});

export default CustomSwitch;

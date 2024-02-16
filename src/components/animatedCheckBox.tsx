import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet, Image, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../assets/stylesGuide';
import { CheckBox } from '../assets/icons';

interface checkBoxProps {
    checked: boolean;
    onPress: (val: boolean) => void;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    size?: number
}

const AnimatedCheckBox = ({ checked, onPress, style, containerStyle, size = 16 }: checkBoxProps) => {
    const [scaleValue] = useState(new Animated.Value(checked ? 1 : 0));
    const styles = styles_(size)
    const onCheck = () => {
        Animated.timing(scaleValue, {
            toValue: checked ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        onPress(checked);
    };

    useEffect(() => {
        Animated.timing(scaleValue, {
            toValue: checked ? 1 : 0,
            duration: 0,
            useNativeDriver: true,
        }).start();
    }, [checked]);

    return (
        <TouchableOpacity onPress={() => onCheck()} style={[styles.container, containerStyle]}>
            <Animated.View style={[styles.checkbox, style, { transform: [{ scale: scaleValue }] }]}>
                {
                    checked ?
                        <CheckBox
                            width={size}
                            height={size}
                        />
                        :
                        null
                }
            </Animated.View>
        </TouchableOpacity>
    );
};

export default React.memo(AnimatedCheckBox);

const styles_ = (size: any) => StyleSheet.create({
    container: {
        width: size,
        height: size,
        borderRadius: size / 3.5,
        borderWidth: 1.5,
        borderColor: COLORS.DISABLED,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        width: size,
        height: size,
        borderRadius: size / 3.5,
        backgroundColor: COLORS.SECONDARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

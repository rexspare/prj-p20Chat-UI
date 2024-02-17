import React, { FC, useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { CheckBox } from '../assets/icons';
import { COLORS, hp } from '../assets/stylesGuide';

interface checkBoxProps {
    checked: boolean;
    onPress: (val: boolean) => void;
    style?: ViewStyle;
    containerStyle?: ViewStyle;
    size?: number
}

const AnimatedCheckBox: FC<checkBoxProps> = ({ checked, onPress, style, containerStyle, size = hp(2.15) }) => {
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

const styles_ = (size: any,) => StyleSheet.create({
    container: {
        width: size - 1,
        height: size - 2,
        borderRadius: size / 5,
        borderWidth: 1.5,
        borderColor: COLORS.SECONDARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkbox: {
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

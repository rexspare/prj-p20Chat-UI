import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'

interface touchableCustomProps {
    style?: ViewStyle;
    children: ReactNode;
    hitSlop?: any;
    onPress?: Function;
}

const TouchableCustom: FC<touchableCustomProps> = ({
    style,
    children,
    hitSlop = undefined,
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={style}
            hitSlop={hitSlop ? hitSlop : { top: 5, bottom: 5, left: 5, right: 5 }}
            onPressIn={() => onPress()}
        >
            {children}
        </TouchableOpacity>
    )
}

export default TouchableCustom
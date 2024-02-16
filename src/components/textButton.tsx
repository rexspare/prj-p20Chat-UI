import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React from 'react'
import { COLORS, FONTS, hp, normalize, wp } from '../assets/stylesGuide';


interface textButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
}

const TextButton: React.FC<textButtonProps> = (props) => {
    return (
        <TouchableOpacity
            style={[styles.main, props.style]}
            activeOpacity={0.8}
            onPress={() => props.onPress()}
            disabled={props.isLoading}
        >
            {
                props.isLoading ?
                    <ActivityIndicator color={COLORS.WHITE} />
                    :
                    <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

TextButton.defaultProps = {
    title: 'title',
    onPress: () => { },
    isLoading: false
}

export default React.memo(TextButton)

const styles = StyleSheet.create({
    main: {

    },
    title: {
        color: COLORS.SECONDARY,
        fontSize: normalize(11),
        fontFamily: FONTS.MEDIUM
    }
})
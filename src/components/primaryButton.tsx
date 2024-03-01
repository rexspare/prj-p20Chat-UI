import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React, { ReactNode } from 'react'
import { COLORS, FONTS, hp, wp, COMMON_STYLES, normalize, FONT_SIZE } from '../assets/stylesGuide';
import { If } from '.';
import { ITHEME } from '../models/config';
import useAppConfig from '../hooks/AppConfig';


interface primaryButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
}

const PrimaryButton: React.FC<primaryButtonProps> = (props) => {
    const {
        disabled = false,
        icon = undefined,
        isLoading = false,
        style = {},
        textStyle = {},
        title = "",
        onPress = () => { }
    } = props

    const { theme } = useAppConfig()
    const styles = styles_(theme, disabled)

    return (
        <TouchableOpacity
            style={[
                styles.main,
                icon == undefined ? { width: '100%', } : { paddingHorizontal: '5%', height: hp(6.4) },
                style
            ]}
            activeOpacity={0.8}
            onPressIn={() => onPress && onPress()}
            disabled={disabled || isLoading}
        >
            <If condition={icon != undefined && icon != true}>
                <View style={{ marginRight: hp(0.5) }}>
                    {icon}
                </View>
            </If>
            {
                isLoading ?
                    <ActivityIndicator color={COLORS.WHITE} />
                    :
                    <Text style={[styles.title, textStyle]}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

PrimaryButton.defaultProps = {
    title: 'title',
    onPress: () => { },
    isLoading: false
}

export default React.memo(PrimaryButton)

const styles_ = (theme: ITHEME, disabled: any) => StyleSheet.create({
    main: {

        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: hp(1),
        backgroundColor: theme.SECONDARY,
        ...COMMON_STYLES.center_,
        height: hp(5.5),
        borderRadius: hp(0.9),
        maxWidth: 700
    },
    title: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._16,
        fontFamily: FONTS.MEDIUM
    }
})
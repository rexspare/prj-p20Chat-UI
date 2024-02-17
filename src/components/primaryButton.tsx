import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React, { ReactNode } from 'react'
import { COLORS, FONTS, hp, wp, COMMON_STYLES, normalize } from '../assets/stylesGuide';
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
            onPress={() => onPress && onPress()}
            disabled={disabled || isLoading}
        >
            <If condition={icon != undefined && icon != true}>
                <View style={{ marginRight: 10 }}>
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
    },
    title: {
        color: COLORS.WHITE,
        fontSize: hp(1.8),
        fontFamily: FONTS.MEDIUM
    }
})
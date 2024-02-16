import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React, { ReactNode } from 'react'
import { COLORS, FONTS, hp, wp, COMMON_STYLES, normalize } from '../assets/stylesGuide';
import { If } from '.';
import { CopyIcon } from '../assets/icons';
import useAppConfig from '../hooks/AppConfig';


interface generateAddresButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
    filled?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    address?: string;
}

const GenerateAddresButton: React.FC<generateAddresButtonProps> = (props) => {
    const { filled = false, disabled = false, address } = props
    const styles = styles_(filled, disabled)
    const { lang } = useAppConfig()

    return (
        <View style={{
            marginVertical: hp(1),
            alignItems: 'flex-end'
        }}>
            <TouchableOpacity
                style={[
                    styles.main,
                    props.style
                ]}
                activeOpacity={0.8}
                onPress={() => props.onPress()}
                disabled={disabled || props.isLoading}
            >

                {
                    props.isLoading ?
                        <ActivityIndicator color={COLORS.WHITE} />
                        :
                        address ?
                            <Text style={[styles.title, styles.address]}>{address}</Text>
                            :
                            <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
                }

                <If condition={address}>
                    <CopyIcon
                        width={normalize(11)}
                        height={normalize(11)}
                    />
                </If>
            </TouchableOpacity>
            <Text style={[styles.title, styles.time]}>{`${lang['_48']} 26:12:09 ${lang['_49']}`}</Text>
        </View>
    )
}

GenerateAddresButton.defaultProps = {
    title: 'title',
    onPress: () => { },
    isLoading: false
}

export default React.memo(GenerateAddresButton)

const styles_ = (filled: any, disabled: any) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: disabled ? COLORS.DISABLED : COLORS.PRIMARY,
        paddingVertical: 4,
        paddingHorizontal: 7,
    },
    title: {
        color: filled ? COLORS.WHITE
            : disabled ? COLORS.DISABLED : COLORS.PRIMARY,
        fontSize: normalize(8),
        fontFamily: FONTS.REGULAR
    },
    address: {
        color: COLORS.TEXT,
        paddingHorizontal: normalize(7)
    },
    time: {
        marginTop: normalize(3),
        fontSize: normalize(5.5),
    }
})
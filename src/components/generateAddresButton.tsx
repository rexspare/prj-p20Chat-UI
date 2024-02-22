import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native'
import React, { ReactNode } from 'react'
import { COLORS, FONTS, hp, wp, COMMON_STYLES, normalize, FONT_SIZE } from '../assets/stylesGuide';
import { If } from '.';
import { CopyIcon } from '../assets/icons';
import useAppConfig from '../hooks/AppConfig';
import Clipboard from '@react-native-clipboard/clipboard';

interface generateAddresButtonProps {
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

    const copyToClipboard = () => {
        Clipboard.setString(address as string);
    };


    return (
        <View style={styles.layout}>
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
                            <Text style={[styles.title, props.textStyle]}>{lang['_71']}</Text>
                }

                <If condition={address}>
                    <CopyIcon
                        width={hp(1.28)}
                        height={hp(1.8)}
                    />
                </If>
            </TouchableOpacity>
            <Text style={[styles.title, styles.time]}>{`${lang['_76']} 26:12:09 ${lang['_77']}`}</Text>
        </View>
    )
}

GenerateAddresButton.defaultProps = {
    onPress: () => { },
    isLoading: false
}

export default React.memo(GenerateAddresButton)

const styles_ = (filled: any, disabled: any) => StyleSheet.create({
    layout: {
        marginVertical: hp(1.3),
        alignItems: 'center',
    },
    main: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        paddingVertical: hp(0.6),
        paddingHorizontal: hp(2),
        alignSelf: 'center',
        alignItems: 'center'
    },
    title: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._12,
        fontFamily: FONTS.REGULAR
    },
    address: {
        color: COLORS.WHITE,
        paddingHorizontal: hp(1)
    },
    time: {
        marginTop: hp(0.5),
        fontSize: FONT_SIZE._8,
    }
})
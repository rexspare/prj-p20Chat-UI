import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide'
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils'
import { If, Label } from '..';
import { useNavigation } from '@react-navigation/native';
import { BackIcon } from '../../assets/icons';
import useAppConfig from '../../hooks/AppConfig';
import { Icon } from 'react-native-vector-icons/Icon';

interface commonHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
    iconColor?: string;
    stylesProp?: ViewStyle;
}

const CommonHeader: FC<commonHeaderProps> = (props) => {
    const { theme } = useAppConfig()

    const {
        hideBackBtn = false,
        title,
        iconColor = theme.BLACK_TO_WHITE,
        stylesProp
    } = props

    const styles = styles_(iconColor)
    const navigation = useNavigation()

    return (
        <View style={[styles.main, stylesProp]}>

            <If condition={hideBackBtn == false}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    onPress={() => navigation.goBack()}
                >
                    <BackIcon
                        fill={iconColor}
                        width={hp(2.4)}
                        height={hp(2)}
                    />
                </TouchableOpacity>
            </If>


            <If condition={title != undefined}>
                <View style={styles.titleContainer}>
                    <Label style={styles.title}>{title}</Label>
                </View>
            </If>


        </View >
    )
}

export default CommonHeader

const styles_ = (iconColor: string) => StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 60 : 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    txtContainer: {
        flex: 1,
        alignItems: 'center',
    },
    btnContainer: {
        position: 'absolute'
    },
    titleContainer: {
        position: 'absolute',
        width: '100%',
    },
    title: {
        fontSize: FONT_SIZE._20,
        color: iconColor
    },
})
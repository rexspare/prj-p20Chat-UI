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
    titleWidth?: number;
}

const CommonHeader: FC<commonHeaderProps> = (props) => {
    const { theme } = useAppConfig()

    const {
        hideBackBtn = false,
        title,
        iconColor = theme.BLACK_TO_WHITE,
        stylesProp,
        titleWidth = 0
    } = props

    const styles = styles_(iconColor, titleWidth)
    const navigation = useNavigation()

    return (
        <View style={[styles.main, stylesProp]}>

            <If condition={title != undefined}>
                <View style={styles.titleContainer}>
                    <Label style={styles.title}>{title}</Label>
                </View>
            </If>

            <If condition={hideBackBtn == false}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    onPress={() => navigation.goBack()}
                    style={styles.iconContainer}
                >
                    <BackIcon
                        fill={iconColor}
                        width={hp(2.4)}
                        height={hp(2)}
                        onPress={() => navigation.goBack()}
                    />
                </TouchableOpacity>
            </If>





        </View >
    )
}

export default CommonHeader

const styles_ = (iconColor: string, titleWidth: number) => StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 60 : 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    iconContainer: {
        minHeight: hp(5),
        justifyContent: 'center',
        paddingRight: 10
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
        width: titleWidth == 0 ? '100%' : titleWidth,
    },
    title: {
        fontSize: FONT_SIZE._20,
        color: iconColor
    },
})
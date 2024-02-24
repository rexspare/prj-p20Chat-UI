import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { ISettingItem } from '../../models/app'
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";
import { BodyText, Label } from '..';
import { LeftChevIcon, SettingRightIcon } from '../../assets/icons';
import useAppConfig from '../../hooks/AppConfig';

interface settingItemProps {
    item: ISettingItem;
}

const SettingItem: FC<settingItemProps> = (props) => {
    const { item } = props
    const {
        title,
        subtle,
        icon,
        onPress
    } = item
    const { theme } = useAppConfig()
    const styles = styles_(theme)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress && onPress()}
        >
            <View style={styles.row}>

                <View style={{ width: hp(4.5) }}>
                    {icon}
                </View>

                <View style={styles.container}>
                    <Label style={styles.title}>{title}</Label>
                    <BodyText style={styles.subtle}>{subtle}</BodyText>
                </View>
            </View>


            <SettingRightIcon
                fill={theme.BLACK_TO_WHITE}
                width={hp(1)}
                height={hp(1.5)}
            />

        </TouchableOpacity>
    )
}

export default SettingItem

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: isDeviceTablet() ? '2%' : '4%',
        minHeight: hp(6),
        marginVertical: hp(1)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {

    },
    title: {
        fontSize: FONT_SIZE._16,
        fontFamily: FONTS.MEDIUM,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left'
    },
    subtle: {
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        textAlign: 'left'
    }
})
import { useNavigation } from '@react-navigation/native';
import React, { FC, useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { BodyText, If, Label, PrimaryInput } from '..';
import { BackIcon, CallIcon, SearchIcon, VerticalDotsIcon, VideoIcon } from '../../assets/icons';
import { COLORS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface appHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
}

const AppHeader: FC<appHeaderProps> = (props) => {
    const {
        hideBackBtn = false,
        title,
    } = props

    const navigation = useNavigation()
    const { theme, lang } = useAppConfig()
    const styles = styles_(theme)

    return (
        <View style={styles.main}>

            <If condition={hideBackBtn == false}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                    onPress={() => navigation.goBack()}
                >
                    <BackIcon
                        fill={COLORS.WHITE}
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

export default AppHeader

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 60 : hp(1),
        marginBottom: hp(1.25),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    titleContainer: {
        position: 'absolute',
        width: wp(100),
    },
    title: {
        fontSize: FONT_SIZE._20,
        color: COLORS.WHITE,
    }
})
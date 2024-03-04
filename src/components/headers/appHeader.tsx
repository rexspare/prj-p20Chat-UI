import { useNavigation } from '@react-navigation/native';
import React, { FC, ReactNode, useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { BodyText, If, Label, PrimaryInput, TouchableCustom } from '..';
import { BackIcon, CallIcon, SearchIcon, VerticalDotsIcon, VideoIcon } from '../../assets/icons';
import { COLORS, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface appHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
    subtle?: string;
    iconColor?: string;
    renderRightIcon?: ReactNode;
    showRightIcon?: boolean;
    onChangeInput?: Function;
    onBackPress?: Function | null;
    style?: ViewStyle;
}

const AppHeader: FC<appHeaderProps> = (props) => {
    const {
        hideBackBtn = false,
        title,
        subtle,
        iconColor = COLORS.WHITE,
        renderRightIcon,
        showRightIcon = false,
        onChangeInput = () => { },
        onBackPress = null,
        style
    } = props

    const navigation = useNavigation()
    const { theme, lang } = useAppConfig()
    const styles = styles_(theme, iconColor)
    const [searchVal, setsearchVal] = useState('')
    const [showSearch, setshowSearch] = useState(false)

    const handleSearch = (txt: string) => {
        setsearchVal(txt)
        onChangeInput(txt)
    }

    const handleBackPress = () => {
        if (onBackPress != null) {
            onBackPress()
            return
        }

        if (showSearch) {
            setshowSearch(false)
        } else {
            navigation.goBack()
        }
    }


    return (
        <View style={[styles.main, style]}>

            <If condition={title != undefined && showSearch == false}>
                <View style={styles.titleContainer}>
                    <Label style={styles.title}>{title}</Label>
                    <If condition={subtle != undefined}>
                        <Label style={styles.subtle}>{subtle}</Label>
                    </If>
                </View>
            </If>

            <If condition={hideBackBtn == false}>
                <TouchableOpacity
                    style={{
                        paddingVertical: 8,
                        paddingRight: 10,
                    }}
                    activeOpacity={0.8}
                    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                    onPressIn={() => handleBackPress()}
                >
                    <BackIcon
                        fill={iconColor}
                        width={hp(2.4)}
                        height={hp(2)}
                    />
                </TouchableOpacity>
            </If>

            <If condition={showRightIcon == true && showSearch}>
                <PrimaryInput
                    hideTitle={true}
                    value={searchVal}
                    placeholder={lang['_37']}
                    onChange={(txt) => handleSearch(txt)}
                    containerStyles={styles.inputcontainerStyles}
                    inputStyles={styles.inputStyles}
                    renderLeftIcon={<SearchIcon
                        fill={theme.ACCENT}
                        width={hp(2)}
                        height={hp(2)} />}
                />
            </If>




            <If condition={showRightIcon && showSearch == false}>
                {
                    renderRightIcon ?
                        renderRightIcon :
                        <TouchableCustom
                            onPress={() => setshowSearch(true)}
                        >
                            <SearchIcon
                                fill={COLORS.WHITE}
                                width={hp(2.14)}
                                height={hp(2.14)} />
                        </TouchableCustom>
                }
            </If>

        </View >
    )
}

export default AppHeader

const styles_ = (theme: ITHEME, iconColor: string) => StyleSheet.create({
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
        color: iconColor
    },
    subtle: {
        fontSize: FONT_SIZE._14,
        fontWeight: '400',
        color: iconColor
    },
    inputcontainerStyles: {
        width: '90%',
        flexShrink: 1,
        borderRadius: hp(1)
    },
    inputStyles: {
        height: hp(5.3)
    }
})
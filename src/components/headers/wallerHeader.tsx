import { useNavigation } from '@react-navigation/native';
import React, { FC, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger
} from 'react-native-popup-menu';
import { BodyText } from '..';
import { SCREENS } from '../../assets/constants';
import { BackIcon, VerticalDotsIcon } from '../../assets/icons';
import { COLORS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { useWallet, walletStateSelectors } from '../../states/wallet';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';
import WalletDropDown from '../walletDropDown';

interface walletHeaderProps {
    hideBackBtn?: boolean;
    title?: string;
}

const WalletHeader: FC<walletHeaderProps> = (props) => {
    const {
        hideBackBtn = false,
        title,
    } = props

    const navigation = useNavigation()
    const menuRef = useRef<Menu>(null)

    const { theme, lang } = useAppConfig()
    const [showSearch, setshowSearch] = useState(false)
    const walletList = useWallet(walletStateSelectors.walletList)


    const styles = styles_(theme)

    const MainMenuList: any[] = [
        {
            id: 1,
            name: lang["_68"],
            onPress: () => navigation.navigate(SCREENS.TRANSACTION_HISTORY)
        },
        {
            id: 2,
            name: lang["_69"],
            onPress: () => navigation.navigate(SCREENS.HISTORY_SETTING)
        },
    ]

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <>
            <View style={styles.main}>

                {
                    (title) ?
                        <TouchableOpacity
                            activeOpacity={0.8}
                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                            onPress={() => handleBackPress()}
                        >
                            <BackIcon
                                fill={theme.WHITE_TO_BLACK}
                                width={hp(2.4)}
                                height={hp(2)}
                            />
                        </TouchableOpacity>

                        :

                        <WalletDropDown
                            data={walletList}
                        />
                }


                <Menu ref={menuRef}>
                    <MenuTrigger>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                            onPress={() => menuRef?.current?.open()}
                        >
                            <VerticalDotsIcon height={hp(2.46)} />
                        </TouchableOpacity>
                    </MenuTrigger>
                    <MenuOptions
                        optionsContainerStyle={styles.optionsContainerStyle}
                    >
                        {
                            (MainMenuList).map((item, index) => (
                                <MenuOption
                                    key={index}
                                    onSelect={() => item?.onPress && item?.onPress()} >
                                    <BodyText style={styles.menuTxt}>{item.name}</BodyText>
                                </MenuOption>
                            ))
                        }
                    </MenuOptions>
                </Menu>


            </View >
        </>
    )
}

export default WalletHeader

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 60 : hp(1),
        marginBottom: hp(0.5),
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
        marginHorizontal: hp(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE._18
    },
    leftRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    optionsContainerStyle: {
        width: 'auto',
        marginTop: hp(3),
        borderRadius: hp(1.5),
        backgroundColor: theme.CHAP_POPUP,
        paddingVertical: hp(1)
    },
    menuTxt: {
        textAlign: 'left',
        paddingLeft: hp(1.5),
        paddingRight: hp(1.5),
        paddingVertical: hp(0.75),
        fontSize: FONT_SIZE._16,
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
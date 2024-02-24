import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { AppHeader, BodyText, ChatItem, CoinItem, CommonHeader, FabButton, HomeHeader, If, Label, Layout, PrimaryButton, PrimaryInput, SettingItem, Spacer, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, Image, StatusBar, View } from 'react-native'
import { COLORS, hp } from '../../assets/stylesGuide'
import { CHATS_LIST, COINSLIST } from '../../data'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import { useWallet, walletStateSelectors } from '../../states/wallet'
import { AboutIcon, BackIcon, BellIcon, BlockIcon, DisplayIcon, HelpIcon, LangIcon, OrLine, RightChev, ScanQRIcon, SettingIcon } from '../../assets/icons'
import { SCREENS } from '../../assets/constants'
import { FRIENDS_AVATARS, IMAGES } from '../../assets/images'
import { ISettingItem } from '../../models/app'

const SettingMainScreen = () => {
    const { lang, theme } = useAppConfig()
    const { keyboardStatus } = useKeyboard()
    const navigation = useNavigation()

    const styles = styles_(theme)

    const MenuList: ISettingItem[] = [
        {
            id: 1,
            title: lang['_123'],
            subtle: lang['_124'],
            icon: <DisplayIcon fill={theme.BLACK_TO_WHITE} width={hp(2.57)} height={hp(2.46)} />,
            onPress: () => navigation.navigate(SCREENS.DISPLAY_SETTING)
        },
        {
            id: 2,
            title: lang['_125'],
            subtle: lang['_126'],
            icon: <BellIcon fill={theme.BLACK_TO_WHITE} width={hp(2.57)} height={hp(2.78)} />,
            onPress: () => navigation.navigate(SCREENS.NOTIFICATION_SETTING)
        },
        {
            id: 3,
            title: lang['_127'],
            subtle: lang['name'],
            icon: <LangIcon fill={theme.BLACK_TO_WHITE} width={hp(3.11)} height={hp(2.62)} />,
            onPress: () => navigation.navigate(SCREENS.LANG_SETTING)
        },
        {
            id: 4,
            title: lang['_128'],
            subtle: `5 ${lang['_129']}`,
            icon: <BlockIcon fill={theme.BLACK_TO_WHITE} width={hp(2.57)} height={hp(3)} />,
            onPress: () => navigation.navigate(SCREENS.BLOCKED_CONTACTS)
        },
        {
            id: 5,
            title: lang['_130'],
            subtle: `5 ${lang['_131']}`,
            icon: <HelpIcon fill={theme.BLACK_TO_WHITE} width={hp(2.57)} height={hp(2.57)} />,
            onPress: () => { }
        },
        {
            id: 6,
            title: lang['_132'],
            subtle: `V1.0.0`,
            icon: <AboutIcon fill={theme.BLACK_TO_WHITE} width={hp(2.57)} height={hp(2.57)} />,
            onPress: () => { }
        },
    ]

    return (
        <>
            <StatusBar
                backgroundColor={theme.BACKGROUND}
                barStyle={theme.mode == 'light' ? 'dark-content' : 'light-content'} />

            <Layout fixed={true} containerStyle={styles.main}>

                {/* USER CARD */}
                <View style={styles.card}>

                    <View style={styles.header}>
                        <View style={styles.titleContainer}>
                            <Label style={styles.title}>{lang['_122']}</Label>
                        </View>

                        <TouchableCustom
                            onPress={() => navigation.goBack()}
                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                        >
                            <BackIcon
                                fill={COLORS.WHITE}
                                width={hp(2.4)}
                                height={hp(2)}
                            />
                        </TouchableCustom>

                    </View>

                    <View style={styles.row} >
                        <TouchableCustom
                            style={styles.user}
                            onPress={() => navigation.navigate(SCREENS.EDIT_PROFILE)}
                        >
                            <Image
                                source={FRIENDS_AVATARS.P2}
                                style={styles.avatar}
                            />

                            <View>
                                <Label style={styles.username}>Alexandra</Label>
                                <BodyText style={styles.id}>id: 34u4ii4i23</BodyText>
                            </View>
                        </TouchableCustom>

                        <TouchableCustom
                            onPress={() => navigation.navigate(SCREENS.EDIT_PROFILE)}
                        >
                            <SettingIcon
                                fill={COLORS.WHITE}
                                width={hp(2.14)}
                                height={hp(2.14)}
                            />
                        </TouchableCustom>

                    </View>

                </View>
                {/* USER CARD */}

                <Layout>
                    {
                        MenuList.map((item: ISettingItem, index: number) => (
                            <SettingItem
                                key={index}
                                item={item}
                            />
                        ))
                    }
                </Layout>

            </Layout>
        </>
    )
}


export default SettingMainScreen

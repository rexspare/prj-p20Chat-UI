import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { AppHeader, BodyText, ChatItem, CoinItem, CommonHeader, FabButton, HomeHeader, If, Label, Layout, PrimaryButton, PrimaryInput, SettingItem, Spacer, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import { FlatList, Image, ImageBackground, StatusBar, View } from 'react-native'
import { COLORS, hp } from '../../assets/stylesGuide'
import { CHATS_LIST, COINSLIST } from '../../data'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { BlockUserModal, MuteUserModal } from '../../components/popups'
import { useWallet, walletStateSelectors } from '../../states/wallet'
import { AboutIcon, BackIcon, BellIcon, BlockIcon, CameraIcon, DisplayIcon, HelpIcon, LangIcon, OrLine, RightChev, ScanQRIcon, SettingIcon } from '../../assets/icons'
import { SCREENS } from '../../assets/constants'
import { FRIENDS_AVATARS, IMAGES } from '../../assets/images'
import { ISettingItem } from '../../models/app'

const EditProfileScreen = () => {
    const { lang, theme } = useAppConfig()
    const { keyboardStatus } = useKeyboard()
    const navigation = useNavigation()

    const styles = styles_(theme)

    return (
        <>
            <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
            <Layout fixed={true} containerStyle={styles.main}>


                <AppHeader
                    title={lang['_133']}
                />

                <Layout
                    fixed={true}
                    containerStyle={styles.container}>

                    {/* IMAGE AVATAR */}
                    <View style={styles.avatarContainer} >

                        <Image
                            source={FRIENDS_AVATARS.P3}
                            style={styles.avatar}
                        />

                        <View style={styles.camIcon}>
                            <CameraIcon width={hp(5.3)} height={hp(5.3)} />
                        </View>

                    </View>

                    <Layout >

                    </Layout>

                </Layout>

            </Layout>
        </>
    )
}


export default EditProfileScreen

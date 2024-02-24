import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { ChatSettingIcon, ThemeIcon } from '../../assets/icons'
import { hp, wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, Layout } from '../../components'
import { AppThemeModal, SelectSoundModal, VibrateModeModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'

const NotificationSettingScreen = () => {
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()

    const styles = styles_(theme)
    const [isVibrateModalVisible, setisVibrateModalVisible] = useState(false)
    const [isSoundModalVisble, setisSoundModalVisble] = useState(false)


    const MessageMenu: any[] = [
        {
            id: 1,
            title: lang['_158'],
            subtle: 'Default(Down)',
            onPress: () => setisSoundModalVisble(true)
        },
        {
            id: 2,
            title: lang['_159'],
            subtle: 'Off',
            onPress: () => setisVibrateModalVisible(true)
        },
    ]

    const GroupMenu: any[] = [
        {
            id: 1,
            title: lang['_158'],
            subtle: 'Default(Down)',
            onPress: () => setisSoundModalVisble(true)
        },
        {
            id: 2,
            title: lang['_159'],
            subtle: 'Off',
            onPress: () => setisVibrateModalVisible(true)
        },
    ]

    const CallMenu: any[] = [
        {
            id: 1,
            title: lang['_162'],
            subtle: 'Default(Down)',
            onPress: () => setisSoundModalVisble(true)
        },
        {
            id: 2,
            title: lang['_159'],
            subtle: 'Off',
            onPress: () => setisVibrateModalVisible(true)
        },
    ]


    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_156']}
                titleWidth={wp(100)}
                stylesProp={styles.header}
            />
            <Layout>

                <BodyText style={styles.txt1}>{lang['_157']}</BodyText>
                {
                    MessageMenu.map((menu: ISettingItem, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            style={styles.item}
                            onPress={() => menu.onPress()}
                        >
                            <View style={{ flex: 1 }}>
                                <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                                <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                            </View>

                        </TouchableOpacity>
                    ))
                }

                <BodyText style={styles.txt1}>{lang['_160']}</BodyText>
                {
                    GroupMenu.map((menu: ISettingItem, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            style={styles.item}
                            onPress={() => menu.onPress()}
                        >
                            <View style={{ flex: 1 }}>
                                <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                                <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                            </View>

                        </TouchableOpacity>
                    ))
                }

                <BodyText style={styles.txt1}>{lang['_161']}</BodyText>
                {
                    CallMenu.map((menu: ISettingItem, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            style={styles.item}
                            onPress={() => menu.onPress()}
                        >
                            <View style={{ flex: 1 }}>
                                <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                                <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                            </View>

                        </TouchableOpacity>
                    ))
                }

            </Layout>

            <SelectSoundModal
                isVisible={isSoundModalVisble}
                onClose={() => setisSoundModalVisble(false)}
            />

            <VibrateModeModal
                isVisible={isVibrateModalVisible}
                onClose={() => setisVibrateModalVisible(false)}
            />

        </Layout>
    )
}

export default NotificationSettingScreen
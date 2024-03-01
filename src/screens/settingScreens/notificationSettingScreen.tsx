import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, Layout } from '../../components'
import { SelectSoundModal, VibrateModeModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

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

    const closeModal = () => {
        setisVibrateModalVisible(false)
        setisSoundModalVisble(false)
    }


    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_156']}
                titleWidth={wp(100)}
                stylesProp={styles.header}
            />
            <Layout>
                <GestureHandlerRootView>

                    <BodyText style={styles.txt1}>{lang['_157']}</BodyText>
                    {
                        MessageMenu.map((menu: ISettingItem, index) => (
                            <TouchableWithoutFeedback
                                key={index}
                                style={styles.item}
                                onPressIn={() => menu.onPress()}
                            >
                                <View style={{ flex: 1 }}>
                                    <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                                    <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                                </View>

                            </TouchableWithoutFeedback>
                        ))
                    }

                    <BodyText style={styles.txt1}>{lang['_160']}</BodyText>
                    {
                        GroupMenu.map((menu: ISettingItem, index) => (
                            <TouchableWithoutFeedback
                                key={index}
                                style={styles.item}
                                onPressIn={() => menu.onPress()}
                            >
                                <View style={{ flex: 1 }}>
                                    <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                                    <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                                </View>

                            </TouchableWithoutFeedback>
                        ))
                    }

                    <BodyText style={styles.txt1}>{lang['_161']}</BodyText>
                    {
                        CallMenu.map((menu: ISettingItem, index) => (
                            <TouchableWithoutFeedback
                                key={index}
                                style={styles.item}
                                onPressIn={() => menu.onPress()}
                            >
                                <View style={{ flex: 1 }}>
                                    <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                                    <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                                </View>

                            </TouchableWithoutFeedback>
                        ))
                    }
                </GestureHandlerRootView>

            </Layout>

            {
                isSoundModalVisble &&
                <SelectSoundModal
                    isVisible={isSoundModalVisble}
                    onClose={closeModal}
                />}

            {
                isVibrateModalVisible &&
                <VibrateModeModal
                    isVisible={isVibrateModalVisible}
                    onClose={closeModal}
                />}

        </Layout>
    )
}

export default NotificationSettingScreen
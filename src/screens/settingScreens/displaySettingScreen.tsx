import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { ChatSettingIcon, ThemeIcon } from '../../assets/icons'
import { hp, wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, Layout } from '../../components'
import { AppThemeModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'

const DisplaySettingScreen = () => {
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()

    const styles = styles_(theme)


    const MenuList: ISettingItem[] = [
        {
            id: 1,
            title: lang['_137'],
            subtle: lang['_124'],
            icon: <ThemeIcon fill={theme.ACCENT} width={hp(2.44)} height={hp(2.44)} />,
            onPress: () => setisThemeModalVisible(true)
        },
        {
            id: 2,
            title: lang['_138'],
            subtle: lang['_139'],
            icon: <ChatSettingIcon fill={theme.ACCENT} width={hp(2.44)} height={hp(2.44)} />,
            onPress: () => navigation.navigate(SCREENS.CHAT_SETTING)
        },
    ]

    const [isThemeModalVisible, setisThemeModalVisible] = useState(false)

    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_136']}
                titleWidth={wp(100)}
                stylesProp={styles.header}
            />

            {
                MenuList.map((menu: ISettingItem, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        style={styles.item}
                        onPress={() => menu.onPress()}
                    >
                        <View style={styles.iconContainer}>
                            {menu.icon}
                        </View>

                        <View style={{ flex: 1 }}>
                            <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                            <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                        </View>

                    </TouchableOpacity>
                ))
            }

            <AppThemeModal
                isVisible={isThemeModalVisible}
                onClose={() => setisThemeModalVisible(false)}
            />

        </Layout>
    )
}

export default DisplaySettingScreen
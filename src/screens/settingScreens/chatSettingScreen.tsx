import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { FontSizIcon, WallpaperIcon } from '../../assets/icons'
import { hp, wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, If, Layout } from '../../components'
import { ChatFontModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'
import { SCREENS } from '../../assets/constants'

const ChatSettingScreen = () => {
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()

    const styles = styles_(theme)
    const [isFSModalVisible, setisFSModalVisible] = useState(false)


    const MenuList: ISettingItem[] = [
        {
            id: 1,
            title: lang['_146'],
            subtle: lang['_124'],
            icon: <FontSizIcon fill={theme.ACCENT} width={hp(2.44)} height={hp(2.44)} />,
            onPress: () => setisFSModalVisible(true)
        },
        {
            id: 2,
            title: lang['_150'],
            subtle: undefined,
            icon: <WallpaperIcon fill={theme.ACCENT} width={hp(2.44)} height={hp(2.44)} />,
            onPress: () => navigation.navigate(SCREENS.WALLPAPER_SETTING)
        },
    ]


    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_145']}
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
                            <If condition={menu.subtle != undefined}>
                                <BodyText style={styles.itemSubtle}>{menu.subtle}</BodyText>
                            </If>
                        </View>

                    </TouchableOpacity>
                ))
            }

            <ChatFontModal
                isVisible={isFSModalVisible}
                onClose={() => setisFSModalVisible(false)}
            />

        </Layout>
    )
}

export default ChatSettingScreen
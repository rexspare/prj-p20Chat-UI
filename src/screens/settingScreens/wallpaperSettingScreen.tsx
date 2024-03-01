import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { FontSizIcon, WallpaperIcon } from '../../assets/icons'
import { COLORS, hp, wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, If, Layout } from '../../components'
import { ChatFontModal } from '../../components/popups'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'
import { WALLPAPER_TYPE } from '../../assets/images'

const WallpaperSettingScreen = () => {
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()

    const styles = styles_(theme)
    const [isFSModalVisible, setisFSModalVisible] = useState(false)


    const MenuList: any[] = [
        {
            id: 1,
            title: lang['_152'],
            image: WALLPAPER_TYPE.BRIGHT,
            onPress: () => { }
        },
        {
            id: 2,
            title: lang['_153'],
            image: WALLPAPER_TYPE.DARK,
            onPress: () => { }
        },
        {
            id: 3,
            title: lang['_154'],
            image: WALLPAPER_TYPE.SOLID,
            onPress: () => { }
        },
        {
            id: 4,
            title: lang['_155'],
            image: WALLPAPER_TYPE.GALLERY,
            onPress: () => { }
        },
    ]


    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_150']}
                titleWidth={wp(100)}
                stylesProp={styles.header}
            />

            <View style={styles.listContainer}>
                {
                    MenuList.map((menu: any, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            onPressIn={() => menu.onPress()}
                        >
                            {
                                menu.id == 4 ?
                                    <View style={styles.shadowContainer}>
                                        <WallpaperIcon
                                            fill={COLORS.SECONDARY}
                                            width={hp(4.3)}
                                            height={hp(4.3)}
                                        />
                                    </View>
                                    :
                                    <Image
                                        source={menu.image}
                                        style={styles.bgImage}
                                    />
                            }
                            <BodyText style={styles.txt}>{menu.title}</BodyText>

                        </TouchableOpacity>
                    ))
                }
            </View>

            <ChatFontModal
                isVisible={isFSModalVisible}
                onClose={() => setisFSModalVisible(false)}
            />

        </Layout>
    )
}

export default WallpaperSettingScreen
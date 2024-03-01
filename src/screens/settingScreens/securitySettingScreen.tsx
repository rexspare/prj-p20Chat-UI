import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { RightSettingChev } from '../../assets/icons'
import { hp, wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, CustomSwitch, Layout, Spacer } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'

const SecuritySettingScreen = () => {
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()

    const styles = styles_(theme)
    const [showTransBtn, setshowTransBtn] = useState(false)
    const [translateChat, settranslateChat] = useState(false)


    const Menu: any[] = [
        {
            id: 1,
            title: lang['_217'],
            icon: <CustomSwitch
                isEnabled={showTransBtn}
                setIsEnabled={setshowTransBtn}
                type2={true}
            />
        },
        {
            id: 2,
            title: lang['_218'],
            icon: <CustomSwitch
                isEnabled={translateChat}
                setIsEnabled={settranslateChat}
                type2={true}
            />
        },
        {
            id: 3,
            title: lang['_219'],
            icon: <>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.row}>
                    <BodyText style={styles.itemTitle}>Face ID</BodyText>
                    <RightSettingChev
                        fill={theme.BLACK_TO_WHITE}
                        width={hp(1.2)}
                        height={hp(1.2)}
                        style={{ marginLeft: hp(0.5) }}
                    />
                </TouchableOpacity>
            </>
        },
    ]

    const Menu2: any[] = [
        {
            id: 1,
            title: lang['_220'],
            subtle: lang['_221'],

        },
        {
            id: 2,
            title: lang['_222'],
            subtle: lang['_223'],
        },
    ]

    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_216']}
                titleWidth={wp(100)}
                stylesProp={styles.header}
            />
            <Layout>

                <GestureHandlerRootView>

                    <Spacer height={hp(2)} />

                    {
                        Menu.map((menu: ISettingItem, index) => (
                            <View
                                key={index}
                                style={[styles.item1, (menu.id == 3 && { borderBottomWidth: 0 })]}
                            >
                                <View style={{ flex: 1 }}>
                                    <BodyText style={styles.itemTitle}>{menu.title}</BodyText>
                                </View>
                                {menu.icon}
                            </View>
                        ))
                    }

                    {
                        Menu2.map((menu: ISettingItem, index) => (
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



                    <Spacer height={hp(2)} />

                </GestureHandlerRootView>
            </Layout>

        </Layout>
    )
}

export default SecuritySettingScreen
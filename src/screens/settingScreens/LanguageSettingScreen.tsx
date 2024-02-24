import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { hp, wp } from '../../assets/stylesGuide'
import { BodyText, CommonHeader, CustomSwitch, If, Layout, Spacer } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { ISettingItem } from '../../models/app'
import { styles as styles_ } from './styles'
import { RightChev, RightSettingChev, TickSettingIcon } from '../../assets/icons'
import { LANGUAGES_LIST } from '../../data'

const LanguageSettingScreen = () => {
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()

    const styles = styles_(theme)
    const [showTransBtn, setshowTransBtn] = useState(false)
    const [translateChat, settranslateChat] = useState(false)
    const [selectedLang, setselectedLang] = useState(1)


    const TranslateMenu: any[] = [
        {
            id: 1,
            title: lang['_172'],
            icon: <CustomSwitch
                isEnabled={showTransBtn}
                setIsEnabled={setshowTransBtn}
                type2={true}
            />
        },
        {
            id: 2,
            title: lang['_173'],
            icon: <CustomSwitch
                isEnabled={translateChat}
                setIsEnabled={settranslateChat}
                type2={true}
            />
        },
        {
            id: 3,
            title: lang['_174'],
            icon: <>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.row}>
                    <BodyText style={styles.itemTitle}>English</BodyText>
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

    return (
        <Layout fixed={true}>

            <CommonHeader
                title={lang['_171']}
                titleWidth={wp(100)}
                stylesProp={styles.header}
            />
            <Layout>

                <BodyText style={styles.txt2}>{lang['_175']}</BodyText>

                <Spacer height={hp(2)} />

                {
                    TranslateMenu.map((menu: ISettingItem, index) => (
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


                <BodyText style={styles.txt2}>{lang['_176']}</BodyText>

                <Spacer height={hp(2)} />

                {
                    LANGUAGES_LIST.map((lang: any, index) => (
                        <TouchableOpacity
                            key={index}
                            activeOpacity={0.8}
                            style={[styles.item2]}
                            onPress={() => setselectedLang(lang.id)}
                        >
                            <View style={{ flex: 1 }}>
                                <BodyText style={styles.itemTitle}>{lang.title}</BodyText>
                                <BodyText style={styles.itemSubtle}>{lang.subtle}</BodyText>
                            </View>

                            <If condition={lang.id == selectedLang}>
                                <TickSettingIcon
                                    width={hp(1.82)}
                                    height={hp(1.82)}
                                />
                            </If>

                        </TouchableOpacity>
                    ))
                }

                <Spacer height={hp(8)} />

            </Layout>

        </Layout>
    )
}

export default LanguageSettingScreen
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { PopIcon } from '../../assets/icons'
import { COMMON_STYLES, hp } from '../../assets/stylesGuide'
import { BodyText, BulletItem, Label, Layout, PrimaryButton, TextButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'


const WalletSucessScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [isPhraseVisible, setisPhraseVisible] = useState<boolean>(false)

    const DATA_LIST = [
        {
            id: 1,
            text: lang['_36'],
        },
        {
            id: 2,
            text: lang['_37'],
        },
        {
            id: 3,
            text: lang['_38'],
        },
        {
            id: 4,
            text: lang['_39'],
            button: true
        },
    ]


    return (
        <Layout fixed={true}>

            <Layout fixed={true} containerStyle={COMMON_STYLES.mainPad}>

                {/* IMAGE */}
                <PopIcon
                    width={hp(16)}
                    height={hp(16)}
                    style={styles.branding}
                />

                <View style={styles.center}>
                    <Label style={styles.heading}>{lang['_33']}</Label>
                    <BodyText style={{ paddingHorizontal: '6%' }}>{lang['_34']}</BodyText>

                    <Label style={styles.subHheading}>{lang['_35']}</Label>

                    <View style={styles.listContainer}>

                        {
                            DATA_LIST.map((item, index) => (
                                <BulletItem
                                    key={index}
                                    item={item}
                                />
                            ))
                        }

                    </View>
                </View>


            </Layout>

            {/* BUTTON CONTAINER */}
            <View style={styles.btnConatiner}>

                <TextButton
                    title={lang['_40']}
                    onPress={() => {
                        navigation.navigate(SCREENS.INSTALL_COMPLETE)
                    }}
                    style={styles.txtBtn}
                    textStyle={styles.txtBtnTitle}
                />

                <PrimaryButton
                    title={lang['_32']}
                    onPress={() => {
                        navigation.navigate(SCREENS.INSTALL_COMPLETE)
                    }}
                    filled={true}
                />
            </View>

        </Layout>
    )
}

export default WalletSucessScreen

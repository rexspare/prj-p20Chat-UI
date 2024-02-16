import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { EyeIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { COMMON_STYLES } from '../../assets/stylesGuide'
import { AppHeader, BodyText, If, Label, Layout, PhraseItem, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'

const LIST_DATA = [
    {
        id: 1,
        text: 'future'
    },
    {
        id: 2,
        text: 'exit'
    },
    {
        id: 3,
        text: 'use'
    },
    {
        id: 4,
        text: 'enact'
    },
    {
        id: 5,
        text: 'abuse'
    },
    {
        id: 6,
        text: 'drum'
    },
    {
        id: 7,
        text: 'bubble'
    },
    {
        id: 8,
        text: 'frequent'
    },
    {
        id: 9,
        text: 'disagree'
    },
    {
        id: 10,
        text: 'target'
    },
    {
        id: 11,
        text: 'yard'
    },
    {
        id: 12,
        text: 'organ'
    },
]

const RecoveryPhaseScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [isPhraseVisible, setisPhraseVisible] = useState<boolean>(false)



    return (
        <Layout fixed={true}>
            <AppHeader />

            <Layout fixed={true} containerStyle={COMMON_STYLES.mainPad}>

                {/* IMAGE */}
                <Image
                    source={IMAGES.STEP_2}
                    resizeMode='contain'
                    style={styles.branding}
                />

                <View style={styles.center}>
                    <Label style={styles.heading}>{lang['_25']}</Label>
                    <BodyText style={{ paddingHorizontal: '5%' }}>{lang['_26']}</BodyText>

                    <View style={[styles.listContainer, isPhraseVisible ? COMMON_STYLES.mainPad : COMMON_STYLES.main]}>

                        <If condition={isPhraseVisible}>
                            {
                                LIST_DATA.map((item, index) => (
                                    <PhraseItem
                                        key={index}
                                        item={item}
                                        index={index}
                                    />
                                ))
                            }
                        </If>

                        <If condition={!isPhraseVisible}>
                            <ImageBackground
                                source={IMAGES.BLUR_PHRASES}
                                style={styles.backgorundImg}
                                resizeMode='contain'
                            >
                                <BodyText style={styles.blurHeading}>{lang['_27']}</BodyText>
                                <BodyText style={styles.blurLabel}>{lang['_28']}</BodyText>

                                <PrimaryButton
                                    title={lang['_29']}
                                    filled={true}
                                    onPress={() => setisPhraseVisible(true)}
                                    icon={<EyeIcon />}
                                    style={styles.blurBtn}
                                />

                            </ImageBackground>
                        </If>
                    </View>
                </View>


            </Layout>

            {/* BUTTON CONTAINER */}
            <View style={styles.btnConatiner}>

                <PrimaryButton
                    title={isPhraseVisible ? lang['_31'] : lang['_30']}
                    onPress={() => {
                        !isPhraseVisible ?
                            setisPhraseVisible(true) :
                            navigation.navigate(SCREENS.CONFIRM_PHRASE)
                    }}
                    filled={true}
                />
            </View>

        </Layout>
    )
}

export default RecoveryPhaseScreen

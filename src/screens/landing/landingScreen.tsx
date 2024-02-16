import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { IMAGES } from '../../assets/images'
import { COLORS, COMMON_STYLES, normalize } from '../../assets/stylesGuide'
import { AnimatedCheckBox, AppHeader, BodyText, Layout, PrimaryButton, TextButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'

const LandingScreen = () => {
    const { lang } = useAppConfig()
    const [isChecked, setisChecked] = useState<boolean>(false)
    const navigation = useNavigation()

    return (
        <Layout fixed={true}>
            <AppHeader
                hideBackBtn={true}
                title={lang['_01']} />

            <View style={COMMON_STYLES.mainPad}>
                <BodyText style={{ paddingHorizontal: '4%' }}>{lang['_02']}</BodyText>

                {/* IMAGE */}
                <View style={styles.center}>
                    <Image
                        source={IMAGES.BRANDING}
                        resizeMode='contain'
                        style={styles.branding}
                    />
                </View>

                {/* BUTTON CONTAINER */}
                <View style={styles.btnConatiner}>

                    <View style={styles.row}>
                        <AnimatedCheckBox
                            checked={isChecked}
                            size={normalize(18)}
                            onPress={() => setisChecked(!isChecked)}
                        />
                        <BodyText style={{ marginLeft: 5 }}>{lang['_03']} </BodyText>
                        <TextButton
                            title={lang['_04']}
                            onPress={() => { }}
                            textStyle={{ color: COLORS.LINK }}
                        />
                    </View>

                    <PrimaryButton
                        title={lang['_07']}
                        onPress={() => { navigation.navigate(SCREENS.HELP_IMPROVE) }}
                        disabled={!isChecked}
                    />
                    <PrimaryButton
                        title={lang['_08']}
                        onPress={() => { navigation.navigate(SCREENS.HELP_IMPROVE) }}
                        filled={true}
                        disabled={!isChecked}
                    />



                </View>
            </View>



        </Layout>
    )
}

export default LandingScreen


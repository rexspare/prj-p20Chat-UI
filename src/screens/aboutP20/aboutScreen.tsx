import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
    AnimatedCheckBox,
    BodyText,
    CustomSwitch,
    Layout,
    PrimaryHeader,
    PrimaryInput,
    If,
    PrimaryButton,
    TextButton,
    Label
} from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { SCREENS } from '../../assets/constants'
import DeleteAccountModal from '../../components/popups/DeleteAccuntModal'
import { View, Keyboard, Text, Image } from 'react-native'
import { COLORS, normalize } from '../../assets/stylesGuide'
import { IMAGES } from '../../assets/images'

const AUTO_LOCK_DATA = [
    { label: 'After 30 seconds', value: '1' },
    { label: 'After 60 seconds', value: '2' },
];

const AboutP20Screen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()




    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_187']}
            />
            <Layout fixed={true} containerStyle={{ paddingHorizontal: '4%', }}>

                {/* IMAGE */}
                <View style={styles.center}>
                    <Image
                        source={IMAGES.BRANDING}
                        resizeMode='contain'
                        style={styles.branding}
                    />
                    <Label style={styles.version}>P20 v1.1</Label>
                </View>

                <Label style={styles.version}>{lang['_188']}</Label>

                <TextButton
                    title={lang['_189']}
                    onPress={() => { }}
                    style={styles.btn}
                    textStyle={styles.btnTxt}
                />

                <TextButton
                    title={lang['_190']}
                    onPress={() => { }}
                    style={styles.btn}
                    textStyle={styles.btnTxt}
                />

                <TextButton
                    title={lang['_191']}
                    onPress={() => { }}
                    style={styles.btn}
                    textStyle={styles.btnTxt}
                />

            </Layout>

        </Layout>
    )
}

export default AboutP20Screen

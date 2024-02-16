import React, { useState, useEffect } from 'react'
import { Image, Keyboard, Text, View } from 'react-native'
import { COLORS, COMMON_STYLES, hp, normalize } from '../../assets/stylesGuide'
import { AnimatedCheckBox, AppHeader, BodyText, If, Label, Layout, PrimaryButton, PrimaryInput, TextButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { IMAGES } from '../../assets/images'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'
import { styles } from './styles'

const CreatePasswordScreen = () => {
    const { lang } = useAppConfig()
    const [isChecked, setisChecked] = useState<boolean>(false)
    const navigation = useNavigation()
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
    return (
        <Layout fixed={true}>
            <AppHeader />

            <Layout containerStyle={COMMON_STYLES.mainPad}>

                {/* IMAGE */}
                <Image
                    source={IMAGES.STEP_1}
                    resizeMode='contain'
                    style={styles.branding}
                />

                <View style={styles.center}>
                    <Label style={{ marginVertical: hp(1) }}>{lang['_19']}</Label>
                    <BodyText style={{}}>{lang['_20']}</BodyText>

                    <PrimaryInput
                        title={lang['_21']}
                        value={password}
                        onChange={(txt) => setpassword(txt)}
                        isPassword={true}
                    />

                    <PrimaryInput
                        title={lang['_22']}
                        value={confirmPassword}
                        onChange={(txt) => setconfirmPassword(txt)}
                        isPassword={true}
                    />
                </View>


            </Layout>

            {/* BUTTON CONTAINER */}
            <If condition={!keyboardStatus}>
                <View style={styles.btnConatiner}>

                    <View style={styles.row}>
                        <AnimatedCheckBox
                            checked={isChecked}
                            size={normalize(14)}
                            onPress={() => setisChecked(!isChecked)}
                            containerStyle={styles.checkBox}
                        />
                        <BodyText style={styles.txt}>{lang['_184']} <Text style={styles.btnTxt}>{lang['_185']}</Text> </BodyText>

                    </View>

                    <PrimaryButton
                        title={lang['_08']}
                        onPress={() => { navigation.navigate(SCREENS.RECOVERY_PHASE) }}
                        filled={true}
                        disabled={!isChecked}
                    />

                </View>
            </If>

        </Layout>
    )
}

export default CreatePasswordScreen

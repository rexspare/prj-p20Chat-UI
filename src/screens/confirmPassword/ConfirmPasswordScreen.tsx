import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Keyboard, Text, View } from 'react-native'
import { normalize } from '../../assets/stylesGuide'
import {
    AnimatedCheckBox,
    BodyText,
    CustomSwitch,
    If,
    Layout,
    PrimaryButton,
    PrimaryHeader,
    PrimaryInput
} from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'



const ConfirmPasswordScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isChecked, setisChecked] = useState<boolean>(false)
    const [isEnabled, setIsEnabled] = useState<boolean>(false)
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
            <PrimaryHeader
                title={lang['_195']}
            />
            <Layout containerStyle={{ paddingHorizontal: '4%', }}>

                <BodyText style={styles.title}>{lang['_200']}</BodyText>

                <BodyText style={styles.subtle}>{lang['_201']}</BodyText>

                <PrimaryInput
                    hideTitle={true}
                    placeholder={lang['_202']}
                    titleStyles={styles.titleStyles}
                    value={password}
                    onChange={(txt) => setpassword(txt)}
                    isPassword={true}
                />



            </Layout>

            {/* BUTTON CONTAINER */}
            <If condition={!keyboardStatus}>
                <View style={styles.btnConatiner}>

                    <PrimaryButton
                        title={lang['_203']}
                        onPress={() => { }}
                        filled={true}
                    />

                </View>
            </If>
        </Layout>
    )
}

export default ConfirmPasswordScreen

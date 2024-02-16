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

const AUTO_LOCK_DATA = [
    { label: 'After 30 seconds', value: '1' },
    { label: 'After 60 seconds', value: '2' },
];

const ChangePasswordScreen = () => {
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
                title={lang['_178']}
            />
            <Layout containerStyle={{ paddingHorizontal: '4%', }}>

                <BodyText style={styles.title}>{lang['_179']}</BodyText>

                <BodyText style={styles.subtle}>{lang['_180']}</BodyText>

                <PrimaryInput
                    title={lang['_181']}
                    titleStyles={styles.titleStyles}
                    value={password}
                    onChange={(txt) => setpassword(txt)}
                    isPassword={true}
                />

                <PrimaryInput
                    title={lang['_182']}
                    titleStyles={styles.titleStyles}
                    value={confirmPassword}
                    onChange={(txt) => setconfirmPassword(txt)}
                    isPassword={true}
                />

                <View style={styles.row}>
                    <BodyText>{lang['_183']}</BodyText>

                    <CustomSwitch
                        isEnabled={isEnabled}
                        setIsEnabled={setIsEnabled}
                        type2={true}
                        style={{ marginRight: 0 }}
                    />
                </View>

            </Layout>

            {/* BUTTON CONTAINER */}
            <If condition={!keyboardStatus}>
                <View style={styles.btnConatiner}>

                    <View style={styles.row1}>
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
                        onPress={() => { }}
                        filled={true}
                        disabled={!isChecked}
                    />

                </View>
            </If>
        </Layout>
    )
}

export default ChangePasswordScreen

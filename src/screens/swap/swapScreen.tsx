import React, { useEffect, useState } from 'react'
import { Keyboard, TouchableOpacity, View } from 'react-native'
import { SettingSmallIcon, SwapIcon2 } from '../../assets/icons'
import { COLORS, FONTS, normalize } from '../../assets/stylesGuide'
import {
    DropDownInput,
    Label,
    Layout,
    PrimaryButton,
    PrimaryHeader,
    TextButton,
    TransactionSettingModal,
    BodyText,
    Spacer,
    If
} from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'


const data = [
    { label: 'PVT-USD', value: '1' },
    { label: 'PVT-USD', value: '2' },
    { label: 'PVT-USD', value: '3' },
    { label: 'PVT-USD', value: '4' },
];

const SwapScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [isSettingModalOpen, setisSettingModalOpen] = useState(false)
    const [fromToken, setfromToken] = useState(null)
    const [fromAmount, setfromAmount] = useState('')
    const [toToken, settoToken] = useState(null)
    const [toAmount, settoAmount] = useState('')
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

    const isBtnEnabled = () => {
        if (fromAmount && fromToken != null && toAmount && toToken != null) {
            return true
        } else {
            return false
        }
    }


    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_102']}
                hideBackBtn={true}
            />
            <Layout fixed={true} containerStyle={{ paddingHorizontal: '5%' }}>

                <View style={styles.headingContainer}>
                    <Label style={styles.from}>{lang['_103']}</Label>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setisSettingModalOpen(true)}
                    >
                        <SettingSmallIcon height={normalize(16)} width={normalize(16)} />
                    </TouchableOpacity>
                </View>

                <DropDownInput
                    data={data}
                    inputvalue={fromAmount}
                    onChangeInput={(txt) => setfromAmount(txt)}
                    onChangeDropdown={(tkn) => setfromToken(tkn)}
                    keyboardType="numeric"

                />

                <SwapIcon2
                    width={normalize(28)}
                    height={normalize(28)}
                    style={styles.swapIcon}
                />

                <DropDownInput
                    data={data}
                    inputvalue={toAmount}
                    onChangeInput={(txt) => settoAmount(txt)}
                    onChangeDropdown={(tkn) => settoToken(tkn)}
                    keyboardType="numeric"
                />

                <If condition={isBtnEnabled()}>
                    <View style={styles.summaryContainer}>

                        <BodyText style={styles.summaryTxt}>{lang['_112']} <BodyText style={{
                            ...styles.summaryTxt,
                            ...styles.nextTxt
                        }}>0:30</BodyText></BodyText>


                        <View style={styles.summary}>
                            <Label style={styles.summaryHeading}>{lang['_113']}</Label>
                            <View style={styles.summaryVal}>
                                <BodyText style={styles.summaryTxt}>0.00042</BodyText>
                            </View>
                        </View>

                        <View style={styles.summary}>
                            <Label style={styles.summaryHeading}>{lang['_114']}</Label>
                            <View style={styles.summaryVal}>
                                <BodyText style={styles.summaryTxt}>0.00042</BodyText>
                            </View>
                        </View>


                        <View style={styles.summary}>
                            <Label style={styles.summaryHeading}>{lang['_115']}</Label>
                            <View style={styles.summaryVal2}>

                                <BodyText style={styles.summaryTxt2}>0.00987 ETH</BodyText>
                                <BodyText style={{
                                    ...styles.summaryTxt2,
                                    fontFamily: FONTS.MEDIUM
                                }}>$3.54</BodyText>

                            </View>
                        </View>

                        <View style={styles.summary}>
                            <View style={styles.summaryHeading}></View>
                            <View style={styles.summaryVal2}>

                                <BodyText style={{
                                    ...styles.summaryTxt2,
                                    fontSize: normalize(9)
                                }}>{lang['_116']}</BodyText>

                                <BodyText style={{
                                    ...styles.summaryTxt2,
                                    fontSize: normalize(9)
                                }}>$14.54</BodyText>

                            </View>
                        </View>

                    </View>
                </If>

                {/* BUTTON CONTAINER */}
                <If condition={keyboardStatus == false}>
                    <View style={styles.absoluteConatiner}>

                        <TextButton
                            title={lang['_104']}
                            onPress={() => { }}
                            textStyle={styles.txtBntTxt}
                        />

                        <PrimaryButton
                            title={lang['_102']}
                            onPress={() => navigation.navigate(SCREENS.SWAP_SUCCESS)}
                            filled={true}
                            disabled={!isBtnEnabled()}
                        />
                    </View>
                </If>
            </Layout>

            <TransactionSettingModal
                isVisible={isSettingModalOpen}
                onClose={() => setisSettingModalOpen(false)}
            />

        </Layout>
    )
}

export default SwapScreen

import React, { useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { CaretDown, CaretUp, CopyIcon, EtheIcon, P20ChainIcon, PvtUsdIcon, QRIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { BodyText, If, Label, Layout, PrimaryButton, PrimaryDropDown, PrimaryHeader, PrimaryInput, SelectedAccount, SendInput, SubAccountItem } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { COLORS, hp, normalize } from '../../assets/stylesGuide'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'

const data = [
    { label: 'Etherium', value: '1', icon: <EtheIcon /> },
    { label: 'PVT-USD', value: '2', icon: <PvtUsdIcon /> },
    { label: 'P20 Chain', value: '3', icon: < P20ChainIcon /> },
];


const BridgeScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [fromNetwork, setfromNetwork] = useState<any>(null)
    const [sendToken, setsendToken] = useState<any>(null)
    const [sendText, setsendText] = useState("")
    const [toNetwork, settoNetwork] = useState<any>(null)
    const [recieveToken, setrecieveToken] = useState<any>(null)
    const [recieveText, setrecieveText] = useState("")


    const enableBtn = () => {
        if (sendText != '' &&
            sendToken != null &&
            recieveText != '' &&
            recieveToken != null &&
            fromNetwork != null &&
            toNetwork != null) {
            return true
        } else {
            return false
        }
    }


    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_204']}
            />

            <Layout fixed={true} containerStyle={{ paddingHorizontal: '5%' }}>
                <PrimaryDropDown
                    data={data}
                    enableSearch={false}
                    onChangeDropdown={(val) => setfromNetwork(val)}
                    title={lang['_205']}
                />

                <PrimaryDropDown
                    data={data}
                    enableSearch={false}
                    title={lang['_206']}
                    onChangeDropdown={(val) => setsendToken(val)}
                    onChangeInput={(txt) => setsendText(txt)}
                    hasInput={sendToken == null ? false : true}
                    keyboardType={"number-pad"}
                />

                <PrimaryDropDown
                    data={data}
                    enableSearch={false}
                    onChangeDropdown={(val) => settoNetwork(val)}
                    title={lang['_207']}

                />

                <PrimaryDropDown
                    data={data}
                    enableSearch={false}
                    title={lang['_208']}
                    onChangeDropdown={(val) => setrecieveToken(val)}
                    onChangeInput={(txt) => setrecieveText(txt)}
                    hasInput={recieveToken == null ? false : true}
                    keyboardType={"number-pad"}
                />

                {/* SUMMARY */}
                <If condition={enableBtn()}>
                    <View style={styles.summary}>

                        <View style={styles.summaryContainer}>
                            <BodyText>{lang['_210']}</BodyText>
                            <Label style={styles.summaryHeading}>30.000 PVT-USD</Label>
                        </View>

                        <BodyText style={styles.summarySubtle}>Includes a 0.875% P20 fee</BodyText>

                    </View>
                </If>


                <View style={styles.btnContainer}>
                    <PrimaryButton
                        title={lang['_209']}
                        filled={true}
                        disabled={!enableBtn()}
                        onPress={() => { }}
                    />

                </View>

            </Layout>

        </Layout>
    )
}

export default BridgeScreen

import React, { useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { CaretDown, CaretUp, CopyIcon, CrossIcon, QRIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { AccountModal, AssetModal, BodyText, If, Label, Layout, PrimaryButton, PrimaryHeader, PrimaryInput, SelectedAccount, SendInput, SubAccountItem } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { COLORS, hp, normalize } from '../../assets/stylesGuide'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../../assets/constants'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const ACCOUNTSLIST = [
    {
        id: 1,
        name: 'Account XYZ',
        color: COLORS.PURPLE,
        uid: "Ex07878812mx98adsai1259Xvq5"
    },
    {
        id: 2,
        name: 'P20Chair',
        color: COLORS.PARROT,
        uid: "Ex07878812mx98adsai1259Xvq5"
    },
    {
        id: 3,
        name: 'Sam',
        color: COLORS.PINK,
        uid: "Ex07878812mx98adsai1259Xvq5"
    },
]


const SendScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [searchValue, setsearchValue] = useState('')
    const [selectedAccount, setselectedAccount] = useState<any>(null)
    const [selectedAsset, setselectedAsset] = useState<any>(null)
    const [amount, setamount] = useState('')
    const [gasPrice, setgasPrice] = useState('')
    const [gasLimit, setgasLimit] = useState('')
    const [isAccountModalVisible, setisAccountModalVisible] = useState(false)
    const [isAssetModalVisible, setisAssetModalVisible] = useState(false)

    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_89']}
            />

            <If condition={selectedAccount == null}>
                <Layout fixed={true} containerStyle={{ paddingHorizontal: '5%' }}>

                    <PrimaryInput
                        hideTitle={true}
                        placeholder={lang['_90']}
                        value={searchValue}
                        onChange={(txt) => setsearchValue(txt)}
                        renderRightIcon={<QRIcon />}
                        isPassword={true}
                        containerStyles={{ marginTop: hp(3) }}
                    />

                    <View style={styles.absoluteContainer}>
                        <PrimaryButton
                            title={lang['_216']}
                            filled={true}
                            onPress={() => setselectedAccount(ACCOUNTSLIST[0])}

                        />
                    </View>


                </Layout>
            </If>

            <If condition={selectedAccount != null}>
                <Layout containerStyle={{ paddingHorizontal: '5%' }}>

                    <PrimaryInput
                        title={lang["_212"]}
                        editable={false}
                        value={"Ex07878812mx98adsai1259Xvq5"}
                        inputStyles={{ color: COLORS.SECONDARY, fontSize: normalize(10), }}
                        renderRightIcon={<EvilIcons
                            name={'close'}
                            color={COLORS.BLACK}
                            size={normalize(16)}
                        />}
                        isPassword={true}
                        onPressRightIcon={() => setselectedAccount(null)}
                    />

                    {/* ACCOUNTS FIELD */}
                    <BodyText style={styles.title}>{lang["_214"]}</BodyText>
                    <SelectedAccount
                        item={selectedAccount}
                        onPress={() => setisAccountModalVisible(true)}
                    />

                    {/* ASSETS FIELD */}
                    <View style={[styles.field]}>
                        <BodyText style={styles.fieldTitle}>{lang['_92']}</BodyText>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[styles.fieldContainer]}
                            onPress={() => setisAssetModalVisible(true)}
                        >
                            {selectedAsset?.id &&
                                <Image
                                    source={selectedAsset?.icon}
                                    style={styles.fieldIcon}
                                />
                            }

                            <View style={styles.txtContainer}>
                                <BodyText style={styles.txt1}>{selectedAsset?.name || lang["_215"]}</BodyText>
                                {selectedAsset?.id &&
                                    <BodyText style={styles.subTxt1}>Balance: <BodyText style={styles.subTxt2}>569.2455</BodyText></BodyText>
                                }
                            </View>

                            <AntDesign
                                name={'right'}
                                color={COLORS.BLACK}
                                size={normalize(10)}
                            />
                        </TouchableOpacity>

                    </View>


                    {/* Amount: FIELD */}
                    <PrimaryInput
                        title={lang['_93']}
                        value={amount}
                        renderRightIcon={
                            <BodyText style={styles.txt3}>{selectedAsset?.shortName}</BodyText>
                        }
                        isPassword={true}
                        onChange={(txt) => setamount(txt)}
                        keyBoardType={"number-pad"}
                    />

                    <PrimaryInput
                        title={lang['_94']}
                        titleStyles={styles.fieldTitle}
                        isPassword={true}
                        keyBoardType={"number-pad"}
                        value={gasPrice}
                        containerStyles={{ marginBottom: 0 }}
                        onChange={(txt) => setgasPrice(txt)}
                        renderRightIcon={<View>
                            <TouchableOpacity>
                                <CaretUp width={normalize(10)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CaretDown width={normalize(10)} />
                            </TouchableOpacity>
                        </View>}
                    />

                    <PrimaryInput
                        title={lang['_95']}
                        titleStyles={styles.fieldTitle}
                        isPassword={true}
                        keyBoardType={"number-pad"}
                        value={gasLimit}
                        containerStyles={{ marginBottom: 0 }}
                        onChange={(txt) => setgasLimit(txt)}
                        renderRightIcon={<View>
                            <TouchableOpacity>
                                <CaretUp width={normalize(10)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <CaretDown width={normalize(10)} />
                            </TouchableOpacity>
                        </View>}
                    />

                    {/* SUMMARY */}
                    <View style={styles.summary}>
                        <Label style={styles.summaryHeading}>{lang['_96']}</Label>
                        <View style={styles.summaryVal}>
                            <BodyText style={styles.summaryTxt}>0.00042</BodyText>
                            <BodyText style={{ ...styles.summaryTxt, color: COLORS.TEXT }}>0.00042 PVT-USD</BodyText>
                            <BodyText style={styles.summaryTxt}>{`${lang['_100']} 0.00042 PVT-USD`}</BodyText>
                        </View>

                    </View>

                    {/* BUTTONS */}

                    <View style={{ marginTop: hp(8) }}>
                        <PrimaryButton
                            title={lang['_97']}
                            onPress={() => navigation.goBack()}
                        />

                        <PrimaryButton
                            title={lang['_98']}
                            filled={true}
                            onPress={() => navigation.navigate(SCREENS.SEND_SUMMARY)}
                        />

                    </View>

                </Layout>
            </If>

            <AccountModal
                isVisible={isAccountModalVisible}
                onClose={() => setisAccountModalVisible(false)}
                btnTitle={lang["_213"]}
            />

            <AssetModal
                isVisible={isAssetModalVisible}
                onClose={() => setisAssetModalVisible(false)}
                onSelect={setselectedAsset}
            />

        </Layout>
    )
}

export default SendScreen

import React, { useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { CopyIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { BodyText, If, Layout, PrimaryButton, PrimaryHeader, RecieveTokenItem } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { TOKENS } from '../../data'




const RecieveScreen = () => {
    const navigation = useNavigation()
    const { lang } = useAppConfig()
    const [selectedToken, setselectedToken] = useState<any>(null)
    const [showAddress, setshowAddress] = useState(false)


    const handleNext = () => {
        if (selectedToken != null) {
            setshowAddress(true)
        }
    }

    return (
        <Layout fixed={true}>
            <PrimaryHeader
                title={lang['_82']}
                backPress={() => showAddress == true ? setshowAddress(false) : navigation.goBack()}
            />

            <If condition={!showAddress}>
                <FlatList
                    data={TOKENS}
                    contentContainerStyle={{
                        paddingHorizontal: '5%'
                    }}
                    renderItem={({ item, index }) => (
                        <RecieveTokenItem
                            item={item}
                            index={index}
                            onselect={() => setselectedToken(item)}
                            selected={selectedToken}
                        />
                    )}
                />
            </If>


            <If condition={showAddress}>
                <BodyText style={styles.txt}>{`${lang['_222']} ${selectedToken?.shortName} ${lang['_223x']}`}</BodyText>

                <Image
                    source={IMAGES.QR}
                    style={styles.qr}
                />

                <BodyText style={styles.subtle}>{`${lang['_85']} ${selectedToken?.shortName}`}</BodyText>


                <View style={styles.addessContainer}>
                    <BodyText
                        style={styles.address}
                        numberOfLines={1}>n2e5dirgMNYdQskffdfxftchgve45P5zj39VYemXareK4C</BodyText>
                </View>

                <View style={styles.btnConatiner}>

                    <PrimaryButton
                        title={lang['_86']}
                        onPress={() => { }}
                        filled={true}
                        style={styles.generateBtn}
                        textStyle={styles.btnTxt}
                    />

                    <PrimaryButton
                        title={lang['_87']}
                        onPress={() => { }}
                        style={styles.copyBtn}
                        textStyle={styles.btnTxt}
                        icon={<CopyIcon />}
                    />
                </View>

            </If>
            {/* BUTTON CONTAINER */}
            <View style={styles.absoluteConatiner}>

                <PrimaryButton
                    title={showAddress ? lang['_88'] : lang['_211']}
                    onPress={() => { showAddress == false ? handleNext() : null }}
                    filled={true}
                    disabled={selectedToken == null}
                />
            </View>

        </Layout>
    )
}

export default RecieveScreen

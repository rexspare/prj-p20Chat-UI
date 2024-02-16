import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, Keyboard, View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { IMAGES } from '../../assets/images'
import { COMMON_STYLES } from '../../assets/stylesGuide'
import { AppHeader, BodyText, If, Label, Layout, PhraseInputItem, PrimaryButton } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import { styles } from './styles'

const LIST_DATA = [
    {
        id: 1,
        text: ''
    },
    {
        id: 2,
        text: ''
    },
    {
        id: 3,
        text: ''
    },
    {
        id: 4,
        text: ''
    },
    {
        id: 5,
        text: ''
    },
    {
        id: 6,
        text: ''
    },
    {
        id: 7,
        text: ''
    },
    {
        id: 8,
        text: ''
    },
    {
        id: 9,
        text: ''
    },
    {
        id: 10,
        text: ''
    },
    {
        id: 11,
        text: ''
    },
    {
        id: 12,
        text: ''
    },
]

const ConfirmPhaseScreen = () => {
    const { lang } = useAppConfig()
    const navigation = useNavigation()
    const [keyboardStatus, setKeyboardStatus] = useState<boolean>(false);
    const [listData, setlistData] = useState(LIST_DATA)

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
                    source={IMAGES.STEP_3}
                    resizeMode='contain'
                    style={styles.branding}
                />

                <View style={styles.center}>
                    <Label style={styles.heading}>{lang['_25']}</Label>
                    <BodyText style={{ paddingHorizontal: '5%' }}>{lang['_26']}</BodyText>

                    <View style={styles.listContainer}>

                        {
                            listData.map((item, index) => (
                                <PhraseInputItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    list={listData}
                                    setlist={setlistData}
                                />
                            ))
                        }

                    </View>
                </View>


            </Layout>

            {/* BUTTON CONTAINER */}
            <If condition={!keyboardStatus}>
                <View style={styles.btnConatiner}>

                    <PrimaryButton
                        title={lang['_32']}
                        onPress={() => {
                            navigation.navigate(SCREENS.WALLET_SUCCES)
                        }}
                        filled={true}
                    />
                </View>
            </If>

        </Layout>
    )
}

export default ConfirmPhaseScreen

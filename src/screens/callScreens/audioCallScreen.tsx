import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, ImageBackground, StatusBar, View } from 'react-native'
import { BackIcon, CallAcceptIcon, CallDeclineIcon, CallMicIcon, CallMsgIcon, CallSpeakerIcon, CallVidIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { COLORS, COMMON_STYLES, hp } from '../../assets/stylesGuide'
import { BodyText, Layout, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import SwipeButton from 'rn-swipe-button';
import { BlurView } from '@react-native-community/blur'
import { inboxStateSelectors, useInbox } from '../../states/inbox'

const AudioCallScreen = () => {
    const { lang, theme } = useAppConfig()
    const { keyboardStatus } = useKeyboard()
    const navigation = useNavigation()
    const styles = styles_(theme)

    const openedChat = useInbox(inboxStateSelectors.openedChat)
    const [isOngoingCall, setisOngoingCall] = useState(false)


    const handleBackPress = () => {
        navigation.goBack()
    }

    const renderThumb = () => (
        <CallAcceptIcon
            width={hp(6.2)}
            height={hp(6.2)}
        />)

    return (
        <>
            <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
            <Layout fixed={true}>

                <ImageBackground
                    source={{ uri: "https://picsum.photos/700/700" }}
                    style={styles.main}
                    resizeMode='cover'
                    blurRadius={2}
                >
                    {/* HEADER */}
                    <View style={styles.header}>
                        <TouchableCustom
                            onPress={() => handleBackPress()}
                        >
                            <BackIcon
                                fill={COLORS.WHITE}
                                width={hp(2.4)}
                                height={hp(2)}

                            />
                        </TouchableCustom>
                    </View>


                    {/* USER */}

                    <View style={styles.context}>

                        <Image
                            source={openedChat.avatar}
                            style={styles.avatar}
                        />

                        <BodyText style={styles.txt}>{openedChat?.name}</BodyText>
                        <BodyText style={styles.txt1}>{isOngoingCall ? '01:43' : lang['_206']}</BodyText>

                    </View>



                    {/* BUTTONS */}
                    {
                        isOngoingCall ?
                            <View style={styles.bottomcontainer}>

                                <ImageBackground
                                    source={IMAGES.BLUR_BIG}
                                    style={styles.imageBg}
                                >

                                    <View style={styles.row}>

                                        <CallMicIcon
                                            width={hp(6.2)}
                                            height={hp(6.2)}
                                        />
                                        <CallSpeakerIcon
                                            width={hp(6.2)}
                                            height={hp(6.2)}
                                        />
                                        <CallVidIcon
                                            width={hp(6.2)}
                                            height={hp(6.2)}
                                        />
                                        <CallMsgIcon
                                            width={hp(6.2)}
                                            height={hp(6.2)}
                                        />

                                    </View>

                                    <View style={styles.row}>

                                        <CallDeclineIcon
                                            width={hp(6.2)}
                                            height={hp(6.2)}
                                        />

                                    </View>


                                </ImageBackground>

                            </View>
                            :
                            // INCOMMING
                            <View style={styles.incomingContainer}>

                                <View style={COMMON_STYLES.flexRowSpaceBetween}>
                                    <CallMsgIcon
                                        width={hp(6.2)}
                                        height={hp(6.2)}
                                    />

                                    <CallDeclineIcon
                                        width={hp(6.2)}
                                        height={hp(6.2)}
                                    />


                                </View>

                                <SwipeButton
                                    containerStyles={styles.swiper}
                                    height={hp(6)}
                                    onSwipeFail={() => { }}
                                    onSwipeStart={() => { }}
                                    onSwipeSuccess={() => setisOngoingCall(true)}
                                    railBackgroundColor="rgba(255, 255, 255, 0.2)"
                                    thumbIconWidth={hp(6)}
                                    thumbIconComponent={renderThumb}
                                    thumbIconStyles={{ borderWidth: 0 }}
                                    railStyles={{ borderWidth: 0, backgroundColor: COLORS.TRANSPARENT }}
                                    title={lang['_205']}
                                    titleStyles={styles.swiperTxt}
                                />

                            </View>
                    }
                </ImageBackground>



            </Layout>
        </>
    )
}

export default AudioCallScreen

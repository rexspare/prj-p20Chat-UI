import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, ImageBackground, StatusBar, View } from 'react-native'
import { AppHeader, ContactItem, Layout, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { inboxStateSelectors, useInbox } from '../../states/inbox'
import { styles as styles_ } from './styles'
import { SCREENS } from '../../assets/constants'
import { BackIcon, CallDeclineIcon, CallMicIcon, CallMsgIcon, CallSpeakerIcon, CallVidIcon } from '../../assets/icons'
import { COLORS, hp } from '../../assets/stylesGuide'
import { RNCamera } from 'react-native-camera';
import { IMAGES } from '../../assets/images'


const VideoCallScreen = () => {
    const { lang, theme } = useAppConfig()
    const { keyboardStatus } = useKeyboard()
    const navigation = useNavigation()

    const styles = styles_(theme)

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <>
            <StatusBar backgroundColor={theme.PRIMARY_TO_BLACK} barStyle={'light-content'} />
            <Layout fixed={true}>
                <ImageBackground
                    source={{ uri: "https://picsum.photos/700/700" }}
                    style={styles.main}
                    resizeMode='cover'
                >

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

                        <View style={styles.cameraContainer}>
                            <RNCamera
                                type={RNCamera.Constants.Type.front}
                                captureAudio={true}
                                style={styles.camera}
                                androidCameraPermissionOptions={{
                                    title: 'Permission to use camera',
                                    message: 'We need your permission to use your camera',
                                    buttonPositive: 'Ok',
                                    buttonNegative: 'Cancel',
                                }}
                            >
                            </RNCamera>
                        </View>

                    </View>


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

                </ImageBackground>

            </Layout>
        </>
    )
}

export default VideoCallScreen

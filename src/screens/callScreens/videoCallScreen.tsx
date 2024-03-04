import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { ImageBackground, StatusBar, View } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { BackIcon, CallDeclineIcon, CallMicIcon, CallMsgIcon, CallSpeakerIcon, CallVidIcon } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { COLORS, hp } from '../../assets/stylesGuide'
import { Layout, TouchableCustom } from '../../components'
import useAppConfig from '../../hooks/AppConfig'
import useKeyboard from '../../hooks/Keyboard'
import { styles as styles_ } from './styles'
import Feather from 'react-native-vector-icons/Feather'
import { SCREENS } from '../../assets/constants'

const VideoCallScreen = () => {
    const { lang, theme } = useAppConfig()
    const { keyboardStatus } = useKeyboard()
    const navigation = useNavigation()
    const cameraRef = useRef<RNCamera>(null)

    const styles = styles_(theme)

    const [isCamOn, setisCamOn] = useState(true)
    const [isSpeakerOn, setisSpeakerOn] = useState(true)
    const [isMicOn, setisMicOn] = useState(true)

    const handleBackPress = () => {
        navigation.goBack()
    }

    const handleMessage = () => {
        navigation.navigate(SCREENS.CHAT)
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
                            {
                                isCamOn ?
                                    <RNCamera
                                        ref={cameraRef}
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
                                    :
                                    <View style={styles.camera}>
                                        <Feather
                                            name='camera-off'
                                            size={hp(3)}
                                            color={COLORS.WHITE}
                                        />
                                    </View>
                            }
                        </View>

                    </View>


                    <View style={styles.bottomcontainer}>

                        <ImageBackground
                            source={IMAGES.BLUR_BIG}
                            style={styles.imageBg}
                            imageStyle={styles.imgRadius}
                        >

                            <View style={styles.row}>

                                <TouchableCustom
                                    onPress={() => setisMicOn((prevState) => !prevState)}
                                    style={styles.iconContainer}>
                                    <CallMicIcon
                                        width={hp(6.2)}
                                        height={hp(6.2)}
                                    />
                                    {!isMicOn && <View style={styles.line}></View>}
                                </TouchableCustom>


                                <TouchableCustom
                                    onPress={() => setisSpeakerOn((prevState) => !prevState)}
                                    style={styles.iconContainer}>
                                    <CallSpeakerIcon
                                        width={hp(6.2)}
                                        height={hp(6.2)}
                                    />
                                    {!isSpeakerOn && <View style={styles.line}></View>}
                                </TouchableCustom>

                                <TouchableCustom
                                    onPress={() => setisCamOn((prevState) => !prevState)}
                                    style={styles.iconContainer}>
                                    <CallVidIcon
                                        width={hp(6.2)}
                                        height={hp(6.2)}
                                    />
                                    {!isCamOn && <View style={styles.line}></View>}
                                </TouchableCustom>


                                <CallMsgIcon
                                    width={hp(6.2)}
                                    height={hp(6.2)}
                                    onPressIn={() => handleMessage()}
                                />

                            </View>

                            <View style={styles.row}>

                                <CallDeclineIcon
                                    width={hp(6.2)}
                                    height={hp(6.2)}
                                    onPressIn={() => navigation.goBack()}
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

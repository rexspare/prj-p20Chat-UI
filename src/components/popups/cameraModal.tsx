import React, { FC, useRef, useState } from 'react';
import { ImageBackground, Modal, StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Feather from 'react-native-vector-icons/Feather';
import { BodyText, TouchableCustom } from '..';
import { FlashIcon, GalleryCamIcon, SwitchCamIcon } from '../../assets/icons';
import { IMAGES } from '../../assets/images';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';


interface cameraProps {
    isVisible: boolean;
    onClose: Function;
    openGalleryView: Function;
}


const CameraModal: FC<cameraProps> = (props) => {
    const {
        isVisible,
        onClose = () => { },
        openGalleryView = () => { },
    } = props
    const { lang, theme } = useAppConfig()
    const newMessage = useInbox(inboxStateSelectors.newMessage)
    const setnewMessage = useInbox(inboxStateSelectors.setnewMessage)

    const cameraRef = useRef<RNCamera | null>(null);
    const [mode, setmode] = useState<'photo' | 'video'>('photo')
    const [frontCam, setfrontCam] = useState(false)
    const [flashMode, setflashMode] = useState(false)

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const options = { quality: 0.8 };
                const data = await cameraRef.current.takePictureAsync(options);
                if (data?.uri) {
                    setnewMessage({ ...newMessage, media: data?.uri })
                    onClose()
                    setTimeout(() => {
                        openGalleryView()
                    }, 500);
                }
            } catch (error) {

            }
        }
    };


    const styles = styles_(theme)


    return (
        <Modal
            visible={isVisible}
            onRequestClose={() => onClose()}
            transparent={true}
            animationType='slide'
            style={{ flex: 1 }}
        >
            <View style={styles.main}>
                <RNCamera
                    ref={cameraRef}
                    flashMode={flashMode ? 'auto' : 'off'}
                    type={frontCam ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                    captureAudio={true}
                    style={styles.camera}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >

                    {/* HEADER */}
                    <View style={styles.row}>
                        <TouchableCustom
                            onPress={() => onClose()}
                        >
                            <Feather
                                name='x'
                                color={COLORS.WHITE}
                                size={hp(3)}
                            />
                        </TouchableCustom>

                        <TouchableCustom
                            onPress={() => setflashMode(!flashMode)}
                        >
                            <FlashIcon
                                width={hp(4)}
                                height={hp(4)}
                            />
                        </TouchableCustom>
                    </View>


                    {/* BUTTONS */}
                    <View style={styles.container}>

                        <View style={styles.modeContainer}>
                            <TouchableCustom
                                onPress={() => setmode('photo')}
                            >
                                <BodyText style={mode == 'photo' ? styles.txt : styles.txt1}>{lang['_201']}</BodyText>
                            </TouchableCustom>

                            <TouchableCustom
                                onPress={() => setmode('video')}
                            >
                                <BodyText style={mode == 'video' ? styles.txt : styles.txt1}>{lang['_202']}</BodyText>
                            </TouchableCustom>
                        </View>

                        <ImageBackground
                            source={IMAGES.BLUR}
                            style={styles.image}
                            imageStyle={styles.imgRadius}

                        >

                            <GalleryCamIcon width={hp(3)} height={hp(3)} />

                            <TouchableCustom
                                style={styles.outerRing}
                                onPress={() => { }}
                            >
                                <View style={[styles.innerCircle, {
                                    backgroundColor: mode == 'photo' ? COLORS.WHITE : COLORS.RED
                                }]}></View>
                            </TouchableCustom>

                            <SwitchCamIcon
                                onPress={() => setfrontCam(!frontCam)}
                                width={hp(3)}
                                height={hp(3)} />

                        </ImageBackground>
                    </View>


                </RNCamera>
            </View>

        </Modal>
    )
}

export default CameraModal

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: theme.BACKGROUND,
    },
    camera: {
        width: '100%',
        height: '100%'
    },
    container: {
        position: 'absolute',
        bottom: 0,
    },
    image: {
        width: wp(100),
        height: hp(12.2),
        opacity: 0.9,
        resizeMode: 'cover',
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: '15%'
    },
    imgRadius: {
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        minHeight: hp(6),
        marginTop: (isIOS() && hasNotch()) ? 70 : hp(2),
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%'
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    modeContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        alignSelf: 'center',
        marginBottom: hp(1)
    },
    txt: {
        fontFamily: FONTS.BOLD,
        fontSize: FONT_SIZE._14,
        color: COLORS.WHITE,
        marginHorizontal: 5
    },
    txt1: {
        fontFamily: FONTS.LIGHT,
        fontSize: FONT_SIZE._14,
        color: COLORS.WHITE,
        marginHorizontal: 5
    },
    outerRing: {
        width: hp(6),
        height: hp(6),
        borderWidth: 3,
        borderRadius: hp(6),
        ...COMMON_STYLES.center_,
        borderColor: COLORS.WHITE
    },
    innerCircle: {
        width: '85%',
        height: '85%',
        borderRadius: hp(6),
    }
})
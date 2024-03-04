import React, { FC, useEffect, useState } from 'react';
import { Image, ImageBackground, Modal, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Feather from 'react-native-vector-icons/Feather';
import { BodyText, If, TouchableCustom } from '..';
import { AddImageIcon, SendMsgIcon } from '../../assets/icons';
import { IMAGES } from '../../assets/images';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import useAppConfig from '../../hooks/AppConfig';
import { ITHEME } from '../../models/config';
import { inboxStateSelectors, useInbox } from '../../states/inbox';
import { hasNotch, isDeviceTablet, isIOS } from '../../utils/myUtils';

interface galleryProps {
    isVisible: boolean;
    onClose: Function;
    imageUri: string;
}


const GalleryModal: FC<galleryProps> = (props) => {
    const {
        isVisible,
        onClose = () => { },
        imageUri
    } = props
    const { lang, theme } = useAppConfig()
    const newMessage = useInbox(inboxStateSelectors.newMessage)
    const setnewMessage = useInbox(inboxStateSelectors.setnewMessage)
    const openedChat = useInbox(inboxStateSelectors.openedChat)

    const [images, setimages] = useState<any[]>([])
    const [selectedImage, setselectedImage] = useState('')

    const styles = styles_(theme)

    useEffect(() => {
        setselectedImage(imageUri)
        setimages([imageUri])
    }, [imageUri])

    const handleChange = (txt: string) => {
        setnewMessage({ ...newMessage, text: txt })
    }

    const addImage = () => {
        ImagePicker.openPicker({
            cropping: true
        }).then(image => {
            setimages([...images, image.path])
        })
            .catch(() => { })
    }

    return (
        <Modal
            visible={isVisible}
            onRequestClose={() => onClose()}
            transparent={true}
            animationType='slide'
            style={{ flex: 1 }}
        >
            <If condition={imageUri}>
                <ImageBackground
                    source={{ uri: selectedImage }}
                    resizeMode='cover'
                    style={styles.main}>

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

                        <BodyText style={styles.txt}>{`${lang['_203']} ${openedChat?.name}`}</BodyText>

                        <View></View>
                    </View>


                    {/* BUTTONS */}

                    <View style={styles.container}>

                        <View style={styles.imagesRow}>
                            <ScrollView
                                horizontal
                            >
                                {
                                    images.map((item, index) => (
                                        <TouchableCustom
                                            key={index}
                                            onPress={() => setselectedImage(item)}
                                        >
                                            <Image
                                                source={{ uri: item }}
                                                style={styles.imageTile}
                                            />
                                        </TouchableCustom>
                                    ))
                                }
                                <TouchableCustom
                                    onPress={() => addImage()}
                                    style={styles.imageTile}>
                                    <AddImageIcon width={hp(3.3)} height={hp(3.3)} />
                                </TouchableCustom>
                            </ScrollView>

                        </View>

                        <ImageBackground
                            source={IMAGES.BLUR}
                            style={styles.image}
                            imageStyle={styles.imgRadius}
                        >

                            <TextInput
                                placeholder={lang['_204']}
                                placeholderTextColor={COLORS.BLACK}
                                value={newMessage?.text}
                                onChangeText={(txt) => handleChange(txt)}
                                style={styles.input}
                            />

                            <TouchableCustom
                                style={styles.sendBtn}
                            >
                                <SendMsgIcon
                                    fill={COLORS.WHITE}
                                    width={hp(2.36)}
                                    height={hp(2.36)}
                                />
                            </TouchableCustom>

                        </ImageBackground>
                    </View>

                </ImageBackground>
            </If>

        </Modal>
    )
}

export default GalleryModal

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
        borderTopLeftRadius: hp(3),
        borderTopRightRadius: hp(3),
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: '5%'
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
    input: {
        flex: 1,
        height: hp(6.43),
        borderRadius: hp(6.43),
        backgroundColor: COLORS.WHITE,
        marginRight: 5,
        paddingHorizontal: 15,
        color: COLORS.BLACK,
        fontWeight: '400',
        fontSize: FONT_SIZE._16
    },
    sendBtn: {
        width: hp(6.43),
        height: hp(6.43),
        borderRadius: hp(6.43),
        backgroundColor: COLORS.SECONDARY,
        ...COMMON_STYLES.center_
    },
    txt: {
        fontWeight: '700',
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE,
    },
    imagesRow: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: hp(1)
    },
    imageTile: {
        width: hp(5.79),
        height: hp(5.79),
        borderRadius: hp(1),
        borderWidth: 1,
        ...COMMON_STYLES.center_,
        borderColor: COLORS.WHITE,
        marginHorizontal: 5
    }
})
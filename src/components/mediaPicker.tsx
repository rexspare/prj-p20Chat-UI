import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { COLORS, FONT_SIZE, hp, wp } from '../assets/stylesGuide'
import useAppConfig from '../hooks/AppConfig'
import { MediaCamera, MediaContact, MediaCrypto, MediaDocument, MediaGallery, MediaLocation } from '../assets/icons'
import { ITHEME } from '../models/config'
import { BodyText } from '.'
import { inboxStateSelectors, useInbox } from '../states/inbox'
import DocumentPicker from 'react-native-document-picker'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../assets/constants'
import { CameraModal, GalleryModal } from './popups'
import ImagePicker from 'react-native-image-crop-picker';
interface mediaPickerProps {

}

const MediaPicker: FC<mediaPickerProps> = (props) => {
    const {

    } = props
    const { lang, theme } = useAppConfig()
    const navigation = useNavigation()
    const styles = styles_(theme)

    const newMessage = useInbox(inboxStateSelectors.newMessage)
    const setnewMessage = useInbox(inboxStateSelectors.setnewMessage)

    const [cameraVisible, setcameraVisible] = useState(false)
    const [galleryVisible, setgalleryVisible] = useState(false)
    const [image, setimage] = useState('')

    const actionList = [
        {
            id: 1,
            name: lang['_54'],
            icon: <MediaDocument
                fill={theme.PRIMARY_TO_WHITE}
            />,
            onPress: () => {
                DocumentPicker.pickSingle({
                    type: [
                        DocumentPicker.types.pdf,
                        DocumentPicker.types.audio,
                        DocumentPicker.types.csv,
                        DocumentPicker.types.doc,
                        DocumentPicker.types.docx,
                        DocumentPicker.types.plainText,
                        DocumentPicker.types.ppt,
                        DocumentPicker.types.pptx,
                        DocumentPicker.types.xls,
                        DocumentPicker.types.xlsx,
                        DocumentPicker.types.zip,
                    ]
                })
                    .then((doc) => {
                        console.log(doc);

                    })
                    .catch(() => { })
            }
        },
        {
            id: 2,
            name: lang['_55'],
            icon: <MediaCamera
                fill={theme.PRIMARY_TO_WHITE}
            />,
            onPress: () => setcameraVisible(true)
        },
        {
            id: 3,
            name: lang['_56'],
            icon: <MediaGallery
                fill={theme.PRIMARY_TO_WHITE}
            />,
            onPress: () => {
                ImagePicker.openPicker({
                    cropping: true
                }).then(image => {
                    console.log(image);
                    setimage(image.path)
                    setnewMessage({ ...newMessage, media: image.path })
                    setgalleryVisible(true)
                })
                    .catch(() => { })
            }
        },
        {
            id: 4,
            name: lang['_57'],
            icon: <MediaCrypto
                fill={theme.PRIMARY_TO_WHITE}
            />,
            onPress: () => {
                // navigation.navigate(SCREENS.WALLET, {
                //     screen: SCREENS.SEND
                // })
            }
        },
        {
            id: 5,
            name: lang['_58'],
            icon: <MediaLocation
                fill={theme.PRIMARY_TO_WHITE}
            />
        },
        {
            id: 1,
            name: lang['_59'],
            icon: <MediaContact
                fill={theme.PRIMARY_TO_WHITE}
            />
        },
    ]

    return (
        <View style={styles.main}>
            {
                actionList.map((item, index) => (
                    <View
                        key={index}
                        style={styles.item}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.roundBtn}
                            onPressIn={() => item?.onPress && item?.onPress()}
                        >
                            {item.icon}
                        </TouchableOpacity>

                        <BodyText style={styles.txt}>{item.name}</BodyText>
                    </View>
                ))
            }

            <CameraModal
                isVisible={cameraVisible}
                onClose={() => setcameraVisible(false)}
                openGalleryView={() => setgalleryVisible(true)}
            />

            <GalleryModal
                isVisible={galleryVisible}
                onClose={() => setgalleryVisible(false)}
                imageUri={image}
            />

        </View>
    )
}

export default MediaPicker

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: wp(100),
        height: hp(22),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        width: wp(33),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(2)
    },
    roundBtn: {
        width: hp(6.22),
        height: hp(6.22),
        borderRadius: hp(6.22),
        backgroundColor: theme.WHITE_TO_SECONDARY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: FONT_SIZE._14,
        color: COLORS.WHITE,
        marginVertical: hp(0.5)
    }
})
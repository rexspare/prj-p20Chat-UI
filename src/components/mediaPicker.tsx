import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { COLORS, FONT_SIZE, hp, wp } from '../assets/stylesGuide'
import useAppConfig from '../hooks/AppConfig'
import { MediaCamera, MediaContact, MediaCrypto, MediaDocument, MediaGallery, MediaLocation } from '../assets/icons'
import { ITHEME } from '../models/config'
import { BodyText } from '.'

interface mediaPickerProps {

}

const MediaPicker: FC<mediaPickerProps> = (props) => {
    const {

    } = props
    const { lang, theme } = useAppConfig()
    const styles = styles_(theme)

    const actionList = [
        {
            id: 1,
            name: lang['_54'],
            icon: <MediaDocument
                fill={theme.PRIMARY_TO_WHITE}
            />
        },
        {
            id: 2,
            name: lang['_55'],
            icon: <MediaCamera
                fill={theme.PRIMARY_TO_WHITE}
            />
        },
        {
            id: 3,
            name: lang['_56'],
            icon: <MediaGallery
                fill={theme.PRIMARY_TO_WHITE}
            />
        },
        {
            id: 4,
            name: lang['_57'],
            icon: <MediaCrypto
                fill={theme.PRIMARY_TO_WHITE}
            />
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
                        >
                            {item.icon}
                        </TouchableOpacity>

                        <BodyText style={styles.txt}>{item.name}</BodyText>
                    </View>
                ))
            }
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
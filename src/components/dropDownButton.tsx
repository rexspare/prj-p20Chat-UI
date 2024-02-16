import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize, wp } from '../assets/stylesGuide'
import { DownIcon } from '../assets/icons'
import { BodyText } from '.'

interface dropDownButtonProps {
    title?: string;
    image?: any;
    onPress?: Function;
    titleStyles?: TextStyle;
    filled?: boolean
}

const DropDownButton: React.FC<dropDownButtonProps> = (props) => {
    const {
        title = 'Account 1',
        image = undefined,
        onPress = () => { },
        titleStyles = {},
        filled = true
    } = props
    const styles = styles_(filled)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress()}
        >
            <View style={styles.titleContainer}>
                {
                    image ?
                        <Image
                            source={image}
                            style={[styles.avatar, { backgroundColor: 'transparent' }]} />
                        :
                        <View style={styles.avatar}></View>
                }
                <BodyText style={{
                    ...styles.title,
                    ...titleStyles
                }}>{title}</BodyText>
            </View>

            <DownIcon />

        </TouchableOpacity>
    )
}

export default DropDownButton

const styles_ = (filled: any,) => StyleSheet.create({
    main: {
        padding: normalize(4.5),
        borderRadius: 100,
        ...COMMON_STYLES.flexRowSpaceBetween,
        backgroundColor: filled ? COLORS.WHITE : 'transparent',
        borderWidth: 1.5,
        borderColor: filled ? COLORS.WHITE : COLORS.SECONDARY,
    },
    titleContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    avatar: {
        width: hp(2.5),
        height: hp(2.5),
        borderRadius: 100,
        backgroundColor: COLORS.PURPLE
    },
    title: {
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: normalize(9.5),
        marginVertical: 0,
        marginLeft:  wp(2),
        marginRight: wp(5)
    }
})
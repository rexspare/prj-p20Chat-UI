import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize, wp } from '../../assets/stylesGuide';
import { BodyText } from '..';
import { IMAGES } from '../../assets/images';

interface tokenItemProps {
    item: any;
    onPress?: Function
}

const TokenItem: React.FC<tokenItemProps> = (props) => {
    const { item, onPress } = props
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress && onPress()}
        >
            <View style={styles.row}>
                <Image
                    source={IMAGES.PVT_CIRCLE}
                    style={styles.icon}
                />
                <BodyText style={{
                    ...styles.pointsTxt,
                    ...styles.title
                }}>0 PVT-USD</BodyText>

            </View>

            <View>
                <BodyText style={styles.pointsTxt}>0 PVT-USD</BodyText>
                <BodyText style={styles.amountTxt}>$0.00 USD</BodyText>
            </View>

        </TouchableOpacity>
    )
}

export default TokenItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingHorizontal: '4%',
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(2)
    },
    pointsTxt: {
        fontSize: normalize(11),
        marginVertical: 0,
        fontFamily: FONTS.MEDIUM
    },
    icon: {
        width: normalize(28),
        height: normalize(28),
        resizeMode: 'contain'
    },
    amountTxt: {
        textAlign: 'right',
        marginTop: normalize(1),
        fontSize: normalize(9),
        color: COLORS.SUBTLE
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    title: {
        fontFamily: FONTS.SEMI_BOLD,
        marginLeft: 10
    }
})
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp, normalize, wp } from '../../assets/stylesGuide';
import { BodyText } from '..';
import { IMAGES } from '../../assets/images';
import { ITHEME } from '../../models/config';
import useAppConfig from '../../hooks/AppConfig';


interface coinItemProps {
    item: any;
    onPress?: Function
}

const CoinItem: React.FC<coinItemProps> = (props) => {
    const { item, onPress } = props
    const { theme } = useAppConfig()

    const styles = styles_(theme)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.main}
            onPress={() => onPress && onPress()}
        >
            <Image
                source={item.icon}
                style={styles.icon}
            />

            <View style={styles.container}>

                <View style={styles.row}>
                    <BodyText style={styles.name}>{item.name}</BodyText>
                    <BodyText style={styles.priceTxt}>${item.price}</BodyText>
                </View>

                <View style={styles.row}>
                    <BodyText style={styles.shortName}>0.03 {item.shortName}</BodyText>
                    <BodyText style={{
                        ...styles.percTxt,
                        color: item.isPositive ? COLORS.PRIMARY : COLORS.DANGER
                    }}>{item.gain}</BodyText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default React.memo(CoinItem)

const styles_ = (theme: ITHEME) => StyleSheet.create({
    main: {
        width: '100%',
        backgroundColor: COLORS.TRANSPARENT,
        paddingVertical: hp(1.9),
        ...COMMON_STYLES.flexRowSpaceBetween,
        borderBottomWidth: 0.5,
        borderColor: theme.BORDER_BOTTOM,
    },
    name: {
        marginVertical: 0,
        fontWeight: '500',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left'
    },
    shortName: {
        marginVertical: 0,
        fontSize: FONT_SIZE._12,
        color: theme.ACCENT,
        textAlign: 'left',
    },
    priceTxt: {
        marginVertical: 0,
        fontWeight: '700',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'right'
    },
    icon: {
        width: hp(4.82),
        height: hp(4.82),
        borderRadius: hp(4.82),
        resizeMode: 'contain'
    },
    percTxt: {
        marginVertical: 0,
        fontSize: FONT_SIZE._12,
        textAlign: 'right',
        fontWeight: '500',
    },
    container: {
        flex: 1,
        paddingLeft: hp(1.5),
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        flex: 1,
    },
    title: {
        fontWeight: '600',
        marginLeft: 10,

    }
})
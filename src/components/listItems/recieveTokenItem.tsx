import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize, wp } from '../../assets/stylesGuide';
import { BodyText } from '..';
import { IMAGES } from '../../assets/images';
import Entypo from 'react-native-vector-icons/Entypo'

interface recieveTokenItemProps {
    item: any;
    index: number;
    onselect?: Function;
    selected?: any;
    style?: ViewStyle;
}

const RecieveTokenItem: React.FC<recieveTokenItemProps> = (props) => {
    const { item, style, selected = 1, onselect = () => { } } = props


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onselect()}
            style={[styles.main, { borderColor: selected?.id == item?.id ? COLORS.PRIMARY : COLORS.DISABLED }, style]}>
            <View style={styles.row}>
                <Image
                    source={item.icon}
                    style={[styles.icon, { backgroundColor: COLORS.PARROT }]}
                />

                <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                    <BodyText style={styles.title}>{item?.name}</BodyText>
                </View>

            </View>

            <View style={styles.elipisContainer}>
                <View style={{ marginRight: 5 }}>
                    <BodyText style={styles.pointsTxt}>0 {item?.shortName}</BodyText>
                    <BodyText style={styles.amountTxt}>$0.00 USD</BodyText>
                </View>

                <Entypo
                    name='dots-three-vertical'
                    color={COLORS.DISABLED}
                    size={normalize(14)}
                />
            </View>

        </TouchableOpacity>
    )
}

export default RecieveTokenItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingHorizontal: '4%',
        paddingVertical: hp(1.5),
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(2),
        borderWidth: 2,
        borderRadius: 20
    },
    pointsTxt: {
        fontSize: normalize(15),
        marginVertical: 0,
        fontFamily: FONTS.REGULAR,
        color: COLORS.PRIMARY
    },
    icon: {
        width: normalize(28),
        height: normalize(28),
        borderRadius: normalize(28),
        resizeMode: 'contain'
    },
    amountTxt: {
        textAlign: 'right',
        marginVertical: 0,
        marginTop: normalize(1),
        fontSize: normalize(9),
        color: COLORS.SUBTLE
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    title: {
        fontSize: normalize(11),
        marginVertical: 0,
        fontFamily: FONTS.SEMI_BOLD,
    },
    id: {
        textAlign: 'left',
        marginVertical: 0,
        marginTop: normalize(3),
        fontSize: normalize(9),
        color: COLORS.PRIMARY,
    },
    elipisContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
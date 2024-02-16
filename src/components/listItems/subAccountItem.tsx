import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize, wp } from '../../assets/stylesGuide';
import { BodyText } from '..';
import { IMAGES } from '../../assets/images';
import Entypo from 'react-native-vector-icons/Entypo'

interface subAccountItemProps {
    item: any;
    index: any;
    onPress?: Function;
}

const SubAccountItem: React.FC<subAccountItemProps> = (props) => {
    const { item, index, onPress = () => { } } = props

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.main]}
            onPress={() => onPress(item)}
        >
            <View style={styles.row}>
                <View
                    // source={IMAGES.PVT_CIRCLE}
                    style={[styles.icon, { backgroundColor: item.color }]}
                ></View>

                <BodyText style={styles.title}>{item.name}</BodyText>

            </View>

            <BodyText style={styles.id}>Ex078...adsa</BodyText>


            <View style={styles.elipisContainer}>
                <Entypo
                    name={'chevron-small-right'}
                    color={COLORS.BLACK}
                    size={normalize(18)}
                />
            </View>

        </TouchableOpacity>
    )
}

export default SubAccountItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingHorizontal: '4%',
        paddingVertical: hp(1.5),
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(2),
        borderWidth: 2,
        borderRadius: 13,
        borderColor: COLORS.DISABLED
    },
    icon: {
        width: normalize(22),
        height: normalize(22),
        borderRadius: normalize(28),
        resizeMode: 'contain'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '50%',

    },
    title: {
        fontSize: normalize(11),
        marginVertical: 0,
        fontFamily: FONTS.SEMI_BOLD,
        marginLeft: 10
    },
    id: {
        textAlign: 'left',
        marginVertical: 0,
        fontSize: normalize(10),
        color: COLORS.PRIMARY,
        width: '25%'
    },
    elipisContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
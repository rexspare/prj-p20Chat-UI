import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize, wp } from '../assets/stylesGuide';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { BodyText } from '.';


interface selectedAccountProps {
    item: any;
    onPress?: Function;
}

const SelectedAccount: React.FC<selectedAccountProps> = (props) => {
    const { item, onPress = () => { } } = props

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

                <View style={styles.container}>
                    <BodyText style={styles.title}>{item.name}</BodyText>
                    <BodyText style={styles.id}>Ex07878812mx98adsai1259Xvq5</BodyText>
                </View>
            </View>

            <View style={styles.elipisContainer}>
                <AntDesign
                    name={'right'}
                    color={COLORS.BLACK}
                    size={normalize(10)}
                />
            </View>

        </TouchableOpacity>
    )
}

export default SelectedAccount

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingHorizontal: '4%',
        paddingVertical: hp(1),
        ...COMMON_STYLES.flexRowSpaceBetween,
        // marginTop: hp(3),
        borderWidth: 1.5,
        borderRadius: 13,
        borderColor: COLORS.DISABLED,
        minHeight: hp(6)
    },
    icon: {
        width: normalize(12),
        height: normalize(12),
        borderRadius: normalize(28),
        resizeMode: 'contain',
        marginTop: 2
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
    },
    title: {
        fontSize: normalize(10),
        marginVertical: 0,
        fontFamily: FONTS.SEMI_BOLD,
    },
    id: {
        textAlign: 'left',
        marginVertical: 0,
        fontSize: normalize(9),
        color: COLORS.PRIMARY,
    },
    container: {
        marginLeft: 5,
        alignItems: 'flex-start'
    },
    elipisContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
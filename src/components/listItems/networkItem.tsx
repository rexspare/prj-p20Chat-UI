import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { COLORS, COMMON_STYLES, FONTS, hp, normalize, wp } from '../../assets/stylesGuide';
import { BodyText, If, PrimaryButton } from '..';
import { IMAGES } from '../../assets/images';
import Entypo from 'react-native-vector-icons/Entypo'
import useAppConfig from '../../hooks/AppConfig';

interface networkItemProps {
    item: any;
    index: any;
    hideButton?: boolean;
    style?: ViewStyle
}

const NetworkItem: React.FC<networkItemProps> = (props) => {
    const { item = {}, hideButton = false, style } = props
    const { lang } = useAppConfig()
    return (
        <View style={[styles.main, style]}>
            <View style={styles.row}>
                <Image
                    source={item?.icon}
                    style={styles.img} />
                <BodyText>{item?.name || "BitDAO (BIT)"}</BodyText>
            </View>

            <If condition={hideButton == false}>
                <PrimaryButton
                    title={lang['_63']}
                    style={styles.btn}
                    textStyle={styles.btnTxt}
                    onPress={() => { }}
                />
            </If>
        </View>
    )
}

export default NetworkItem

const styles = StyleSheet.create({
    main: {
        width: '100%',
        paddingVertical: hp(1),
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    btn: {
        width: undefined,
        height: hp(4.5),
        marginVertical: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        backgroundColor: COLORS.DISABLED,
        width: hp(5),
        height: hp(5),
        borderRadius: hp(5),
        marginRight: 14,
        resizeMode: 'contain'
    },
    btnTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: normalize(11),
        marginHorizontal: hp(2.5)
    }
})
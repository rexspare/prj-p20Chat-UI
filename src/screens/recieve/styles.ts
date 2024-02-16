import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    txt: {
        fontSize: normalize(10),
        marginTop: hp(2)
    },
    subtle: {
        fontSize: normalize(10),
        marginTop: hp(2),
        color: COLORS.BODY
    },
    qr: {
        width: normalize(160),
        height: normalize(160),
        alignSelf: 'center',
        resizeMode: 'contain',
        marginTop: hp(5)
    },
    btnConatiner: {
        width: '80%',
        alignSelf: 'center',
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(2),
    },
    absoluteConatiner: {
        width: '90%',
        alignSelf: 'center',
        ...COMMON_STYLES.flexRowSpaceBetween,
        position: 'absolute',
        bottom: hp(1)
    },
    addessContainer: {
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        paddingVertical: hp(1.8),
        padding: hp(1),
        borderRadius: 10,
        borderColor: COLORS.DISABLED,
        marginTop: hp(2.5),
    },
    address: {
        fontSize: normalize(10),
        marginVertical: 0,
    },
    generateBtn: {
        width: '62%',
        height: hp(4.7)
    },
    btnTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: normalize(11)
    },
    copyBtn: {
        width: '33%',
        height: hp(4.7)
    },
    copyBtnTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: normalize(11)
    }
})  

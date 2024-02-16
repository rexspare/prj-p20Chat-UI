import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    center: {
        ...COMMON_STYLES.center_,
        marginTop: hp(5),
        marginBottom: hp(7)
    },
    branding: {
        width: hp(27),
        height: hp(27),
        transform: [{ rotate: '4deg' }],
    },
    version: {
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: normalize(16),
        textAlign: 'left'
    },
    btn: {
        marginTop: hp(2)
    },
    btnTxt: {
        fontSize: normalize(13),
        fontFamily: FONTS.REGULAR
    }
})      

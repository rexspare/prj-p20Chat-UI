import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    btn: {
        alignSelf: 'center',
        marginTop: hp(3)
    },
    btnTxt: {
        fontSize: normalize(13)
    }
})      

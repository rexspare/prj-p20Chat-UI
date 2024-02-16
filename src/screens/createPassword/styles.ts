import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, COLORS, normalize } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    btnConatiner: {
        width: '100%',
        marginBottom: isIOS() ? hp(4) : hp(0.8),
        alignSelf: 'center',
        paddingHorizontal: '4%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        flex: 1,
        paddingHorizontal: '1%'
    },
    branding: {
        width: wp(88),
        height: hp(12),
        alignSelf: 'center'
    },
    txt: {
        marginLeft: 5,
        textAlign: 'left',
        marginVertical: 0,
    },
    btnTxt: {
        color: COLORS.SECONDARY
    },
    checkBox: {
        marginRight: 0,
        marginTop: normalize(1)
    }
})  

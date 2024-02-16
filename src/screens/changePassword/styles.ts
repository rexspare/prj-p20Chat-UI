import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    title: {
        fontFamily: FONTS.REGULAR,
        fontSize: normalize(21),
        marginVertical: hp(2)
    },
    subtle: {
        lineHeight: normalize(19),
        fontSize: normalize(12.5),
        marginBottom: hp(2)
    },
    btn: {
        alignSelf: 'center',
        marginTop: hp(3)
    },

    row: {
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    titleStyles: {
        fontFamily: FONTS.REGULAR
    },
    btnConatiner: {
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: '4%',
        marginBottom: hp(1)
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: hp(1),
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
        marginTop:normalize(1)
    }
})      

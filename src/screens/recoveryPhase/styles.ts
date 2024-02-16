import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


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
        alignItems: 'center'
    },
    center: {
        flex: 1,
        marginHorizontal: '1%',
        alignSelf: 'center',
    },
    branding: {
        width: wp(88),
        height: hp(12),
        alignSelf: 'center'
    },
    heading: {
        marginTop: hp(0.5),
        marginBottom: hp(1)
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: hp(1)
    },
    backgorundImg: {
        width: '100%',
        height: '90%',
        marginTop: normalize(10),
        ...COMMON_STYLES.center_
    },
    blurHeading: {
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.WHITE
    },
    blurLabel: {
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        fontSize: normalize(9)
    },
    blurBtn: {
        marginTop :'10%',
        marginBottom: '15%'
    }
})  

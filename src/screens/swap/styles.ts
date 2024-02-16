import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    headingContainer: {
        marginTop: hp(3),
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    from: {
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: normalize(11),
    },
    swapIcon: {
        alignSelf: 'center',
        marginVertical: normalize(5)
    },
    absoluteConatiner: {
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: hp(1)
    },
    txtBntTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: normalize(10)
    },
    summary: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        alignItems: 'flex-start',
        marginTop: normalize(5)
    },
    summaryHeading: {
        fontSize: normalize(10),
        fontFamily: FONTS.MEDIUM,
        width: '50%',
        textAlign: 'left'
    },
    summaryVal: {
        flex: 1,
        alignItems: 'flex-end'
    },
    summaryVal2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },
    summaryTxt: {
        color: COLORS.TEXT,
        fontSize: normalize(10),
        marginVertical: normalize(8),
        marginTop: 0
    },
    summaryTxt2: {
        color: COLORS.TEXT,
        fontSize: normalize(10),
        marginVertical: normalize(8),
        marginTop: 0,
        textAlign:'right',
        width:'50%'
    },
    nextTxt: {
        fontFamily: FONTS.MEDIUM,
    },
    line: {
        width: '100%',
        backgroundColor: COLORS.PRIMARY,
        height: 1,
        marginBottom: normalize(8),
    },
    summaryContainer: {
        backgroundColor: COLORS.DISABLED_OPACITY,
        borderRadius: 10,
        marginTop: hp(3),
        paddingHorizontal: '4%',
        paddingTop: hp(1.3),
        paddingBottom: hp(1.3) - normalize(8),
    },
})      

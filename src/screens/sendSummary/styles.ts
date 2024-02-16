import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    heading: {
        fontFamily: FONTS.EXTRA_BOLD,
        fontSize: normalize(14),
        textAlign: 'left',
        marginTop: hp(3)
    },
    summaryContainer: {
        backgroundColor: COLORS.DISABLED_OPACITY,
        borderRadius: 10,
        marginTop: hp(3),
        paddingHorizontal: '4%',
        paddingTop: hp(1.3),
        paddingBottom: hp(1.3) - normalize(8),
    },
    summary: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        alignItems: 'flex-start',
    },
    summaryHeading: {
        fontSize: normalize(10),
        width: '50%',
        textAlign: 'left'
    },
    summaryVal: {
        flex: 1,
        alignItems: 'flex-end'
    },
    summaryTxt: {
        color: COLORS.PRIMARY,
        fontSize: normalize(10),
        marginVertical: normalize(8),
        marginTop: 0
    },
    line: {
        width: '100%',
        backgroundColor: COLORS.PRIMARY,
        height: 1,
        marginBottom: normalize(8),
    }
})      

import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        alignSelf: 'center',
        ...COMMON_STYLES.flexRowSpaceBetween,
        position: 'absolute',
        bottom: hp(1)
    },
    summary: {
        backgroundColor: COLORS.DISABLED_OPACITY,
        borderRadius: 10,
        marginTop: hp(3),
        alignItems: 'flex-start',
        paddingHorizontal: '4%',
        paddingTop: hp(1.3),
        paddingBottom: hp(1.7) - normalize(8),
    },
    summaryHeading: {
        fontSize: normalize(14.5),
        width: '50%',
        textAlign: 'right',
        color: COLORS.SECONDARY
    },
    summaryContainer: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    summarySubtle: {
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginTop: 0,
        fontSize: normalize(10),
    }

})      

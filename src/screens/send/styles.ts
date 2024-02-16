import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    subHeading: {
        fontFamily: FONTS.MEDIUM,
        textAlign: 'left'
    },
    field: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 11,
        backgroundColor: COLORS.BACKGROUND,
    },
    fieldTitle: {
        marginBottom: normalize(6),
        textAlign: 'left',
        fontFamily: FONTS.SEMI_BOLD,
    },
    fieldContainer: {
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: COLORS.DISABLED,
        height: hp(6),
        paddingHorizontal: 10,
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR,
        paddingRight: '4%',
    },
    fieldIcon: {
        width: normalize(22),
        height: normalize(22),
    },
    txtContainer: {
        marginHorizontal: 10,
        flex: 1

    },
    txt1: {
        textAlign: 'left',
        fontFamily: FONTS.SEMI_BOLD,
        marginVertical: 0
    },
    txt2: {
        textAlign: 'left',
        fontFamily: FONTS.REGULAR,
        marginVertical: 0,
        color: COLORS.SECONDARY
    },
    subTxt1: {
        textAlign: 'left',
        marginVertical: 0,
        fontSize: normalize(6.5),
        marginTop: normalize(1)
    },
    subTxt2: {
        marginVertical: 0,
        fontSize: normalize(6.5),
        fontFamily: FONTS.SEMI_BOLD,
        marginTop: normalize(1),
        textAlign: 'left'
    },
    subTxt3: {
        marginVertical: 0,
        fontSize: normalize(6.5),
        fontFamily: FONTS.SEMI_BOLD,
        marginTop: normalize(1),
        textAlign: 'left',
        color: COLORS.SECONDARY
    },
    fieldContainer1: {
        borderWidth: 1.5,
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: COLORS.DISABLED,
        height: hp(6),
        paddingHorizontal: 10,
        fontSize: normalize(11),
        fontFamily: FONTS.REGULAR,
    },
    rowField: {
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    summary: {
        backgroundColor: COLORS.DISABLED_OPACITY,
        borderRadius: 10,
        marginTop: hp(3),
        ...COMMON_STYLES.flexRowSpaceBetween,
        alignItems: 'flex-start',
        paddingHorizontal: '4%',
        paddingTop: hp(1.3),
        paddingBottom: hp(1.3) - normalize(8),
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
    title: {
        marginBottom: 4,
        textAlign: 'left',
        fontFamily: FONTS.MEDIUM,
    },
    txt3: {
        color: COLORS.DISABLED,
        fontFamily: FONTS.SEMI_BOLD
    },
    absoluteContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        alignSelf:'center'
    }
})      

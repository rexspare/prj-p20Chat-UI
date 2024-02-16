import { StyleSheet } from 'react-native'
import { hasNotch, isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.PRIMARY_OPACITY,
        width: '100%',
        minHeight: hp(33),
        paddingTop: (isIOS() && hasNotch()) ? 65 : 8,
        paddingHorizontal: '4%',
        paddingBottom: hp(2)
    },
    rowContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        alignItems: 'flex-start',
        marginTop: hp(2),
    },
    amountTxt: {
        textAlign: 'left',
        marginTop: 0
    },
    pointsTxt: {
        fontSize: normalize(15),
        marginBottom: 0
    },
    iconContainer: {
        marginTop: hp(4),
        justifyContent: 'space-evenly'
    },
    amountContainer: {
        marginTop: hp(3)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    bottomTxt: {
        fontFamily: FONTS.REGULAR,
        fontSize: normalize(10)
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(40),
    },
    emptyImg: {
        width: normalize(60),
        height: normalize(60),
    },
    emptyTxt: {
        fontFamily: FONTS.SEMI_BOLD,
        color: COLORS.DISABLED,
        fontSize: normalize(12)
    }
})  

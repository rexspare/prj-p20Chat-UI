import { StyleSheet } from 'react-native'
import { hasNotch, isIOS } from '../../utils/myUtils'
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
        width: '100%',
        paddingHorizontal: '1%',
        alignSelf: 'center',
    },
    branding: {
        alignSelf: 'center',
        marginTop: (isIOS() && hasNotch()) ? hp(12.5) : hp(8.5)
    },
    heading: {
        marginTop: hp(4),
        marginBottom: hp(1)
    },
    listContainer: {
        marginTop: hp(1),
        ...COMMON_STYLES.main
    },
    subHheading: {
        textAlign: 'left',
        fontSize: normalize(14),
        marginTop: hp(4)
    },
    txtBtn: {
        alignSelf: 'center',
        borderBottomWidth: 1.5,
        borderColor: COLORS.SECONDARY,
        marginBottom: hp(1.5)
    },
    txtBtnTitle: {
        fontSize: normalize(12),
    }
})  

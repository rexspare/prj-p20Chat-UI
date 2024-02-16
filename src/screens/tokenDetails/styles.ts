import { StyleSheet } from 'react-native'
import { isIOS } from '../../utils/myUtils'
import { hp, COMMON_STYLES, wp, normalize, FONTS, COLORS } from '../../assets/stylesGuide'


export const styles = StyleSheet.create({
    tokenName: {
        fontSize: normalize(14.5),
        marginTop: hp(3)
    },
    tokenAmmout: {
        fontSize: normalize(21),
    },
    tokenStatus: {
        marginVertical: 0,
        color: COLORS.SECONDARY,
        fontSize: normalize(10),
        marginLeft: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(1),
    },
    chart: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: hp(5),
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0
    },
    chipsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        bottom: hp(2)
    },
    balanceCOntainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: hp(3.5),
        width: wp(94),
        alignSelf: 'center',
        borderColor: COLORS.DISABLED,
        paddingHorizontal: '4%',
        paddingVertical:5
    },
    balanceTxt: {
        textAlign: 'left',
        marginBottom: 0,
        fontSize: normalize(14.5),
    },
    balanceAmmout: {
        textAlign: 'left',
        color: COLORS.SECONDARY
    },
    btnConatiner: {
        width: '92%',
        alignSelf: 'center',
        ...COMMON_STYLES.flexRowSpaceBetween,
        position:'absolute',
        bottom:0
    },
    btnStyle: {
        width: '47%'
    },
})  

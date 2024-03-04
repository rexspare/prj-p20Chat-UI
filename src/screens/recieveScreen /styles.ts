import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        backgroundColor: theme.PRIMARY_TO_BLACK
    },
    container: {
        borderTopLeftRadius: hp(3.5),
        borderTopRightRadius: hp(3.5),
        overflow: 'hidden',
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    contentContainerStyle: {
        marginTop: hp(0.5)
    },
    icon: {
        width: hp(4.82),
        height: hp(4.82),
        borderRadius: hp(4.82),
        marginTop: hp(4.5),
        alignSelf: 'center'
    },
    txt1: {
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._16,
        fontWeight: '500',
        marginTop: hp(3)
    },
    qr: {
        width: hp(18),
        height: hp(18),
        marginVertical: hp(3.5),
        alignSelf: 'center'
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: hp(1),
        alignSelf: 'center',
    },
    btn: {
        backgroundColor: COLORS.SECONDARY_30,
        borderWidth: 1,
        borderColor: COLORS.SECONDARY,
        marginBottom: hp(0.5)
    },
    btnTxt: {
        color: COLORS.SECONDARY
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: wp(75),
        alignSelf: 'center',
        maxWidth: 500
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: theme.BORDER
    },
    txt2: {
        fontWeight: '500',
        fontSize: FONT_SIZE._14,
        marginHorizontal: 3,
        color: theme.GREY_TO_WHITE
    },
    txt3: {
        fontWeight: '500',
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        marginTop: hp(3.5)
    },
    addressContainer: {
        backgroundColor: COLORS.GREY_25,
        height: hp(5.1),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: 700,
        alignSelf: 'center',
        borderRadius: hp(1),
        borderWidth: 1,
        borderColor: theme.BORDER,
        marginTop:(hp(2.5))
    },
    txt4: {
        fontSize: FONT_SIZE._14,
        color: theme.BLACK_TO_WHITE
    }
})

export { styles }
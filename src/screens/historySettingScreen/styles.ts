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
    txt1: {
        fontFamily: FONTS.BOLD,
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        textAlign: 'left',
        marginTop: hp(3.5)
    },
    txt2: {
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        textAlign: 'left',
        marginTop: hp(1.25),
    },
    txt3: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._18,
        color: theme.BLACK_TO_WHITE,
        textAlign: 'left',
        marginTop: hp(2.2),
        marginBottom: hp(1.5),
    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(1.5),
        marginHorizontal: hp(1.2)
    },
    outerCirle: {
        width: hp(2.46),
        height: hp(2.46),
        borderRadius: hp(2.46),
        borderWidth: 1.5,
        ...COMMON_STYLES.center_,
        borderColor: theme.BLACK_TO_WHITE
    },
    innerCirle: {
        width: hp(1.5),
        height: hp(1.5),
        borderRadius: hp(1.5),
        backgroundColor: COLORS.SECONDARY
    },
    txt: {
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._16,
        marginLeft: hp(1.5)
    }
})

export { styles }
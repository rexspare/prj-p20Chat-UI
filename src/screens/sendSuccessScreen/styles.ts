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
        marginTop: hp(12),
        alignSelf: 'center'
    },
    txt: {
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._24,
        fontWeight: '600',
        marginTop: hp(3)
    },
    btnContainer: {
        width: '90%',
        position: 'absolute',
        bottom: hp(1),
        alignSelf: 'center',
    },
    ticket: {
        backgroundColor: "rgba(217, 217, 217, 0.25)",
        width: '100%',
        paddingVertical: hp(2),
        marginTop: hp(3.5),
        borderRadius: hp(2)
    },
    row1: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: hp(6),
        marginTop: hp(7),

    },
    row2: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(1.5),
        paddingHorizontal: hp(6),
    },
    txt3: {
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        fontWeight: '400'
    },
    txt4: {
        fontSize: FONT_SIZE._16,
        color: theme.ACCENT,
        fontWeight: '500'
    },
    btn: {
        backgroundColor: COLORS.SECONDARY_30,
        borderWidth: 1,
        borderColor: COLORS.SECONDARY,
    },
    btnTxt: {
        color: COLORS.SECONDARY
    }
})

export { styles }
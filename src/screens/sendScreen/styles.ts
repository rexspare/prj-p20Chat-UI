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
    dropContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        backgroundColor: COLORS.SECONDARY_20,
        marginTop: hp(3.5),
        height: hp(5.36),
        borderRadius: hp(1),
        paddingHorizontal: hp(1.5)
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    icon: {
        width: hp(3.2),
        height: hp(3.2),
        borderRadius: hp(3.2),
        marginRight: hp(1.5)
    },
    txt: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
    },
    addressInputContainer: {
        flex: 1,
        marginTop: hp(4)
    },
    scanIcon: {
        marginLeft: hp(1.5),
        marginTop: hp(4.5)
    },
    netInputContainer: {
        marginTop: hp(0.5)
    },
    txt1: {
        fontSize: FONT_SIZE._14,
        color: theme.BLACK_TO_WHITE,
        fontFamily: FONTS.REGULAR,
        marginBottom: hp(9)
    },
    txt2: {
        fontSize: FONT_SIZE._14,
        color: theme.PRIMARY_TO_WHITE,
        fontFamily: FONTS.MEDIUM
    },
    row1: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginTop: hp(1.5)
    },
    txt3: {
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        fontFamily: FONTS.MEDIUM
    },
    txt4: {
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        fontFamily: FONTS.BOLD
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: hp(1),
        alignSelf: 'center',

    },
})

export { styles }
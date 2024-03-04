import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        backgroundColor: theme.PRIMARY_TO_BLACK
    },
    container: {
        borderTopLeftRadius: hp(4),
        borderTopRightRadius: hp(4),
        overflow: 'hidden',
    },
    contentContainerStyle: {
        marginTop: hp(0.5)
    },
    topContainer: {
        paddingHorizontal: isDeviceTablet() ? "2%" : "5%",
        marginTop: hp(2)
    },
    txt: {
        fontWeight: '600',
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        textAlign: 'left',
        marginTop: hp(1.8)
    },
    txt1: {
        fontWeight: '600',
        fontSize: FONT_SIZE._14,
        color: theme.ACCENT,
        textAlign: 'left',
        marginBottom: hp(1),
        marginTop: hp(2.5)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    avatar: {
        width: hp(6.2),
        height: hp(6.2),
        borderRadius: hp(6.2),
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: hp(2)
    },
    txt2: {
        fontWeight: '400',
        fontSize: FONT_SIZE._14,
        color: theme.BLACK_TO_WHITE,
        marginTop: hp(1)
    },
    line: {
        width: '100%',
        height: 1 / 2,
        backgroundColor: theme.BORDER,
        alignSelf: 'center',
        marginTop: hp(1.8)
    },
    crossContainer: {
        width: hp(1.6),
        height: hp(1.6),
        borderRadius: hp(1.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.WHITE,
        backgroundColor: theme.mode == "light" ? COLORS.ACCENT : COLORS.BLACK
    },
    absoluteContainer: {
        width: '100%',
        paddingHorizontal: isDeviceTablet() ? "2%" : "5%",
        position: 'absolute',
        bottom: (isIOS() && hasNotch()) ? hp(3) : hp(1)
    },
    inputRow: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: COLORS.PRIMARY,
        flex: 1,
        height: hp(4),
        marginLeft: hp(1.5),
        paddingVertical: 0,
        fontWeight: '400',
        fontSize: FONT_SIZE._14,
        color: theme.BLACK_TO_WHITE
    }
})

export { styles }
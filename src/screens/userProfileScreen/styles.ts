import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        backgroundColor: theme.PRIMARY_TO_BLACK,
    },
    container: {
        overflow: 'hidden',
        paddingHorizontal: isDeviceTablet() ? '2%' : "5%",
        backgroundColor: theme.mode == 'light' ? "#F8F8F8" : theme.BACKGROUND
    },
    contentContainerStyle: {
        marginTop: hp(0.5),
        flex: 1,
        borderWidth: 2
    },
    layout: {
        flex: 1,
        backgroundColor: theme.mode == 'light' ? "#F8F8F8" : theme.BACKGROUND
    },
    header: {
        marginTop: (isIOS() && hasNotch()) ? 60 + hp(2) : hp(3)
    },
    userContainer: {
        marginTop: - hp(8.5),
        width: '70%',
        alignSelf: 'center'
    },
    avatarContainer: {
        width: hp(16),
        height: hp(16),
        borderRadius: hp(16),
        alignSelf: 'center',
        ...COMMON_STYLES.center_,
        backgroundColor: theme.BACKGROUND,
    },
    avatar: {
        width: '94%',
        height: '94%',
        borderRadius: hp(21.5),
        zIndex: 100
    },
    optionsContainerStyle: {
        width: 'auto',
        marginTop: hp(3),
        borderRadius: hp(1.5),
        backgroundColor: theme.CHAP_POPUP,
        paddingVertical: hp(1)
    },
    menuTxt: {
        textAlign: 'left',
        paddingLeft: hp(1.5),
        paddingRight: hp(3),
        minWidth: hp(15),
        paddingVertical: hp(0.75),
        fontSize: FONT_SIZE._16,
    },
    txt: {
        fontSize: FONT_SIZE._24,
        color: COLORS.WHITE,
        marginTop: hp(2.2),
        marginBottom: hp(2),
        fontFamily: FONTS.MEDIUM
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp(3),
        width: hp(38),
        alignSelf: 'center'
    },
    iconBtn: {
        backgroundColor: theme.WHITE_TO_BLACK,
        minWidth: hp(11.8),
        minHeight: hp(8.36),
        borderRadius: hp(2),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp(1.5),
    },
    txt1: {
        fontSize: FONT_SIZE._14,
        color: COLORS.SECONDARY,
        fontFamily: FONTS.REGULAR,
        marginTop: hp(1),
    },
    txt2: {
        fontSize: FONT_SIZE._18,
        color: theme.BLACK_TO_WHITE,
        marginTop: hp(4.5),
        textAlign: 'left',
    },
    phoneContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: '100%',
        marginTop: hp(2.5)
    },
    view: {
        flex: 1,
    },
    iconContainer: {
        width: hp(4),
    },
    txt3: {
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        fontFamily: FONTS.SEMI_BOLD,
        textAlign: 'left',
    },
    txt4: {
        fontSize: FONT_SIZE._16,
        color: theme.ACCENT,
        fontFamily: FONTS.REGULAR,
        textAlign: 'left',
    },
    txt5: {
        fontSize: FONT_SIZE._16,
        color: theme.ACCENT,
        fontFamily: FONTS.REGULAR,
        textAlign: 'left',
        marginTop: hp(2)
    },
    itemContianer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: '100%',
        marginTop: hp(3)
    },
    mediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    media: {
        width: hp(11.9),
        height: hp(11.9),
        borderRadius: hp(1.4),
        marginTop: hp(3)
    },
    mediaImg: {
        borderRadius: hp(1.4)
    },
    imgShade: {
        flex: 1,
        ...COMMON_STYLES.center_,
        backgroundColor: COLORS.BLACK_OP,
        borderRadius: hp(1.4)
    },
    txt6: {
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE,
    }
})

export { styles }
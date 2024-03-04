import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        backgroundColor: theme.PRIMARY_TO_BLACK,
    },
    container: {
        borderTopLeftRadius: hp(3.5),
        borderTopRightRadius: hp(3.5),
        overflow: 'hidden',
        paddingHorizontal: isDeviceTablet() ? '2%' : "5%"
    },
    contentContainerStyle: {
        marginTop: hp(0.5),
        flex: 1,
        borderWidth: 2
    },
    avatarContainer: {
        width: hp(21.5),
        height: hp(21.5),
        borderRadius: hp(21.5),
        borderWidth: 4,
        borderColor: COLORS.SECONDARY,
        alignSelf: 'center',
        ...COMMON_STYLES.center_,
        marginTop: hp(4),
        marginBottom: hp(6),
    },
    avatar: {
        width: '94%',
        height: '94%',
        borderRadius: hp(21.5),
    },
    camIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    inpitContainer: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        width: '100%',
        borderBottomWidth: 1 / 2,
        marginBottom: hp(2),
        borderColor: theme.mode == 'light' ? "#EFF0F1" : "#3B3B3B"
    },
    input: {
        flex: 1,
        color: theme.BLACK_TO_WHITE,
        fontWeight: '600',
        fontSize: FONT_SIZE._18,
        height: hp(7.5),
    },
    input1: {
        flex: 1,
        color: theme.ACCENT,
        fontWeight: '400',
        fontSize: FONT_SIZE._16,
        lineHeight: FONT_SIZE._16,
    },
    editBtn: {
        paddingLeft: hp(2)
    },
    txt: {
        color: theme.BLACK_TO_WHITE,
        fontWeight: '600',
        fontSize: FONT_SIZE._18,
        textAlign: 'left'
    },
    iconContainer: {
        width: hp(4),
    }
})

export { styles }
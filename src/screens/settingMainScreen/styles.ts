import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    main: {
        paddingHorizontal: isDeviceTablet() ? "2%" : "5%",

    },
    card: {
        backgroundColor: theme.PRIMARY_TO_BLACK,
        marginTop: (isIOS() && hasNotch()) ? hp(9) : hp(2),
        borderRadius: hp(1.6),
        paddingVertical: hp(1),
        marginBottom: hp(1),
    },
    header: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween,
        minHeight: hp(6),
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
    },
    titleContainer: {
        position: 'absolute',
        width: isDeviceTablet() ? wp(96) : wp(90),
        alignSelf: 'center'
    },
    title: {
        fontSize: FONT_SIZE._20,
        color: COLORS.WHITE
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
        marginTop: hp(4),
        marginBottom: hp(2)
    },
    user: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: hp(6.2),
        height: hp(6.2),
        borderRadius: hp(6.2),
        marginRight: hp(2)
    },
    username: {
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE,
        textAlign: 'left'
    },
    id: {
        fontSize: FONT_SIZE._14,
        color: COLORS.WHITE,
        textAlign: 'left',
        marginTop: hp(0.3)
    }
})

export { styles }
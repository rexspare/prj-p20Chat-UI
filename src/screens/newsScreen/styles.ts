import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp, COMMON_STYLES } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME,) => StyleSheet.create({
    layout: {
        backgroundColor: theme.OFFWHOTE_TO_BLACK
    },
    main: {
        paddingHorizontal: isDeviceTablet() ? '2%' : '5%',
        backgroundColor: theme.OFFWHOTE_TO_BLACK
    },
    inputContainer: {
        borderRadius: hp(2),
        paddingHorizontal: '5%',
        borderWidth: 1,
        backgroundColor: theme.OFFWHOTE_TO_BLACK
    },
    input: {
        height: hp(6.1),
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._16,
        backgroundColor: theme.OFFWHOTE_TO_BLACK,
        borderRadius: hp(2),
        marginTop: 1,
        marginLeft: 1
    },
    container: {
        borderTopLeftRadius: hp(3.5),
        borderTopRightRadius: hp(3.5),
        overflow: 'hidden',
        flex: 1,
    },
    txt1: {
        textAlign: 'left',
        color: COLORS.SECONDARY,
        fontSize: FONT_SIZE._32,
        marginVertical: hp(0.8)
    },
    txt2: {
        textAlign: 'left',
        color: theme.ACCENT,
        fontSize: FONT_SIZE._16,
    },
    carouselConatianer: {
        borderColor: theme.BLACK_TO_WHITE,
        marginVertical: hp(2.5),
    },
    pagination: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        paddingVertical: hp(1)
    },
    dotStyle: {
        width: hp(0.7),
        height: hp(0.7),
        backgroundColor: COLORS.WHITE,
        marginHorizontal: 0
    },
    dotContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveDotStyle: {
        width: hp(0.7),
        height: hp(0.7),
        borderRadius: hp(1),
        backgroundColor: COLORS.WHITE,
        marginHorizontal: 2
    },
    activeDotStyle: {
        width: hp(3.3),
        height: hp(0.7),
        borderRadius: hp(1),
        backgroundColor: COLORS.WHITE,
        marginHorizontal: 2
    },
    row: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween,
        marginBottom: hp(2)
    },
    txt3: {
        fontFamily: FONTS.SEMI_BOLD,
        color: theme.BLACK_TO_WHITE,
        fontSize: FONT_SIZE._18
    },
    txt4: {
        color: theme.ACCENT,
        fontSize: FONT_SIZE._14
    },
    itemContainer: {
        width: '100%',
        backgroundColor: theme.BACKGROUND,
        borderRadius: hp(1),
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1 / 3,
        marginBottom: hp(2)
    },
    line: {
        width: '100%',
        height: 0.7,
        backgroundColor: COLORS.PRIMARY,
        marginVertical: hp(0.5)
    }
})

export { styles }
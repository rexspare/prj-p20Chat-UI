import { StyleProp, StyleSheet } from "react-native";
import { COLORS, FONTS, FONT_SIZE, hp, wp } from "../../assets/stylesGuide";
import { ITHEME } from "../../models/config";
import { hasNotch, isDeviceTablet, isIOS } from "../../utils/myUtils";

const styles = (theme: ITHEME) => StyleSheet.create({
    img: {
        width: hp(30),
        height: hp(29),
        resizeMode: 'contain',
        position: 'absolute',
        right: -hp(6),
        top: (isIOS() && hasNotch()) ? hp(4) : -hp(2)
    },

    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: '5%',
        marginBottom: (isIOS() && hasNotch()) ? hp(3.5) : hp(2)
    },
    txt: {
        marginTop: hp(14.5),
        color: theme.BLACK_TO_WHITE,
        fontFamily: FONTS.SEMI_BOLD
    },
    txt1: {
        color: theme.TAB_ICON,
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
        marginTop: hp(1),
    },
    otpMain: {
        width: 'auto',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: hp(3)
    },
    OTPField: {
        borderRadius: hp(1.5),
        width: hp(6.4),
        height: hp(6.4),
        borderWidth: 1,
        backgroundColor: theme.BACKGROUND,
        justifyContent: 'center',
        borderColor: theme.BORDER,
        marginHorizontal: hp(1)
    },
    OTPtext: {
        fontSize: FONT_SIZE._18,
        textAlign: 'center',
        fontFamily: FONTS.SEMI_BOLD,
        color: theme.BLACK_TO_WHITE
    },
    OTPFieldHighlight: {
        borderColor: theme.SECONDARY,
    },
    txt2: {
        color: theme.TAB_ICON,
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._14,
    },
    txt3: {
        color: theme.BLACK_TO_WHITE,
        fontFamily: FONTS.SEMI_BOLD,
        fontSize: FONT_SIZE._14,
    }

})

export { styles }
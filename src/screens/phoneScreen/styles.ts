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
        marginTop: hp(3),
    },
    containerStyle: {
        backgroundColor: theme.BACKGROUND,
        alignSelf: 'center',
        width: wp(90),
        maxWidth: 550,
        height: hp(6.4),
        borderWidth: 1,
        borderColor: theme.BORDER,
        borderRadius: hp(1),
        paddingHorizontal: 10,
        marginTop: hp(4.5),
    },
    textContainerStyle: {
        backgroundColor: theme.BACKGROUND,
        flex: 1,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    textInputStyle: {
        fontFamily: FONTS.REGULAR,
        flex: 1,
        height: hp(6.4),
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
    },
    codeTextStyle: {
        fontFamily: FONTS.REGULAR,
        fontSize: FONT_SIZE._16,
        color: theme.BLACK_TO_WHITE,
        borderRightWidth: 1,
        paddingRight: 5,
        borderColor: theme.BORDER,
        paddingVertical: hp(0.5),
    },
    countryPickerButtonStyle: {
        backgroundColor: theme.BACKGROUND,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: 'auto',
    }

})

export { styles }
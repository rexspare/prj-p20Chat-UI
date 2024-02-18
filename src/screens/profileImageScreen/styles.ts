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
    imgBg: {
        width: hp(17.15),
        height: hp(17.15),
        alignSelf: 'center',
        marginVertical: hp(3),
        backgroundColor: theme.BACKGROUND,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    avatar: {
        borderRadius: hp(17)
    }

})

export { styles }